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
    yearStart: 2020,
    yearEnd: 2025,
    headerTitle: "education.degree.headerTitle",
    title: "education.degree.title",
    educationCenter: "Universitat Jaume I",
    educationCenterUbication: "education.degree.location",
    description: "education.degree.description",
    icon: GraduationCap,
  },
  {
    yearStart: 2020,
    yearEnd: 2020,
    headerTitle: "education.cambridge.headerTitle",
    title: "education.cambridge.title",
    educationCenter: "TEC Idiomes",
    educationCenterUbication: "education.cambridge.location",
    description: "education.cambridge.description",
    icon: DiplomaIcon,
  },
];
