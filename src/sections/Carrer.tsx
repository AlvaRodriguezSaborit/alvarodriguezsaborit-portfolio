import { motion } from "motion/react";
import SectionHeader from "../components/SectionHeader";
import CarrerBox from "../components/Carrer/CarrerBox";

export default function Carrer() {
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-16">
        <SectionHeader
          title="Carrera"
          index={1}
          subtitle="Dónde he trabajado"
        />
      </div>

      <CarrerBox />
    </motion.div>
  );
}
