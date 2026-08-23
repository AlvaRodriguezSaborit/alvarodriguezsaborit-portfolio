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
    title: "La Murà webapp",
    description:
      "Aplicación web full-stack en producción para una heladería artesanal real. Incluye catálogo con disponibilidad en tiempo real, sistema de pedidos con algoritmo de empaquetado de tarrinas, panel de administración completo y notificaciones por Telegram y email. Desplegada en heladerialamura.es y sirviendo a clientes reales.",
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
    title: "Portfolio Personal",
    description:
      "Portfolio personal diseñado para destacar proyectos y experiencia técnica con un enfoque limpio y moderno. Desarrollado con React y TypeScript, implementa animaciones fluidas con Framer Motion, diseño responsive estructurado con Tailwind CSS y un sistema de contacto automatizado e integrado con EmailJS.",
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
