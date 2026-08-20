import ContactFormBox from "../components/Contact/ContactFormBox";
import SectionHeader from "../components/SectionHeader";

export default function Contact() {
  return (
    <div className="flex flex-col gap-20">
      <SectionHeader title="Contacto" subtitle="Trabajemos juntos" index={5} />
      <div className="flex flex-row gap-10">
        <span className="w-1/2 text-4xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
          repellendus similique aliquid hic ullam necessitatibus excepturi.
          Doloremque, dolorem unde. Dolor, pariatur repudiandae? Ipsam assumenda
          quaerat, dicta sed dignissimos cum velit!
        </span>
        <ContactFormBox />
      </div>
    </div>
  );
}
