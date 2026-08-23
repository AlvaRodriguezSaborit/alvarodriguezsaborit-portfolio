import { useTranslation } from "react-i18next";
import LanguajeSelector from "./LanguajeSelector";
import i18n from "../../i18n";

export default function TopBar() {
  const { t } = useTranslation();
  const textLink = " hover:text-gray-500 cursor-pointer transition-colors";
  const hrefCv = i18n.language !== "en" ? "/cv.pdf" : "/cv-english.pdf";

  return (
    <div className="justify-center items-center backdrop-blur-md top-0 z-50 fixed w-full">
      <header className="w-full border-b border-b-[#d9d7d1]">
        <div className="max-w-[75%] mx-auto flex flex-row py-4 text-black">
          <div className="flex flex-1 items-center">
            <span className={textLink}>alvarodriguez</span>
          </div>

          <div className="flex flex-row justify-center items-center gap-6">
            <a href="#aboutMe" className={textLink}>
              {t("topBar.links.aboutMe")}
            </a>
            <a href="#career" className={textLink}>
              {t("topBar.links.career")}
            </a>
            <a href="#projects" className={textLink}>
              {t("topBar.links.projects")}
            </a>
            <a href="#education" className={textLink}>
              {t("topBar.links.education")}
            </a>
            <a href="#stack" className={textLink}>
              {t("topBar.links.stack")}
            </a>
            <a href="#contact" className={textLink}>
              {t("topBar.links.contact")}
            </a>
          </div>

          <div className="flex flex-1 justify-end items-center gap-2">
            <span className={textLink}>
              <a href={hrefCv} target="_blank" rel="noopener noreferrer">
                {t("topBar.cv")}
              </a>
            </span>
            <LanguajeSelector />
          </div>
        </div>
      </header>
    </div>
  );
}
