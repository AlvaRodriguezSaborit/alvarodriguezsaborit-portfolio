import SectionHeader from "../components/SectionHeader";
import { educationData } from "../components/Education/educationData";
import EducationBox from "../components/Education/EducationBox";
import { motion } from "motion/react";

export default function Education() {
  return (
    <div className="flex flex-col gap-16">
      <SectionHeader
        title="Educación"
        subtitle="Estudios y titulaciones"
        index={2}
      />
      <div className="flex flex-row gap-20">
        {educationData.map((educationDataBox, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="w-1/3 flex"
          >
            <EducationBox educationBoxData={educationDataBox} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
