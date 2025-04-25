import { SurveyData } from "@/types";
import { Label } from "@radix-ui/react-label";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { FormErrors } from "../SurveyView";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
   question: string;
   category: string;
   description: string;
   prop: keyof SurveyData;
   options?: { label: string; value: string }[];
}

function YesNoQuestion({
   errors,
   description,
   category,
   question,
   formData,
   setFormData,
   prop: key,
   options,
}: Props) {
   return (
      <div className="space-y-2">
         <h2>{category}</h2>
         <Label>{question}</Label>
         <p className="text-neutral-500 text-sm drop-shadow-sm">
            {description.trim()}
         </p>
         <RadioGroup
            value={formData[key]}
            dir="rtl"
            onValueChange={(value: string) =>
               setFormData({ ...formData, [key]: value })
            }
         >
            {options?.length ? (
               <Fragment>
                  {options.map(({ label, value }) => (
                     <div key={value} className="flex items-center space-x-2">
                        <RadioGroupItem value={value} id={value} />
                        <Label htmlFor={value}>{label}</Label>
                     </div>
                  ))}
               </Fragment>
            ) : (
               <Fragment>
                  <div className="flex items-center space-x-2">
                     <RadioGroupItem value="yes" id={`${key}-yes`} />
                     <Label htmlFor={`${key}-yes`}>ع</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                     <RadioGroupItem value="no" id={`${key}-no`} />
                     <Label htmlFor={`${key}-no`}>لا</Label>
                  </div>
               </Fragment>
            )}
         </RadioGroup>
         {errors[key] && (
            <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
         )}
      </div>
   );
}

export default YesNoQuestion;
