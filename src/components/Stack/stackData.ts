import CssIcon from "../../icons/CssIcon";
import HtmlIcon from "../../icons/HtmlIcon";
import JavaIcon from "../../icons/JavaIcon";
//import JavasScriptIcon from "../../icons/JavasScriptIcon";
import NextjsIcon from "../../icons/NextjsIcon";
import NodejsIcon from "../../icons/NodejsIcon";
import PythonIcon from "../../icons/PythonIcon";
import ReactIcon from "../../icons/ReactIcon";
import SqlIcon from "../../icons/SqlIcon";
import TailwindIcon from "../../icons/TailwindIcon";
import TypeScriptIcon from "../../icons/TypescriptIcon";
import VueIcon from "../../icons/VueIcon";
import FastapiIcon from "../../icons/FastapiIcon";
import FirebaseIcon from "../../icons/FirebaseIcon";
import GitIcon from "../../icons/GitIcon";
import MysqlIcon from "../../icons/MysqlIcon";
import NestIcon from "../../icons/NestIcon";
import PostgresqlIcon from "../../icons/PostgresqlIcon";
import SpringIcon from "../../icons/SpringIcon";
import BashIcon from "../../icons/BashIcon";

export interface StackIconData {
  name: string;
  icon: React.ElementType;
}

export interface StackSectionData {
  title: string;
  iconsData: StackIconData[];
}

export const stackData: StackSectionData[] = [
  {
    title: "stack.languages",
    iconsData: [
      { name: "TypeScript", icon: TypeScriptIcon },
      //{ name: "JavaScript", icon: JavasScriptIcon },
      { name: "SQL", icon: SqlIcon },
      { name: "Python", icon: PythonIcon },
      { name: "HTML", icon: HtmlIcon },
      { name: "CSS", icon: CssIcon },
      { name: "Java", icon: JavaIcon },
    ],
  },
  {
    title: "stack.frameworks",
    iconsData: [
      { name: "React", icon: ReactIcon },
      { name: "Vue", icon: VueIcon },

      { name: "Next.js", icon: NextjsIcon },
      { name: "Node.js", icon: NodejsIcon },
      { name: "Nest.js", icon: NestIcon },
      { name: "FastAPI", icon: FastapiIcon },
      { name: "Spring", icon: SpringIcon },

      { name: "Tailwind CSS", icon: TailwindIcon },
    ],
  },
  {
    title: "stack.databases",
    iconsData: [
      { name: "PostgreSQL", icon: PostgresqlIcon },
      { name: "MySQL", icon: MysqlIcon },

      { name: "Firebase", icon: FirebaseIcon },
    ],
  },
  {
    title: "stack.tools",
    iconsData: [
      { name: "Git", icon: GitIcon },

      { name: "Bash", icon: BashIcon },
    ],
  },
];
