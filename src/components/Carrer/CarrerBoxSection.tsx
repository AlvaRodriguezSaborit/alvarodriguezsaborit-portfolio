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
      className=" bg-white hover:bg-amber-50 p-4 rounded-2xl flex flex-row gap-24"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p className="font-mono text-gray-700 w-48 shrink-0">
        {formattedStartDate} - {formattedEndDate}
      </p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <span className="font-semibold">{t(carrerData.position)}</span>
          <span className="text-gray-500">|</span>
          <span className="text-gray-700">
            {carrerData.company} - {t(carrerData.location)}
          </span>
        </div>
        <div>
          <p className="text-gray-700 whitespace-pre-line leading-relaxed">{t(carrerData.description)}</p>
        </div>
      </div>
    </motion.div>
  );
}
