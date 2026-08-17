export default function SectionHeader({
  title,
  subtitle,
  index,
}: {
  title: string;
  subtitle: string;
  index: number;
}) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-row w-full justify-between mb-4">
        <p className="text-gray-500 uppercase">{title}</p>
        <p className="text-gray-500">#{index}</p>
      </div>
      <p className="font-semibold text-xl">{subtitle}</p>
    </div>
  );
}
