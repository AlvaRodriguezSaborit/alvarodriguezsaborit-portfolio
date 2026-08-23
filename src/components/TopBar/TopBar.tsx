import { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguajeSelector from "./LanguajeSelector";
import i18n from "../../i18n";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function TopBar() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const textLink = " hover:text-gray-500 cursor-pointer transition-colors";
  const hrefCv = i18n.language !== "en" ? "/cv.pdf" : "/cv-english.pdf";

  const navLinks = [
    { href: "#aboutMe", label: t("topBar.links.aboutMe") },
    { href: "#career", label: t("topBar.links.career") },
    { href: "#projects", label: t("topBar.links.projects") },
    { href: "#education", label: t("topBar.links.education") },
    { href: "#stack", label: t("topBar.links.stack") },
    { href: "#contact", label: t("topBar.links.contact") },
  ];

  return (
    <div className="justify-center items-center backdrop-blur-md top-0 z-50 fixed w-full">
      <header className="w-full border-b border-b-[#d9d7d1]">
        <div className="w-full px-6 md:max-w-[75%] md:px-0 mx-auto flex flex-row py-4 text-black">
          <div className="flex flex-1 items-center">
            <span className={textLink}>alvarodriguez</span>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex flex-row justify-center items-center gap-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className={textLink}>
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex flex-1 justify-end items-center gap-2">
            <span className={textLink}>
              <a href={hrefCv} target="_blank" rel="noopener noreferrer">
                {t("topBar.cv")}
              </a>
            </span>
            <LanguajeSelector />
            {/* Mobile hamburger */}
            <button
              className="md:hidden ml-2 cursor-pointer p-1"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-[#d9d7d1]"
            >
              <div className="flex flex-col px-6 py-4 gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-black hover:text-gray-500 transition-colors py-1"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
