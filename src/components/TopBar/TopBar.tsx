import { useTranslation } from "react-i18next";
import LanguajeSelector from "./LanguajeSelector";

export default function TopBar() {
  const { t } = useTranslation();
  const textLink = " hover:text-[#55810a] cursor-pointer transition-colors";

  return (
    <div className="justify-center items-center mb-4 backdrop-blur-md top-0 z-50 sticky">
      <header className="w-full border-b border-b-[#d9d7d1]">
        <div className="max-w-[75%] mx-auto flex flex-row py-4 text-black">
          <div className="flex flex-1 items-center">
            <span className={textLink}>alvarodriguez</span>
          </div>

          <div className="flex flex-row justify-center items-center gap-6">
            <span className={textLink}>{t("topBar.links.aboutMe")}</span>
            <span className={textLink}>{t("topBar.links.career")}</span>
            <span className={textLink}>{t("topBar.links.projects")}</span>
          </div>

          <div className="flex flex-1 justify-end items-center gap-2">
            <span className={textLink}>{t("topBar.cv")}</span>
            <LanguajeSelector />
          </div>
        </div>
      </header>
    </div>
  );
}
