import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SurveyData } from "@/types";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { FormErrors, CustomDropdown } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function HighSchoolLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2">
         <Label>في مرحلة الثانوية، ماذا كانت لغة التدريس؟</Label>
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
            value={formData.highSchoolLanguage ?? ``}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  highSchoolLanguage: value,
               }))
            }
            placeholder="---"
            error={errors.highSchoolLanguage}
         />
         {(formData.highSchoolLanguage === `other` ||
            formData.highSchoolLanguage?.includes(`two_languages`)) && (
            <Fragment>
               <Label>يرجى تحديد اللغة:</Label>
               <Input
                  value={formData.otherHighSchoolLanguage}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherHighSchoolLanguage: e.target.value,
                     })
                  }
                  placeholder=""
               />
            </Fragment>
         )}
      </div>
   );
}

export default HighSchoolLanguage;
