import type { StackSectionData } from "./stackData";
import StackIconComponent from "./StackIconComponent";

export default function StackSection({
  stackSectionData,
}: {
  stackSectionData: StackSectionData;
}) {
  return (
    <div className="flex flex-col gap-4">
      <span className="font-mono text-2xl uppercase">
        {stackSectionData.title}
      </span>
      <div className="flex flex-row flex-wrap gap-6 sm:gap-12 border border-[#d9d7d1] bg-white rounded-2xl p-6">
        {stackSectionData.iconsData.map((iconData, index) => (
          <div key={index}>
            <StackIconComponent
              icon={iconData.icon}
              name={iconData.name}
              index={index}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
