import { SurveyData } from "@/types";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React, { Dispatch, SetStateAction } from "react";
import { FormErrors } from "../SurveyView";
import { Input } from "@/components/ui/input";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function MotherLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2">
         <Label>أي لغة تعتبرها لغتك الأم؟</Label>
         <RadioGroup
            value={formData.motherLanguage}
            onValueChange={(value: string) =>
               setFormData({ ...formData, motherLanguage: value })
            }
         >
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="arabic" id="arabic" />
               <Label htmlFor="arabic">العربية</Label>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="arabic_and_other" id="arabic_and_other" />
               <Label htmlFor="arabic_and_other">
                  العربية ولغة أخرى (يرجى التحديد)
               </Label>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="other" id="other" />
               <Label htmlFor="other">لغة أخرى (يرجى التحديد)</Label>
            </div>
         </RadioGroup>
         {(formData.motherLanguage === `other` ||
            formData.motherLanguage === `arabic_and_other`) && (
            <div className="space-y-2">
               <Label>يرجى ذكر اللغة الأخرى:</Label>
               <Input
                  value={formData.otherMotherLanguage}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherMotherLanguage: e.target.value,
                     })
                  }
                  placeholder=""
               />
            </div>
         )}
         {errors.motherLanguage && (
            <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
         )}
      </div>
   );
}

export default MotherLanguage;
