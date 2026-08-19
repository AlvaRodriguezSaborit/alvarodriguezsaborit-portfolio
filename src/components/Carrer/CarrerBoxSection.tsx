import type { CarrerSectionProps } from "./CarrerData";
import { motion } from "motion/react";

export default function CarrerBoxSection({
  carrerData,
}: {
  carrerData: CarrerSectionProps;
}) {
  const formattedStartDate = carrerData.startDate.toLocaleDateString("es-ES", {
    month: "2-digit",
    year: "numeric",
  });

  const formattedEndDate =
    carrerData.endDate?.toLocaleDateString("es-ES", {
      month: "2-digit",
      year: "numeric",
    }) || "Actualidad";

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
        <div className="flex flex-row items-center gap-2 text-lg">
          <span className="font-semibold">{carrerData.position}</span> ·
          <span className="text-gray-700">{carrerData.company}</span>
        </div>
        <div>
          <p>{carrerData.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
