import { ArrowUpRight, Radio } from "lucide-react";
import type { ProjectsSectionProps } from "./projectsData";
import { motion } from "motion/react";

export default function ProjectSecion({
  position,
  index,
  stackIcons,
  title,
  description,
  image,
  isCodeAvailable = true,
  isAppInLive = true,
  codeLink,
  liveAppLink,
}: {
  position: "left" | "right";
  index: number;
} & ProjectsSectionProps) {
  return (
    <div
      className={`flex flex-row gap-16 items-stretch ${position === "right" ? "flex-row-reverse" : ""}`}
    >
      <motion.img
        initial={{ opacity: 0, x: position === "right" ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.05 }}
        className="w-1/2 object-cover border border-[#d9d7d1] rounded-2xl"
        src={image}
        alt={title}
      />
      <motion.div
        initial={{ opacity: 0, x: position === "left" ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="relative flex flex-col gap-4 justify-between overflow-hidden"
      >
        {/* Decorative index */}
        <span
          className={`absolute -top-6 text-[9rem] font-bold text-gray-100 leading-none select-none pointer-events-none ${position === "right" ? "left-0" : "right-0"}`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Text content */}
        <div className="relative flex flex-col gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-gray-400">
            Proyecto {String(index + 1).padStart(2, "0")}
          </span>
          <span className="text-3xl font-semibold">{title}</span>
          <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Icons and buttons */}
        <div className="relative flex flex-col gap-4">
          <div className="flex flex-row flex-wrap gap-4">
            {stackIcons.map((iconData, i) => {
              const Icon = iconData.icon;
              return <Icon key={i} className="size-8" />;
            })}
          </div>
          <div className="flex flex-row gap-4">
            {isCodeAvailable && (
              <a href={codeLink}>
                <button className="group items-center font-semibold w-fit inline-flex gap-2 bg-black text-white cursor-pointer border border-black hover:bg-gray-950 px-4 py-2 rounded-lg transition-colors">
                  Ver código
                  <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </button>
              </a>
            )}
            {isAppInLive && (
              <a href={liveAppLink}>
                <button className="group items-center font-semibold w-fit inline-flex gap-2 bg-white text-black cursor-pointer border border-[#d9d7d1] hover:bg-gray-50 px-4 py-2 rounded-lg transition-colors">
                  Ver app en vivo
                  <Radio className="size-5 transition-transform duration-400 group-hover:-scale-160 group-hover:text-red-600" />
                </button>
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
