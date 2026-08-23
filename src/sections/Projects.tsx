import SectionHeader from "../components/SectionHeader";
import { projectsData } from "../components/Projects/projectsData";
import ProjectSecion from "../components/Projects/ProjectSection";
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col gap-16">
      <SectionHeader
        title={t("projects.title")}
        subtitle={t("projects.subtitle")}
        index={2}
      />
      {projectsData.map((projectData, index) => (
        <ProjectSecion
          position={index % 2 === 0 ? "left" : "right"}
          index={index}
          {...projectData}
          key={index}
        />
      ))}
    </div>
  );
}
