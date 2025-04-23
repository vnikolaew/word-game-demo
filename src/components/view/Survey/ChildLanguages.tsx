import { Input } from "@/components/ui/input";
import { SurveyData } from "@/types";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React, { Dispatch, SetStateAction } from "react";
import { FormErrors } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function ChildLanguages({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2">
         <Label>
            ما هي اللغات التي تعلمتها في المنزل وأنت طفل قبل سن السادسة؟
         </Label>
         <RadioGroup
            value={formData.languageAcquisition}
            onValueChange={(value: string) =>
               setFormData({ ...formData, languageAcquisition: value })
            }
         >
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="arabic_only" id="arabic_only" />
               <Label htmlFor="arabic_only">العربية فقط</Label>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem
                  value="arabic_then_other"
                  id="arabic_then_other"
               />
               <Label htmlFor="arabic_then_other">
                  العربية أولاً ثم لغة أخرى
               </Label>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="arabic_and_other" id="arabic_and_other" />
               <Label htmlFor="arabic_and_other">
                  العربية ولغة أخرى في نفس الوقت
               </Label>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem
                  value="other_then_arabic"
                  id="other_then_arabic"
               />
               <Label htmlFor="other_then_arabic">
                  لغة أخرى أولاً ثم العربية
               </Label>
            </div>
         </RadioGroup>
         {formData.languageAcquisition?.toLowerCase().includes(`other`) && (
            <div className="space-y-2">
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
