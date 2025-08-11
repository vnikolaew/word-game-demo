import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SurveyData } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import {
   CustomDropdown,
   DROPDOWN_PLACEHOLDER,
   FormErrors,
} from "../SurveyView";
import { EDUCATION_LEVEL_OPTIONS } from "./education-level-options";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function UniversityLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <div>
            <Label className={`!text-right !pl-auto items-end justify-end`} dir={`ltr`}
                   htmlFor="universityLanguage"
            >
               When you were in university, what was the language of instruction?
            </Label>
            <br/>
            <Label>عندما كنت في مرحلة الجامعة، ماذا كانت لغة التدريس؟</Label>
         </div>
         <CustomDropdown
            options={EDUCATION_LEVEL_OPTIONS}
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
         {formData.universityLanguage === `other` && (
            <div className="!mt-4">
               <Label>Please specify the language:</Label>
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
