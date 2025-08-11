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
   { value: "1", label: `1 hour` },
   { value: "2", label: `2 hours` },
   { value: "3", label: `3 hours` },
   { value: "4", label: `4 hours` },
   { value: "5", label: `5 hours` },
   { value: "6", label: `6 hours or more` },
] as const;

function LanguageUsageHours({ errors, formData, setFormData }: Props) {
   return (
      <div className="w-3/4 md:!w-1/2 space-y-8">
         <div className="space-y-2">
            <div>
               <Label className={`!text-right !pl-auto items-end justify-end`} dir={`ltr`}
                      htmlFor={`readingHours`}
               >
                  How many hours per day do you spend reading in Modern Standard Arabic?
               </Label>
               <br/>
               <Label htmlFor={`readingHours`}>كم ساعة تقضي يومياً في قراءة اللغة العربية الفصحى؟</Label>
            </div>
            <CustomDropdown
                reverse
               options={OPTIONS}
               value={formData.readingHours}
               onChange={(value) =>
                  setFormData((prev) => ({
                     ...prev,
                     readingHours: value,
                  }))
               }
               placeholder=""
               error={errors.readingHours}
            />
         </div>

         <div className="space-y-2">
            <div>
               <Label className={`!text-right !pl-auto items-end justify-end`} dir={`ltr`}
               >
                  How many hours per day do you spend listening to Modern Standard Arabic?
               </Label>
               <br/>
               <Label>
                  كم ساعة تقضي يومياً في الاستماع إلى اللغة العربية الفصحى؟
               </Label>
            </div>
            <CustomDropdown
                reverse
               options={OPTIONS}
               value={formData.listeningHours}
               onChange={(value) =>
                  setFormData((prev) => ({
                     ...prev,
                     listeningHours: value,
                  }))
               }
               placeholder={``}
               error={errors.listeningHours}
            />
         </div>

         <div className="space-y-2">
            <div>
               <Label className={`!text-right !pl-auto items-end justify-end`} dir={`ltr`}
               >
                  How many hours per day do you spend writing in Modern Standard Arabic?
               </Label>
               <br/>
               <Label>كم ساعة تقضي يومياً في الكتابة باللغة العربية الفصحى؟</Label>
            </div>
            <CustomDropdown
                reverse
               options={OPTIONS}
               value={formData.writingHours}
               onChange={(value) =>
                  setFormData((prev) => ({
                     ...prev,
                     writingHours: value,
                  }))
               }
               placeholder={``}
               error={errors.writingHours}
            />
         </div>

         <div className="space-y-2">
            <div>
               <Label className={`!text-right !pl-auto items-end justify-end`} dir={`ltr`}
               >
                  How many hours per day do you spend speaking Modern Standard Arabic?
               </Label>
               <br/>
               <Label>كم ساعة تقضي يومياً في التحدث باللغة العربية الفصحى؟</Label>
            </div>
            <CustomDropdown
                reverse
               options={OPTIONS}
               value={formData.speakingHours}
               onChange={(value) =>
                  setFormData((prev) => ({
                     ...prev,
                     speakingHours: value,
                  }))
               }
               placeholder={``}
               error={errors.speakingHours}
            />
         </div>
      </div>
   );
}

export default LanguageUsageHours;
