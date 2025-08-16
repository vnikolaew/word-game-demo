import {Input} from "@/components/ui/input";
import {Label} from "@radix-ui/react-label";
import React, {Dispatch, SetStateAction} from "react";
import {CustomDropdown, FormErrors} from "../SurveyView";
import {SurveyData} from "@/types";

interface NativeLanguageProps {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

const OPTIONS_AR = `الإنجليزية,الأردية,البنغالية,الفرنسية,السواحيلية,التاغالوغية,أخرى، الرجاء التحديد`.split(`,`).map((o) => o.trim());

function NativeLanguage({
                           formData,
                           errors,
                           setFormData,
                        }: NativeLanguageProps) {
   return (
       <div className="space-y-2 w-3/4 md:!w-1/2">
          <div>
             <Label dir={`ltr`} htmlFor="nativeLanguage">
                Which language do you consider your native language?
             </Label>
             <br/>
             <Label htmlFor="nativeLanguage">أي لغة تعتبرها لغتك الأم؟</Label>
          </div>
          <CustomDropdown
              options={[
                 {value: "english", label: "English"},
                 {value: "urdu", label: "Urdu"},
                 {value: "bengali", label: "Bengali"},
                 {value: "french", label: "French"},
                 {value: "swahili", label: "Swahili"},
                 {value: "tagalog", label: "Tagalog"},
                 {value: "other", label: "Other, please specify"},
              ].map((o, i) => ({...o, labelAr: OPTIONS_AR[i]}))}
              value={formData.nativeLanguage}
              onChange={(value) => {
                 setFormData((prev) => ({
                    ...prev,
                    nativeLanguage: value,
                    otherNativeLanguage:
                        value === "arabic" ? "" : prev.otherNativeLanguage,
                 }));
              }}
              placeholder="Please choose an answer"
              error={errors.nativeLanguage}
          />
          {formData.nativeLanguage === "other" && (
              <div className="mt-2" key={formData.nativeLanguage}>
                 <Input
                     placeholder={`Please specify your native language / يرجى اختيار إجابة`}
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
