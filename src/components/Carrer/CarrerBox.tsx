import CarrerBoxSection from "./CarrerBoxSection";
import { carrerData } from "./CarrerData";

export default function CarrerBox() {
  return (
    <div className="border-y border-x rounded-xl border-[#d9d7d1] divide-y divide-[#d9d7d1] ">
      {carrerData.map((carrerData, index) => (
        <div key={index}>
          <CarrerBoxSection carrerData={carrerData} />
        </div>
      ))}
    </div>
  );
}
