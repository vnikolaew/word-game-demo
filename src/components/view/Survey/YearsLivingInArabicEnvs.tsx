import {Input} from "@/components/ui/input";
import {Label} from "@/components/ui/label";
import {SurveyData} from "@/types";
import React, {Dispatch, SetStateAction} from "react";
import {FormErrors} from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

const PLACEHOLDER = `Enter a number`;

function YearsLivingInArabicEnvs({errors, formData, setFormData}: Props) {
   return (
       <div className="space-y-2 w-1/2">
          <div>
             <Label className={`!text-right !pl-auto items-end justify-end`} dir={`ltr`}
                    htmlFor="years_living_in_arabic_environments_years">
               <span>
               How many years and months have you spent in a school and/or work environment where Arabic is spoken?
               </span>
             </Label>
             <br/>
             <Label htmlFor="years_living_in_arabic_environments_years">
                كم عدد السنوات والشهور التي أمضيتها في مدرسة و/أو بيئة عمل يُتحدث
                فيها اللغة العربية؟
             </Label>
          </div>
          <div className="flex items-center gap-2">
             <Input
                 id="years_living_in_arabic_environments_years"
                 type="number"
                 value={formData.years_living_in_arabic_environments_years}
                 onChange={(e) =>
                     setFormData({
                        ...formData,
                        years_living_in_arabic_environments_years:
                            e.target.value.toString(),
                     })
                 }
                 placeholder={PLACEHOLDER + ` for years`}
             />
             <Input
                 id="years_living_in_arabic_environments_months"
                 type="number"
                 value={formData.years_living_in_arabic_environments_months}
                 onChange={(e) =>
                     setFormData({
                        ...formData,
                        years_living_in_arabic_environments_months:
                            e.target.value.toString(),
                     })
                 }
                 placeholder={PLACEHOLDER + ` for months`}
             />
          </div>
          {errors.years_living_in_arabic_environments_years && (
              <p className="text-red-500 text-sm">يرجى إدخال عمر صحيح</p>
          )}
          {errors.years_living_in_arabic_environments_months && (
              <p className="text-red-500 text-sm">يرجى إدخال عمر صحيح</p>
          )}
       </div>
   );
}

export default YearsLivingInArabicEnvs;
