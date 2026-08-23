export interface CarrerSectionProps {
  startDate: Date;
  endDate?: Date;
  position: string;
  company: string;
  description: string;
  location: string;
}

export const carrerData: CarrerSectionProps[] = [
  {
    startDate: new Date("2025-02"),
    endDate: new Date("2026-05"),
    position: "career.tineverse.position",
    company: "Tineverse",
    description: "career.tineverse.description",
    location: "career.tineverse.location",
  },
  {
    startDate: new Date("2024-09"),
    endDate: new Date("2024-12"),
    position: "career.porcelanosa.position",
    company: "Porcelanosa Grupo",
    description: "career.porcelanosa.description",
    location: "career.porcelanosa.location",
  },
];

