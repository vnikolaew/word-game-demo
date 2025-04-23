import React, { Dispatch, Fragment, SetStateAction } from "react";
import { CustomDropdown, FormErrors } from "../SurveyView";
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
      <div className="space-y-2">
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
            placeholder="---"
            error={errors.kindergartenLanguage}
         />
         {formData.kindergartenLanguage === `other` && (
            <Fragment>
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
            </Fragment>
         )}
      </div>
   );
}

export default KindergartenLanguage;
