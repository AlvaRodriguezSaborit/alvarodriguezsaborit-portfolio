import { motion } from "motion/react";
import SectionHeader from "../components/SectionHeader";
import CarrerBox from "../components/Carrer/CarrerBox";
import { useTranslation } from "react-i18next";

export default function Carrer() {
  const { t } = useTranslation();
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-16">
        <SectionHeader
          title={t("career.title")}
          index={1}
          subtitle={t("career.subtitle")}
        />
      </div>

      <CarrerBox />
    </motion.div>
  );
}
