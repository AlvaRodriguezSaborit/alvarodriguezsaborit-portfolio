import SectionHeader from "../components/SectionHeader";
import { projectsData } from "../components/Projects/projectsData";
import ProjectSecion from "../components/Projects/ProjectSection";

export default function Projects() {
  return (
    <div className="flex flex-col gap-16">
      <SectionHeader
        title="Proyectos"
        subtitle="Una muestra de proyectos que he desarrollado"
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
