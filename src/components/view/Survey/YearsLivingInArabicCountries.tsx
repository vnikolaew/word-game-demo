import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SurveyData } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import { FormErrors } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function YearsLivingInArabicCountries({
   errors,
   formData,
   setFormData,
}: Props) {
   return (
      <div className="space-y-2 w-1/2">
         <Label htmlFor="years_living_in_arabic_countries_years">
            كم عدد السنوات والشهور التي أمضيتها في بلد يُتحدث فيها اللغة
            العربية؟
         </Label>
         <div className="flex items-center gap-2">
            <Input
               id="years_living_in_arabic_countries_years"
               type="number"
               value={formData.years_living_in_arabic_countries_years}
               onChange={(e) =>
                  setFormData({
                     ...formData,
                     years_living_in_arabic_countries_years:
                        e.target.value.toString(),
                  })
               }
               placeholder="يرجى إدخال عمرك"
            />
            <Input
               id="years_living_in_arabic_countries_months"
               type="number"
               value={formData.years_living_in_arabic_countries_months}
               onChange={(e) =>
                  setFormData({
                     ...formData,
                     years_living_in_arabic_countries_months:
                        e.target.value.toString(),
                  })
               }
               placeholder="يرجى إدخال عمرك"
            />
         </div>
         {errors.years_living_in_arabic_countries_years && (
            <p className="text-red-500 text-sm">يرجى إدخال عمر صحيح</p>
         )}
         {errors.years_living_in_arabic_countries_months && (
            <p className="text-red-500 text-sm">يرجى إدخال عمر صحيح</p>
         )}
      </div>
   );
}

export default YearsLivingInArabicCountries;
