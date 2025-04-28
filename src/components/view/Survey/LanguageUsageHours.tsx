import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { CustomDropdown, FormErrors } from "../SurveyView";
import { SurveyData } from "@/types";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

const OPTIONS = [
   { value: "0", label: `0` },
   { value: "1", label: `ساعة واحدة` },
   { value: "2", label: `ساعتان` },
   { value: "3", label: `3 ساعات` },
   { value: "4", label: `4 ساعات` },
   { value: "5", label: `5 ساعات` },
   { value: "6", label: `6 ساعات أو أكثر` },
] as const;

function LanguageUsageHours({ errors, formData, setFormData }: Props) {
   return (
      <div className="w-3/4 md:!w-1/2 space-y-8">
         <div className="space-y-2">
            <Label>كم ساعة تقضي يومياً في قراءة اللغة العربية الفصحى؟</Label>
            <CustomDropdown
               options={OPTIONS}
               value={formData.readingHours}
               onChange={(value) =>
                  setFormData((prev) => ({
                     ...prev,
                     readingHours: value,
                  }))
               }
               placeholder="يرجى اختيار عدد الساعات"
               error={errors.readingHours}
            />
         </div>

         <div className="space-y-2">
            <Label>
               كم ساعة تقضي يومياً في الاستماع إلى اللغة العربية الفصحى؟
            </Label>
            <CustomDropdown
               options={OPTIONS}
               value={formData.listeningHours}
               onChange={(value) =>
                  setFormData((prev) => ({
                     ...prev,
                     listeningHours: value,
                  }))
               }
               placeholder="يرجى اختيار عدد الساعات"
               error={errors.listeningHours}
            />
         </div>

         <div className="space-y-2">
            <Label>كم ساعة تقضي يومياً في الكتابة باللغة العربية الفصحى؟</Label>
            <CustomDropdown
               options={OPTIONS}
               value={formData.writingHours}
               onChange={(value) =>
                  setFormData((prev) => ({
                     ...prev,
                     writingHours: value,
                  }))
               }
               placeholder="يرجى اختيار عدد الساعات"
               error={errors.writingHours}
            />
         </div>

         <div className="space-y-2">
            <Label>كم ساعة تقضي يومياً في التحدث باللغة العربية الفصحى؟</Label>
            <CustomDropdown
               options={OPTIONS}
               value={formData.speakingHours}
               onChange={(value) =>
                  setFormData((prev) => ({
                     ...prev,
                     speakingHours: value,
                  }))
               }
               placeholder="يرجى اختيار عدد الساعات"
               error={errors.speakingHours}
            />
         </div>
      </div>
   );
}

export default LanguageUsageHours;
