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

function AgeOfAcquiringArabic({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-1/2">
         <Label htmlFor="age_of_acquiring_arabic">
            اكتب السن الذي بدأت فيه اكتساب اللغة العربية
         </Label>
         <Input
            id="age_of_acquiring_arabic"
            type="number"
            value={formData.age_of_acquiring_arabic}
            onChange={(e) =>
               setFormData({
                  ...formData,
                  age_of_acquiring_arabic: e.target.value.toString(),
               })
            }
            placeholder={`الرجاء أدخل رقماً`}
         />
         {errors.age_of_acquiring_arabic && (
            <p className="text-red-500 text-sm">يرجى إدخال عمر صحيح</p>
         )}
      </div>
   );
}

export default AgeOfAcquiringArabic;
