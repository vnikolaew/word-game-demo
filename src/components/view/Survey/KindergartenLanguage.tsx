import React, { Dispatch, Fragment, SetStateAction } from "react";
import {
   CustomDropdown,
   DROPDOWN_PLACEHOLDER,
   FormErrors,
} from "../SurveyView";
import { SurveyData } from "@/types";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function KindergartenLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label>في مرحلة الروضة، ماذا كانت لغة التدريس؟</Label>
         <CustomDropdown
            options={[
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
            value={formData.kindergartenLanguage ?? ``}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  kindergartenLanguage: value,
               }))
            }
            placeholder={DROPDOWN_PLACEHOLDER}
            error={errors.kindergartenLanguage}
         />
         {(formData.kindergartenLanguage === `other` ||
            formData.kindergartenLanguage === `two_languages`) && (
            <div className="!mt-4">
               <Label>يرجى تحديد اللغة:</Label>
               <Input
                  value={formData.otherKindergartenLanguage}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherKindergartenLanguage: e.target.value,
                     })
                  }
                  placeholder=""
               />
            </div>
         )}
      </div>
   );
}

export default KindergartenLanguage;
