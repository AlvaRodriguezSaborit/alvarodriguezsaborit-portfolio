import SocialLink from "./SocialLink";
import GithubIcon from "../icons/GithubIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import EmailIcon from "../icons/EmailIcon";

export default function SocialLinksList({
  iconSize = "size-8",
}: {
  iconSize?: string;
}) {
  return (
    <div className="flex flex-row md:flex-col gap-4 md:gap-4">
      <SocialLink
        icon={<GithubIcon className={iconSize} />}
        label="AlvaRodriguezSaborit"
        externalLink="https://github.com/AlvaRodriguezSaborit"
      />
      <SocialLink
        icon={<LinkedinIcon className={iconSize} />}
        label="Álvaro Rodríguez Saborit"
        initialDelay={2000}
        externalLink="https://www.linkedin.com/in/%C3%A1lvaro-rodr%C3%ADguez-saborit-882757310/"
      />
      <SocialLink
        icon={<EmailIcon className={iconSize} />}
        label="alvarodriguezsaborit@gmail.com"
        initialDelay={4000}
        externalLink="mailto:alvarodriguezsaborit@gmail.com"
      />
    </div>
  );
}
