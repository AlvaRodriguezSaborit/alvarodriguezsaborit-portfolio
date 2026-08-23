import { useState, type FormEvent } from "react";
import ContactFormBoxInput from "./ContactFormBoxInput";
import { ArrowUpRight } from "lucide-react";
import Toast from "../ui/Toast";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export default function ContactFormBox() {
  const { t } = useTranslation();
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const AUTOREPLY_TEMPLATE_ID = import.meta.env.VITE_AUTOREPLY_TEMPLATE_ID;
  const CONTACT_TEMPLATE_ID = import.meta.env.VITE_CONTACT_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const [toast, setToast] = useState<{
    message: string;
    type: "success" | "error";
  } | null>(null);

  async function sendMails(form: HTMLFormElement) {
    await Promise.all([
      emailjs.sendForm(SERVICE_ID, CONTACT_TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      }),
      emailjs.sendForm(SERVICE_ID, AUTOREPLY_TEMPLATE_ID, form, {
        publicKey: PUBLIC_KEY,
      }),
    ]);
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;

    try {
      await sendMails(form);
      setToast({ message: t("contact.form.successMessage"), type: "success" });
      form.reset();
    } catch {
      setToast({ message: t("contact.form.errorMessage"), type: "error" });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full md:w-1/2 flex flex-col gap-6 h-fit border border-[#d9d7d1] p-6 md:p-8 rounded-lg"
    >
      <div className="flex flex-col gap-4 sm:flex-row">
        <ContactFormBoxInput
          className="w-full"
          props={{
            label: t("contact.form.name"),
            name: "user_name",
            placeholder: t("contact.form.namePlaceholder"),
          }}
        />
        <ContactFormBoxInput
          className="w-full"
          props={{
            label: t("contact.form.email"),
            name: "email",
            placeholder: t("contact.form.emailPlaceholder"),
            type: "email",
          }}
        />
      </div>
      <ContactFormBoxInput
        props={{
          label: t("contact.form.subject"),
          name: "subject",
          placeholder: t("contact.form.subjectPlaceholder"),
          type: "text",
        }}
      />
      <ContactFormBoxInput
        props={{
          label: t("contact.form.message"),
          name: "message",
          placeholder: t("contact.form.messagePlaceholder"),
          type: "textarea",
        }}
      />
      <button className="group items-center font-semibold w-fit inline-flex gap-2 bg-black text-white cursor-pointer border border-black hover:bg-gray-950 px-4 py-2 rounded-lg transition-colors">
        {t("contact.form.send")}
        <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>

      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </form>
  );
}
