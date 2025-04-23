import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { CustomDropdown, FormErrors } from "../SurveyView";
import { SurveyData } from "@/types";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function MiddleLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2">
         <Label>في مرحلة الابتدائية، ماذا كانت لغة التدريس؟</Label>
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
            value={formData.middleLanguage ?? ``}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  middleLanguage: value,
               }))
            }
            placeholder="---"
            error={errors.middleLanguage}
         />
         {(formData.middleLanguage === `other` ||
            formData.middleLanguage?.includes(`two_languages`)) && (
            <Fragment>
               <Label>يرجى تحديد اللغة:</Label>
               <Input
                  value={formData.otherMiddleLanguage}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherMiddleLanguage: e.target.value,
                     })
                  }
                  placeholder=""
               />
            </Fragment>
         )}
      </div>
   );
}

export default MiddleLanguage;
