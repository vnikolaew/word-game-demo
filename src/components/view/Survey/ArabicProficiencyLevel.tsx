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
   questionEn: string;
}

const OPTIONS = [
   { value: 0, label: "none" },
   { value: 1, label: "very low" },
   { value: 2, label: "low" },
   { value: 3, label: "fair" },
   { value: 4, label: "slightly less than adequate" },
   { value: 5, label: "adequate" },
   { value: 6, label: "slightly more than adequate" },
   { value: 7, label: "good" },
   { value: 8, label: "very good" },
   { value: 9, label: "excellent" },
   { value: 10, label: "perfect" },
] as const;

function ArabicProficiencyLevel({
   errors,
   formData,
   prop,
    questionEn,
   question,
   setFormData,
}: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <div>
            <Label className={`!text-right !pl-auto items-end justify-end`} dir={`ltr`}
                   htmlFor={prop}
            >
               {questionEn}
            </Label>
            <br/>
            <Label>{question}</Label>
         </div>
         <CustomDropdown
            options={OPTIONS.map(({ label, value }) => ({
               value,
               label: `${value} - ${label}`
            }))}
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
