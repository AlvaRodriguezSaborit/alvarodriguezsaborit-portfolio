import CarrerBoxSection from "./CarrerBoxSection";
import { carrerData } from "./CarrerData";

export default function CarrerBox() {
  return (
    <div className="border-t border-x">
      {carrerData.map((carrerData, index) => (
        <div key={index}>
          <CarrerBoxSection carrerData={carrerData} />
        </div>
      ))}
    </div>
  );
}
