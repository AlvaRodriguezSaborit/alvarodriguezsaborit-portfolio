import type { CarrerSectionProps } from "./CarrerData";
import { motion } from "motion/react";

export default function CarrerBoxSection({
  carrerData,
}: {
  carrerData: CarrerSectionProps;
}) {
  const formattedStartDate = carrerData.startDate.toLocaleDateString("es-ES", {
    month: "short",
    year: "numeric",
  });

  const formattedEndDate =
    carrerData.endDate?.toLocaleDateString("es-ES", {
      month: "short",
      year: "numeric",
    }) || "Actualidad";

  return (
    <motion.div
      className="border-b bg-white hover:bg-amber-50 p-4 flex flex-row gap-2"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <p>
        {formattedStartDate} - {formattedEndDate}
      </p>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <p>{carrerData.position}</p>
          <p>{carrerData.company}</p>
        </div>
        <div>
          <p>{carrerData.description}</p>
        </div>
      </div>
    </motion.div>
  );
}
