import { MenuItem } from "@headlessui/react";
import i18n from "../../i18n";
import { languageNames } from "./languagesData";

export default function LanguageItem({ lang }: { lang: "en" | "es" | "va" }) {
  function updateLanguage(lang: "en" | "es" | "va") {
    i18n.changeLanguage(lang);
  }
  return (
    <MenuItem>
      <a
        onClick={() => updateLanguage(lang)}
        href="#"
        className="block px-4 py-2 text-sm text-gray-700 data-focus:font-bold data-focus:outline-hidden"
      >
        {languageNames[lang]}
      </a>
    </MenuItem>
  );
}
