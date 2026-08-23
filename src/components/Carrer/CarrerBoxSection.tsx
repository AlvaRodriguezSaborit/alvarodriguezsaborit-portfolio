import type { CarrerSectionProps } from "./CarrerData";
import { motion } from "motion/react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18n";

export default function CarrerBoxSection({
  carrerData,
}: {
  carrerData: CarrerSectionProps;
}) {
  const { t } = useTranslation();
  const locale = i18n.language === "en" ? "en-GB" : "es-ES";
  const formattedStartDate = carrerData.startDate.toLocaleDateString(locale, {
    month: "2-digit",
    year: "numeric",
  });

  const formattedEndDate =
    carrerData.endDate?.toLocaleDateString(locale, {
      month: "2-digit",
      year: "numeric",
    }) || t("career.present");

  return (
    <motion.div
      className="bg-white hover:bg-amber-50 p-6 rounded-2xl flex flex-col gap-2 md:flex-row md:gap-24"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-gray-700 md:w-48 shrink-0 text-sm md:text-base">
        {formattedStartDate} - {formattedEndDate}
      </p>
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row gap-1 sm:gap-2 sm:items-center">
          <span className="font-semibold">{t(carrerData.position)}</span>
          <span className="text-gray-500 hidden sm:inline">|</span>
          <span className="text-gray-700">
            {carrerData.company} - {t(carrerData.location)}
          </span>
        </div>
        <div>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">
            {t(carrerData.description)}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
