'use client';
import {Label} from "@radix-ui/react-label";
import React, {Dispatch, SetStateAction, useState} from "react";
import {CustomDropdown, FormErrors} from "../SurveyView";
import {SurveyData} from "@/types";
import {Input} from "@/components/ui/input";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

const OPTIONS: { value: string, label: string}[] = [
   {value: "saudi", label: "سعودية"},
   {value: "emirati", label: "إماراتية"},
   {value: "bahraini", label: "بحرينية"},
   {value: "kuwaiti", label: "كويتية"},
   {value: "yemeni", label: "يمنية"},
   {value: "qatari", label: "قطرية"},
   {value: "omani", label: "عمانية"},
   {value: "jordanian", label: "أردنية"},
   {value: "syrian", label: "سورية"},
   {value: "lebanese", label: "لبنانية"},
   {value: "palestinian", label: "فلسطينية"},
   {value: "iraqi", label: "عراقية"},
   {value: "sudanese", label: "سودانية"},
   {value: "egyptian", label: "مصرية"},
   {value: "libyan", label: "ليبية"},
   {value: "tunisian", label: "تونسية"},
   {value: "algerian", label: "جزائرية"},
   {value: "moroccan", label: "مغربية"},
   {value: "mauritanian", label: "موريتانية"},
   {value: "other", label: "أخرى"}
]

function ArabicDialect({errors, formData, setFormData}: Props) {
   const [isOther, setIsOther] = useState(false)

   return (
       <div className="space-y-2 w-3/4 md:!w-1/2">
          <Label>
             أي لهجة عربية تتحدث؟
          </Label>
          <CustomDropdown
              options={OPTIONS}
              value={formData.arabicDialect}
              onChange={(value) => {
                 setIsOther(value === `other`)
                 setFormData((prev) => ({
                    ...prev,
                    arabicDialect: value === `other` ? `` : value,
                 }));
              }
              }
              placeholder={`يرجى اختيار إجابة`}
              error={!isOther ? errors.arabicDialect : undefined}
          />
          {(formData.arabicDialect?.toLowerCase().includes(`other`) || isOther) && (
              <div className="space-y-2 !mt-4">
                 <Label>
                    يرجى تحديد اللهجة:
                 </Label>
                 <Input
                     value={formData.arabicDialect}
                     onChange={(e) =>
                         setFormData({
                            ...formData,
                            arabicDialect: e.target.value,
                         })
                     }
                     placeholder="على سبيل المثال إنجليزي"
                 />
              </div>
          )}
          {(errors.arabicDialect && isOther) && (
              <p className="text-red-500 text-sm">
                 الرجاء تحديد اللهجة.
              </p>
          )}
       </div>
   );
}

export default ArabicDialect;
