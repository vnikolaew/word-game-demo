import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { CustomDropdown, FormErrors } from "../SurveyView";
import { SurveyData } from "@/types";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function LanguageAcquisiton({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2">
         <Label>كيف اكتسبت اللغة العربية؟</Label>
         <CustomDropdown
            options={[
               { value: "native", label: "لغة أم" },
               { value: "school", label: "في المدرسة" },
               { value: "self_taught", label: "تعلم ذاتي" },
               { value: "other", label: "طريقة أخرى" },
            ]}
            value={formData.languageAcquisition}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  languageAcquisition: value,
               }))
            }
            placeholder="يرجى اختيار إجابة"
            error={errors.languageAcquisition}
         />
      </div>
   );
}

export default LanguageAcquisiton;
