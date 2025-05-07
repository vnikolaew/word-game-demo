import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { CustomDropdown, FormErrors } from "../SurveyView";
import { SurveyData } from "@/types";

interface NativeLanguageProps {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function NativeLanguage({
   formData,
   errors,
   setFormData,
}: NativeLanguageProps) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label htmlFor="nativeLanguage">أي لغة تعتبرها لغتك الأم؟</Label>
         <CustomDropdown
            options={[
               { value: "english", label: "الإنجليزية" },
               { value: "urdu", label: "الأردية" },
               { value: "bengali", label: "البنغالية" },
               { value: "french", label: "الفرنسية" },
               { value: "swahili", label: "السواحيلية" },
               { value: "tagalog", label: "التاغالوغية" },
               { value: "other", label: "أخرى، الرجاء التحديد" },
            ]}
            value={formData.nativeLanguage}
            onChange={(value) => {
               setFormData((prev) => ({
                  ...prev,
                  nativeLanguage: value,
                  otherNativeLanguage:
                     value === "arabic" ? "" : prev.otherNativeLanguage,
               }));
            }}
            placeholder="يرجى اختيار إجابة"
            error={errors.nativeLanguage}
         />
         {formData.nativeLanguage === "other" && (
            <div className="mt-2" key={formData.nativeLanguage}>
               <Input
                  placeholder="يرجى ذكر اللغة الأخرى"
                  value={formData.otherNativeLanguage}
                  onChange={(e) =>
                     setFormData((prev) => ({
                        ...prev,
                        otherNativeLanguage: e.target.value,
                     }))
                  }
               />
               {errors.otherNativeLanguage && (
                  <p className="text-red-500 text-sm">يرجى تحديد اللغة</p>
               )}
            </div>
         )}
      </div>
   );
}

export default NativeLanguage;
