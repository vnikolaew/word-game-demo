import { Input } from "@/components/ui/input";
import React, { Dispatch, SetStateAction } from "react";
import {
   CustomDropdown,
   DROPDOWN_PLACEHOLDER,
   FormErrors,
} from "../SurveyView";
import { Label } from "@/components/ui/label";
import { SurveyData } from "@/types";
import { EDUCATION_LEVEL_OPTIONS } from "./education-level-options";

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
            options={EDUCATION_LEVEL_OPTIONS}
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
         {formData.primaryLanguage === `other` && (
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
