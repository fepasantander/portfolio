/**
 * Felipe Santander Platform — Camada de Analytics Agnóstica
 * Define os métodos de rastreamento exigidos pela Product Constitution v1.0.
 * Evita o acoplamento de provedores específicos (como GA4, PostHog, Clarity).
 */

export const analytics = {
  trackPage: (url: string) => {
    // Futura integração: GA4 / PostHog / Clarity
    console.log(`[Analytics] Page View: ${url}`);
  },

  trackEvent: (eventName: string, properties?: Record<string, any>) => {
    console.log(`[Analytics] Event: ${eventName}`, properties);
  },

  trackCTA: (ctaName: string, destination: string) => {
    console.log(`[Analytics] CTA Clicked: ${ctaName} -> ${destination}`);
  },

  trackDownload: (fileName: string) => {
    console.log(`[Analytics] File Download: ${fileName}`);
  }
};
