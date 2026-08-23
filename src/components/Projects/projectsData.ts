import lamuraImage from "../../assets/lamura-screenshot.png";
import portfolioImage from "../../assets/portfolio-screenshot.png";
import type { StackIconData } from "../Stack/stackData";
import TypeScriptIcon from "../../icons/TypescriptIcon";
import VueIcon from "../../icons/VueIcon";
import NestIcon from "../../icons/NestIcon";
import PostgresqlIcon from "../../icons/PostgresqlIcon";
import ReactIcon from "../../icons/ReactIcon";

export interface ProjectsSectionProps {
  title: string;
  description: string;
  image: string;
  stackIcons: StackIconData[];
  isCodeAvailable?: boolean;
  isAppInLive?: boolean;
  codeLink?: string;
  liveAppLink?: string;
}

export const projectsData: ProjectsSectionProps[] = [
  {
    title: "projects.lamura.title",
    description: "projects.lamura.description",
    image: lamuraImage,
    stackIcons: [
      { name: "Vue", icon: VueIcon },
      { name: "Nest.js", icon: NestIcon },
      { name: "PostgreSQL", icon: PostgresqlIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
    ],
    isCodeAvailable: true,
    isAppInLive: true,
    codeLink: "https://github.com/AlvaRodriguezSaborit/lamura-webapp",
    liveAppLink: "https://heladerialamura.es/",
  },
  {
    title: "projects.portfolio.title",
    description: "projects.portfolio.description",
    image: portfolioImage,
    stackIcons: [
      { name: "React", icon: ReactIcon },
      { name: "TypeScript", icon: TypeScriptIcon },
    ],
    isCodeAvailable: true,
    isAppInLive: true,
    codeLink:
      "https://github.com/AlvaRodriguezSaborit/alvarodriguezsaborit-portfolio",
    liveAppLink: "https://heladerialamura.es/",
  },
];
