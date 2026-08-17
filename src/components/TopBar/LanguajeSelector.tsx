import { Menu, MenuButton, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import i18n from "../../i18n";
import LanguageItem from "./LanguageItem";
import { languageNames } from "./languagesData";

export default function LanguajeSelector() {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 inset-ring-gray-300 hover:bg-gray-50">
        {languageNames[i18n.language]}
        <ChevronDownIcon
          aria-hidden="true"
          className="-mr-1 size-5 text-gray-400"
        />
      </MenuButton>

      <MenuItems
        transition
        className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md  transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <LanguageItem lang="va" />
          <LanguageItem lang="es" />
          <LanguageItem lang="en" />
        </div>
      </MenuItems>
    </Menu>
  );
}
