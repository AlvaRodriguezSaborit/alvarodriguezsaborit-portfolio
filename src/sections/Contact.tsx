import ContactFormBox from "../components/Contact/ContactFormBox";
import SectionHeader from "../components/SectionHeader";
import SocialLinksList from "../components/SocialLinksList";

export default function Contact() {
  return (
    <div className="flex flex-col gap-20">
      <SectionHeader title="Contacto" subtitle="Trabajemos juntos" index={5} />
      <div className="flex flex-row gap-32">
        <div className="flex flex-col gap-8 w-1/2">
          <span className="text-3xl text-left">
            Me entusiasma la idea de unirme a un equipo donde pueda colaborar en
            productos que tengan un impacto real. Si tienes una vacante abierta
            o crees que mi perfil puede encajar en tu empresa, no dudes en
            escribirme.
          </span>
          <SocialLinksList iconSize="size-10" />
        </div>

        <ContactFormBox />
      </div>
    </div>
  );
}
