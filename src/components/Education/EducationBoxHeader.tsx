export default function EducationBoxHeader({
  title,
  yearStart,
  yearEnd,
  icon: Icon,
}: {
  title: string;
  yearStart: number;
  yearEnd: number;
  icon: React.ElementType;
}) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between items-center">
        <Icon className="bg-[#D5F899] rounded-xl size-12 p-2" />
        <span className="font-mono uppercase text-gray-500 text-sm">
          {title}
        </span>
      </div>
      <div className="font-mono">
        {yearEnd ? `${yearStart} - ${yearEnd}` : yearStart}
      </div>
    </div>
  );
}
