import { useState, type FormEvent } from "react";
import ContactFormBoxInput from "./ContactFormBoxInput";
import { ArrowUpRight } from "lucide-react";
import Toast from "../ui/Toast";
import emailjs from "@emailjs/browser";

export default function ContactFormBox() {
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
      setToast({ message: "¡Mensaje enviado!", type: "success" });
      form.reset();
    } catch {
      setToast({ message: "Error al enviar el mensaje", type: "error" });
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-1/2 flex flex-col gap-6 h-fit border border-[#d9d7d1] p-8 rounded-lg"
    >
      <div className="flex flex-row gap-4">
        <ContactFormBoxInput
          className="w-full"
          props={{
            label: "nombre",
            name: "user_name",
            placeholder: "Tu nombre",
          }}
        />
        <ContactFormBoxInput
          className="w-full"
          props={{
            label: "email",
            name: "email",
            placeholder: "Tu email",
            type: "email",
          }}
        />
      </div>
      <ContactFormBoxInput
        props={{
          label: "asunto",
          name: "subject",
          placeholder: "Asunto",
          type: "text",
        }}
      />
      <ContactFormBoxInput
        props={{
          label: "mensaje",
          name: "message",
          placeholder: "Tu mensaje",
          type: "textarea",
        }}
      />
      <button className="group items-center font-semibold w-fit inline-flex gap-2 bg-black text-white cursor-pointer border border-black hover:bg-gray-950 px-4 py-2 rounded-lg transition-colors">
        Enviar mensaje
        <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>

      {toast && <Toast {...toast} onClose={() => setToast(null)} />}
    </form>
  );
}
