import { motion } from "motion/react";
import { useState, useEffect, type ReactNode } from "react";

interface SocialLinkProps {
  icon: ReactNode;
  label: string;
  externalLink?: string;
  initialDelay?: number;
}

export default function SocialLink({
  icon,
  label,
  externalLink,
  initialDelay = 1500,
}: SocialLinkProps) {
  const [showLabel, setShowLabel] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLabel(false);
    }, initialDelay);
    return () => clearTimeout(timer);
  }, [initialDelay]);

  return (
    <a
      href={externalLink}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 cursor-pointer text-black hover:text-black no-underline"
      onMouseEnter={() => setShowLabel(true)}
      onMouseLeave={() => setShowLabel(false)}
    >
      {icon}
      <motion.span
        initial={{ opacity: 0, x: -10 }}
        animate={{
          opacity: showLabel ? 1 : 0,
          x: showLabel ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
        className="bg-white p-2 rounded-2xl font-semibold hidden sm:inline-flex text-sm md:text-base"
      >
        {label}
      </motion.span>
    </a>
  );
}
