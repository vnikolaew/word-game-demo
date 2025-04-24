import { Input } from "@/components/ui/input";
import { SurveyData } from "@/types";
import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { FormErrors } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function Languages({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label>
            اذكر جميع اللغات التي تعرفها مرتبة حسب تعلمك لها (اللغة الأم أولاً)
         </Label>
         <Input
            value={formData.languages}
            onChange={(e) =>
               setFormData({ ...formData, languages: e.target.value })
            }
            placeholder="اذكر جميع اللغات التي تعرفها مرتبة حسب تعلمك لها (اللغة الأم أولاً)"
         />
         {errors.languages && (
            <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
         )}
      </div>
   );
}

export default Languages;
