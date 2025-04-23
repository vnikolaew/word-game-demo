import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { CustomDropdown, FormErrors } from "../SurveyView";
import { SurveyData } from "@/types";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function LanguageUsageHours({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-4">
         <div className="space-y-2">
            <Label>كم ساعة تقضي في القراءة باللغة العربية يومياً؟</Label>
            <CustomDropdown
               options={[
                  { value: "0", label: "لا أقرأ بالعربية" },
                  { value: "1", label: "ساعة واحدة" },
                  { value: "2", label: "ساعتان" },
                  { value: "3", label: "3 ساعات" },
                  { value: "4", label: "4 ساعات" },
                  { value: "5", label: "5 ساعات أو أكثر" },
               ]}
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
            <Label>كم ساعة تقضي في الاستماع باللغة العربية يومياً؟</Label>
            <CustomDropdown
               options={[
                  { value: "0", label: "لا أستمع للعربية" },
                  { value: "1", label: "ساعة واحدة" },
                  { value: "2", label: "ساعتان" },
                  { value: "3", label: "3 ساعات" },
                  { value: "4", label: "4 ساعات" },
                  { value: "5", label: "5 ساعات أو أكثر" },
               ]}
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
            <Label>كم ساعة تقضي في الكتابة باللغة العربية يومياً؟</Label>
            <CustomDropdown
               options={[
                  { value: "0", label: "لا أكتب بالعربية" },
                  { value: "1", label: "ساعة واحدة" },
                  { value: "2", label: "ساعتان" },
                  { value: "3", label: "3 ساعات" },
                  { value: "4", label: "4 ساعات" },
                  { value: "5", label: "5 ساعات أو أكثر" },
               ]}
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
            <Label>كم ساعة تقضي في التحدث باللغة العربية يومياً؟</Label>
            <CustomDropdown
               options={[
                  { value: "0", label: "لا أتحدث العربية" },
                  { value: "1", label: "ساعة واحدة" },
                  { value: "2", label: "ساعتان" },
                  { value: "3", label: "3 ساعات" },
                  { value: "4", label: "4 ساعات" },
                  { value: "5", label: "5 ساعات أو أكثر" },
               ]}
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
