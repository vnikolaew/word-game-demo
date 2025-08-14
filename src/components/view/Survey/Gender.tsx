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
         <div>
            <Label htmlFor="gender">
               Please specify your gender
            </Label>
            <br/>
            <Label htmlFor={`gender`}>يرجى تحديد جنسك:</Label>
         </div>
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
               <div className="flex flex-col items-center space-x-2">
                  <Label htmlFor="male">Male</Label>
                  <Label htmlFor="male">
                     ذكر
                  </Label>
               </div>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="female" id="female" />
               <div className="flex flex-col items-center">
                  <Label htmlFor="female">Female</Label>
                  <Label htmlFor="female">
                     أنثى
                  </Label>
               </div>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem
                  value="prefer_not_to_say"
                  id="prefer_not_to_say"
               />
               <div className="flex flex-col items-center">
                  <Label htmlFor="prefer_not_to_say">Prefer not to disclose</Label>
                  <Label htmlFor="prefer_not_to_say">
                     يفضل عدم الإفصاح
                  </Label>
               </div>
            </div>
         </RadioGroup>
         {errors.gender && (
            <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
         )}
      </div>
   );
}

export default Gender;
