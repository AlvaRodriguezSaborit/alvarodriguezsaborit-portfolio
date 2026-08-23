import ContactFormBox from "../components/Contact/ContactFormBox";
import SectionHeader from "../components/SectionHeader";
import SocialLinksList from "../components/SocialLinksList";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-20">
      <SectionHeader title={t("contact.title")} subtitle={t("contact.subtitle")} index={5} />
      <div className="flex flex-row gap-32">
        <div className="flex flex-col gap-8 w-1/2">
          <span className="text-3xl text-left">
            {t("contact.pitch.before1")}{" "}
            <mark className="bg-[#D5F899] px-2 rounded-sm">{t("contact.pitch.highlight1")}</mark>
            {t("contact.pitch.before2")}{" "}
            <mark className="bg-[#D5F899] px-2 rounded-sm">
              {t("contact.pitch.highlight2")}
            </mark>
          </span>
          <SocialLinksList iconSize="size-10" />
        </div>

        <ContactFormBox />
      </div>
    </div>
  );
}
