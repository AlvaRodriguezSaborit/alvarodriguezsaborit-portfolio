import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

export default function StackIconComponent({
  icon: Icon,
  name,
  index,
}: {
  icon: React.ElementType;
  name: string;
  index: number;
}) {
  const [entryDone, setEntryDone] = useState(false);
  const [hovered, setHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>(null);

  const entryTimeMs = (0.8 + index * 0.2) * 1000;

  return (
    <div
      className="relative flex flex-col items-center justify-center h-18 cursor-pointer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => setHovered((prev) => !prev)}
    >
      <motion.div
        className={`transition-[filter] duration-200 ${
          entryDone && !hovered ? "grayscale" : "grayscale-0"
        }`}
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        animate={{ scale: hovered ? 1.2 : 1 }}
        onViewportEnter={() => {
          timerRef.current = setTimeout(() => setEntryDone(true), entryTimeMs);
        }}
        onViewportLeave={() => {
          if (timerRef.current) clearTimeout(timerRef.current);
          setEntryDone(false);
        }}
        transition={{
          duration: 0.8,
          delay: index * 0.2,
          scale: { duration: 0.2, delay: 0 },
        }}
      >
        <Icon className="size-12" />
      </motion.div>
      <AnimatePresence>
        {(!entryDone || hovered) && (
          <motion.span
            className="absolute top-full mt-2 font-semibold border border-[#d9d7d1] bg-white w-max p-2 rounded-2xl"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {name}
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}

