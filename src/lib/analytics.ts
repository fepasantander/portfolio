import { supabase } from "@/lib/supabase/client";

export const analyticsEvents = [
  "portfolio_open", "hero_cta", "journal_cta", "scroll_depth", "case_open", "gallery_open", "gallery_image_change", "testimonial_visible", "testimonial_linkedin_click", "resume_download", "contact_email_click", "contact_linkedin_click", "contact_agenda_click", "journal_open", "journal_case_open", "return_to_portfolio", "web_vital", "application_error",
] as const;

export type AnalyticsEvent = (typeof analyticsEvents)[number];

function sessionId() {
  if (typeof window === "undefined") return "server";
  const key = "portfolio_analytics_session";
  const current = sessionStorage.getItem(key);
  if (current) return current;
  const created = crypto.randomUUID();
  sessionStorage.setItem(key, created);
  return created;
}

export async function track(event: AnalyticsEvent, properties: Record<string, string | number | boolean> = {}) {
  if (typeof window === "undefined") return;
  const payload = { event, route: window.location.pathname, referer: document.referrer || null, device: window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop", viewport: `${window.innerWidth}x${window.innerHeight}`, language: navigator.language, session: sessionId(), properties };
  try {
    await supabase.from("analytics_events").insert(payload);
  } catch {
    // Tracking never interferes with the visitor experience.
  }
}

export const analytics = {
  trackPage: (url: string) => track("portfolio_open", { url }),
  trackEvent: (eventName: string, properties?: Record<string, unknown>) => track("application_error", { event_name: eventName, has_properties: Boolean(properties) }),
  trackCTA: (ctaName: string, destination: string) => track(ctaName.toLowerCase().includes("journal") ? "journal_cta" : "hero_cta", { destination }),
  trackDownload: (fileName: string) => track("resume_download", { file: fileName }),
};
