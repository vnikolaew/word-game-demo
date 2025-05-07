import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SurveyData } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import {
   FormErrors,
   CustomDropdown,
   DROPDOWN_PLACEHOLDER,
} from "../SurveyView";
import { EDUCATION_LEVEL_OPTIONS } from "./education-level-options";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function HighSchoolLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label>عندما كنت في مرحلة الثانوية، ماذا كانت لغة التدريس؟</Label>
         <CustomDropdown
            options={EDUCATION_LEVEL_OPTIONS}
            value={formData.highSchoolLanguage ?? ``}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  highSchoolLanguage: value,
               }))
            }
            placeholder={DROPDOWN_PLACEHOLDER}
            error={errors.highSchoolLanguage}
         />
         {formData.highSchoolLanguage === `other` && (
            <div className="!mt-4">
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
            </div>
         )}
      </div>
   );
}

export default HighSchoolLanguage;
