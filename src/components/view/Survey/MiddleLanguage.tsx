import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import {
   CustomDropdown,
   DROPDOWN_PLACEHOLDER,
   FormErrors,
} from "../SurveyView";
import { SurveyData } from "@/types";
import { EDUCATION_LEVEL_OPTIONS, EDUCATION_LEVEL_OPTIONS_AR } from "./education-level-options";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function MiddleLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <div>
            <Label className={`!text-right !pl-auto items-end justify-end`} dir={`ltr`}
                   htmlFor="middleLanguage"
            >
               When you were in middle school, what was the language of instruction?
            </Label>
            <br/>
            <Label>عندما كنت في مرحلة المتوسطة، ماذا كانت لغة التدريس؟</Label>
         </div>
         <CustomDropdown
             options={EDUCATION_LEVEL_OPTIONS.map((o, i) => ({...o, labelAr: EDUCATION_LEVEL_OPTIONS_AR[i]}))}
            value={formData.middleLanguage ?? ``}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  middleLanguage: value,
               }))
            }
            placeholder={DROPDOWN_PLACEHOLDER}
            error={errors.middleLanguage}
         />
         {formData.middleLanguage === `other` && (
            <div className="!mt-4">
               <Label>Please specify the language:</Label>
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
            </div>
         )}
      </div>
   );
}

export default MiddleLanguage;
