import SectionHeader from "../components/SectionHeader";
import { educationData } from "../components/Education/educationData";
import EducationBox from "../components/Education/EducationBox";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";

export default function Education() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-16">
      <SectionHeader
        title={t("education.title")}
        subtitle={t("education.subtitle")}
        index={3}
      />
      <div className="flex flex-col gap-8 md:flex-row md:gap-20">
        {educationData.map((educationDataBox, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-full md:w-1/3 flex"
          >
            <EducationBox educationBoxData={educationDataBox} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
