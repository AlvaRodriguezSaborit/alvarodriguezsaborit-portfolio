import SectionHeader from "../components/SectionHeader";
import { stackData } from "../components/Stack/stackData";
import StackSection from "../components/Stack/StackSection";
import { useTranslation } from "react-i18next";

export default function Stack() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-16">
      <SectionHeader
        title={t("stack.title")}
        subtitle={t("stack.subtitle")}
        index={4}
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
