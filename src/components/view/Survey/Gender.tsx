import { SurveyData } from "@/types";
import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { FormErrors } from "../SurveyView";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function Gender({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2">
         <Label>يرجى تحديد جنسك:</Label>
         <RadioGroup
            value={formData.gender}
            dir="rtl"
            className="!my-4"
            onValueChange={(value: string) =>
               setFormData({ ...formData, gender: value })
            }
         >
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="male" id="male" />
               <Label htmlFor="male">ذكر</Label>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="female" id="female" />
               <Label htmlFor="female">أنثى</Label>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem
                  value="prefer_not_to_say"
                  id="prefer_not_to_say"
               />
               <Label htmlFor="prefer_not_to_say">لا أود الإفصاح</Label>
            </div>
         </RadioGroup>
         {errors.gender && (
            <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
         )}
      </div>
   );
}

export default Gender;
