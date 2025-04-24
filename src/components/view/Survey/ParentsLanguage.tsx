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

function ParentsLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label>
            ما هي اللغة/اللغات التي استخدمها والداك/مقدمو الرعاية في المنزل
            عندما كنت طفلاً؟
         </Label>
         <RadioGroup
            value={formData.familyLanguage}
            dir="rtl"
            onValueChange={(value: string) =>
               setFormData({ ...formData, familyLanguage: value })
            }
         >
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="arabic_only" id="arabic_only" />
               <Label htmlFor="arabic_only">لعربية فقط من كلا الوالدين</Label>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="other_only" id="other_only" />
               <Label htmlFor="other_only">لغة أخرى فقط من كلا الوالدين</Label>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="arabic_and_other" id="arabic_and_other" />
               <Label htmlFor="arabic_and_other">
                  العربية من أحد الوالدين ولغة أخرى من الوالد الآخر
               </Label>
            </div>
            <div className="flex items-center space-x-2">
               <RadioGroupItem value="mix" id="mix" />
               <Label htmlFor="mix">
                  مزيج من العربية ولغة أخرى من كلا الوالدين
               </Label>
            </div>
         </RadioGroup>
         {formData.familyLanguage?.toLowerCase().includes(`other`) && (
            <div className="space-y-2 !mt-4">
               <Label>
                  إذا كانت عائلتك تستخدم لغة/لغات غير العربية، يرجى تحديدها:
               </Label>
               <Input
                  value={formData.otherFamilyLanguage}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherFamilyLanguage: e.target.value,
                     })
                  }
                  placeholder=""
               />
            </div>
         )}
         {errors.familyLanguage && (
            <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
         )}
      </div>
   );
}

export default ParentsLanguage;
