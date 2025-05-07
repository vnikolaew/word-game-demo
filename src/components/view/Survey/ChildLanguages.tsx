import { Input } from "@/components/ui/input";
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

function ChildLanguages({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label>
            ما هي اللغات التي تعلمتها في المنزل وأنت طفل قبل سن السادسة؟
         </Label>
         <RadioGroup
            value={formData.languageAcquisition}
            dir="rtl"
            className="!my-4"
            onValueChange={(value: string) =>
               setFormData({ ...formData, languageAcquisition: value })
            }
         >
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="native_only" id="native_only" />
               <Label htmlFor="native_only">لغتك الأم فقط</Label>
            </div>

            <div className="flex items-center space-x-2">
               <RadioGroupItem
                  value="native_then_other"
                  id="native_then_other"
               />
               <Label htmlFor="native_then_other">
                  لغتك الأم أولاً ثم لغة أخرى
               </Label>
            </div>

            <div className="flex items-center space-x-2">
               <RadioGroupItem value="native_and_other" id="native_and_other" />
               <Label htmlFor="native_and_other">
                  لغتك الأم ولغة أخرى في نفس الوقت
               </Label>
            </div>
         </RadioGroup>
         {formData.languageAcquisition?.toLowerCase().includes(`other`) && (
            <div className="space-y-2 !mt-4">
               <Label>
                  إذا كنت قد تعلمت لغة غير العربية قبل سن السادسة، يرجى تحديدها:
               </Label>
               <Input
                  value={formData.otherAcquisitionLanguage}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherAcquisitionLanguage: e.target.value,
                     })
                  }
                  placeholder=""
               />
            </div>
         )}
         {errors.languageAcquisition && (
            <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
         )}
      </div>
   );
}

export default ChildLanguages;
