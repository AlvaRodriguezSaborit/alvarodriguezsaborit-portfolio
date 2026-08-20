import SectionHeader from "../components/SectionHeader";
import { stackData } from "../components/Stack/stackData";
import StackSection from "../components/Stack/StackSection";

export default function Stack() {
  return (
    <div className="flex flex-col gap-16">
      <SectionHeader
        title="Stack"
        subtitle="Tecnologías y herramientas que utilizo"
        index={3}
      />
      <div className="flex flex-col gap-12">
        {stackData.map((section, index) => (
          <div key={index}>
            <StackSection stackSectionData={section} />
          </div>
        ))}
      </div>
    </div>
  );
}
