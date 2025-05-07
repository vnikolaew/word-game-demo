import { SurveyData } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import { CustomDropdown, FormErrors } from "../SurveyView";
import { Label } from "@/components/ui/label";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
   prop: keyof SurveyData;
   question: string;
}

const OPTIONS = [
   { value: 0, label: "لا يوجد" },
   { value: 1, label: "منخفض جداً" },
   { value: 2, label: "منخفض" },
   { value: 3, label: "مقبول" },
   { value: 4, label: "أقل قليلاً من المناسب" },
   { value: 5, label: "مناسب" },
   { value: 6, label: "أكثر كثيراً من المناسب" },
   { value: 7, label: "جيد" },
   { value: 8, label: "جيد جداً" },
   { value: 9, label: "ممتاز" },
   { value: 10, label: "مثالي" },
] as const;

function ArabicProficiencyLevel({
   errors,
   formData,
   prop,
   question,
   setFormData,
}: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label>{question}</Label>
         <CustomDropdown
            options={OPTIONS}
            value={Number(formData[prop]) ?? ``}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  [prop]: value.toString(),
               }))
            }
            placeholder={``}
            error={errors[prop]}
         />
      </div>
   );
}

export default ArabicProficiencyLevel;
