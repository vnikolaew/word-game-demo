import { Input } from "@/components/ui/input";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import {
   CustomDropdown,
   DROPDOWN_PLACEHOLDER,
   FormErrors,
} from "../SurveyView";
import { Label } from "@/components/ui/label";
import { SurveyData } from "@/types";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function PrimaryLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label>عندما كنت في مرحلة الابتدائية، ماذا كانت لغة التدريس؟</Label>
         <CustomDropdown
            options={[
               { value: "", label: `يرجى اختيار إجابة` },
               { value: "arabic", label: `العربية` },
               { value: "english", label: `الإنجليزية` },
               { value: "french", label: `الفرنسية` },
               {
                  value: "two_languages",
                  label: `العربية ولغة أخرى (الرجاء التحديد)`,
               },
               { value: "other", label: `أخرى، يرجى التحديد` },
            ]}
            value={formData.primaryLanguage ?? ``}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  primaryLanguage: value,
               }))
            }
            placeholder={DROPDOWN_PLACEHOLDER}
            error={errors.primaryLanguage}
         />
         {(formData.primaryLanguage === `other` ||
            formData.primaryLanguage?.includes(`two_languages`)) && (
            <div className="!mt-4">
               <Label>يرجى تحديد اللغة:</Label>
               <Input
                  value={formData.otherPrimaryLanguage}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherPrimaryLanguage: e.target.value,
                     })
                  }
                  placeholder=""
               />
            </div>
         )}
      </div>
   );
}

export default PrimaryLanguage;
