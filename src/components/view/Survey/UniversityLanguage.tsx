import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SurveyData } from "@/types";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import {
   CustomDropdown,
   DROPDOWN_PLACEHOLDER,
   FormErrors,
} from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function UniversityLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label>في مرحلة الجامعة، ماذا كانت لغة التدريس؟</Label>
         <CustomDropdown
            options={[
               { value: "", label: "يرجى اختيار إجابة" },
               { value: "arabic", label: "العربية" },
               { value: "english", label: "الإنجليزية" },
               { value: "french", label: "الفرنسية" },
               {
                  value: "two_languages",
                  label: "العربية ولغة أخرى (الرجاء التحديد)",
               },
               { value: "other", label: "أخرى، يرجى التحديد" },
               { value: "not_applicable", label: "لاينطبق" },
            ]}
            value={formData.universityLanguage ?? ``}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  universityLanguage: value,
               }))
            }
            placeholder={DROPDOWN_PLACEHOLDER}
            error={errors.universityLanguage}
         />
         {(formData.universityLanguage === `other` ||
            formData.universityLanguage?.includes(`two_languages`)) && (
            <div className="!mt-4">
               <Label>يرجى تحديد اللغة:</Label>
               <Input
                  value={formData.otherUniversityLanguage}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherUniversityLanguage: e.target.value,
                     })
                  }
                  placeholder=""
               />
            </div>
         )}
      </div>
   );
}

export default UniversityLanguage;
