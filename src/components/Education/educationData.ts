import { GraduationCap } from "lucide-react";
import DiplomaIcon from "../../icons/DiplomaIcon";

export interface EducationDataProps {
  title: string;
  headerTitle: string;
  educationCenter: string;
  educationCenterUbication: string;
  description: string;
  yearStart: number;
  yearEnd?: number;
  icon: React.ElementType;
}

export const educationData: EducationDataProps[] = [
  {
    title: "Grado en Ingeniería Informática",
    headerTitle: "Grado",
    educationCenter: "Universitat Jaume I",
    educationCenterUbication: "Castellón de la Plana, España",
    description: "Ingeniería de software",
    yearStart: 2020,
    yearEnd: 2025,
    icon: GraduationCap,
  },
  {
    title: "Certificado por Cambridge de nivel B2",
    headerTitle: "Certificado",
    educationCenter: "TEC Idiomes",
    educationCenterUbication: "Vila-real, España",
    description: "Inglés",
    yearStart: 2020,
    icon: DiplomaIcon,
  },
];
