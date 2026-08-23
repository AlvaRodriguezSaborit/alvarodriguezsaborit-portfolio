import { useState, useRef, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import i18n from "../../i18n";
import { languageNames } from "./languagesData";
import { motion, AnimatePresence } from "motion/react";

export default function LanguajeSelector() {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={ref}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm text-gray-900 focus:outline-none cursor-pointer"
      >
        {languageNames[i18n.language as keyof typeof languageNames]}
        <ChevronDownIcon
          className="-mr-1 size-5 text-gray-400"
          aria-hidden="true"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.1 }}
            className="absolute left-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none py-1"
          >
            {Object.entries(languageNames).map(([code, name]) => (
              <button
                key={code}
                onClick={() => {
                  i18n.changeLanguage(code);
                  setIsOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 text-sm focus:outline-none cursor-pointer ${
                  i18n.language === code
                    ? "bg-gray-100 font-medium text-black"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {name}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
