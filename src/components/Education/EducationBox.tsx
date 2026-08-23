import EducationBoxHeader from "./EducationBoxHeader";
import type { EducationDataProps } from "./educationData";
import { MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function EducationBox({
  educationBoxData,
}: {
  educationBoxData: EducationDataProps;
}) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col w-full border-[#d9d7d1] border bg-white rounded-lg p-6 gap-4">
      <EducationBoxHeader
        title={t(educationBoxData.headerTitle)}
        yearStart={educationBoxData.yearStart}
        yearEnd={educationBoxData.yearEnd}
        icon={educationBoxData.icon}
      />
      <div className="flex flex-col gap-2">
        <span className="text-xl font-semibold">
          {t(educationBoxData.title)}
        </span>
        <div className="w-fit inline-flex items-center gap-2 font-mono text-sm">
          <span>{educationBoxData.educationCenter}</span>
          <span>-</span>
          <MapPin className="size-3" />
          <span>{t(educationBoxData.educationCenterUbication)}</span>
        </div>
        <p className="text-gray-700">{t(educationBoxData.description)}</p>
      </div>
    </div>
  );
}
