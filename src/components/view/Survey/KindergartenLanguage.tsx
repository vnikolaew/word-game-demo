import React, {Dispatch, Fragment, SetStateAction} from "react";
import {
   CustomDropdown,
   DROPDOWN_PLACEHOLDER,
   FormErrors,
} from "../SurveyView";
import {SurveyData} from "@/types";
import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {EDUCATION_LEVEL_OPTIONS, EDUCATION_LEVEL_OPTIONS_AR} from "./education-level-options";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function KindergartenLanguage({errors, formData, setFormData}: Props) {
   return (
       <div className="space-y-2 w-3/4 md:!w-1/2">
          <div>
             <Label className={`!text-right !pl-auto items-end justify-end`} dir={`ltr`}
                    htmlFor="kindergartenLanguage"
             >
                When you were in kindergarten, what was the language of instruction?
             </Label>
             <br/>
             <Label>عندما كنت في مرحلة الروضة، ماذا كانت لغة التدريس؟</Label>
          </div>
          <CustomDropdown
              options={EDUCATION_LEVEL_OPTIONS.map((o, i) => ({...o, labelAr: EDUCATION_LEVEL_OPTIONS_AR[i]}))}
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
          {formData.kindergartenLanguage === `other` && (
              <div className="!mt-4">
                 <Label>Please specify the language:</Label>
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
