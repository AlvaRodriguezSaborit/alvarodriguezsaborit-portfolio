import ContactFormBoxInput from "./ContactFormBoxInput";
import { ArrowUpRight } from "lucide-react";

export default function ContactFormBox() {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("asds");
  }

  return (
    <form
      onSubmit={handleSubmit}
      className=" w-1/2 flex flex-col gap-6 h-fit border border-[#d9d7d1] p-8 rounded-lg"
    >
      <div className="flex flex-row gap-4">
        <ContactFormBoxInput
          className="w-full"
          props={{ label: "nombre", placeholder: "Tu nombre" }}
        />
        <ContactFormBoxInput
          className="w-full"
          props={{ label: "email", placeholder: "Tu email", type: "email" }}
        />
      </div>
      <ContactFormBoxInput
        props={{ label: "asunto", placeholder: "Asunto", type: "text" }}
      />
      <ContactFormBoxInput
        props={{
          label: "mensaje",
          placeholder: "Tu mensaje",
          type: "textarea",
        }}
      />
      <button className="group items-center font-semibold w-fit inline-flex gap-2 bg-black text-white cursor-pointer border border-black hover:bg-gray-950 px-4 py-2 rounded-lg transition-colors">
        Enviar mensaje
        <ArrowUpRight className="size-5 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </button>
    </form>
  );
}
