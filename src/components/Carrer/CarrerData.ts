export interface CarrerSectionProps {
  startDate: Date;
  endDate?: Date;
  position: string;
  company: string;
  description: string;
}

export const carrerData: CarrerSectionProps[] = [
  {
    startDate: new Date("2025-02"),
    endDate: new Date("2026-05"),
    position: "Ingeniero de software",
    company: "Tineverse",
    description: "Desarrollador full-stack",
  },
  {
    startDate: new Date("2024-09"),
    endDate: new Date("2024-12"),
    position: "Ingeniero de software en prácticas",
    company: "Porcelanosa Grupo",
    description: "Desarrollador full-stack",
  },
];
