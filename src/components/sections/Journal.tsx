import { Container } from "../ui/Container";
import { ProductTransformationJournal } from "./ProductTransformationJournal";

export default function Journal() {
  return <section className="py-20"><Container><ProductTransformationJournal title="As decisões por trás das transformações." description="Um arquivo editorial para líderes de produto, design e tecnologia que querem entender os critérios, trade-offs e aprendizados que não cabem em uma apresentação final." buttonLabel="Explorar o Product Transformation Journal" href="/journal" /></Container></section>;
}
