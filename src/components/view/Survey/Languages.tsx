import { Input } from "@/components/ui/input";
import { SurveyData } from "@/types";
import { Label } from "@radix-ui/react-label";
import React, {Dispatch, SetStateAction, useState} from "react";
import {CustomDropdown, FormErrors} from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function Languages({ errors, formData, setFormData }: Props) {
   const [isOther, setIsOther] = useState(false)

   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label>
            ما اللغات التي تعرفها مرتبة حسب تعلمك لها (اللغة الأم أولاً)؟
         </Label>
         <CustomDropdown
             options={[
                { value: "ar_en", label: "العربية، الإنجليزية" },
                { value: "en_ar", label: "الإنجليزية، العربية" },
                { value: "other", label: "أخرى (يرجى التحديد)" }
             ]}
             value={formData.languages}
             onChange={(value) => {
                setIsOther(value === `other`)
                setFormData((prev) => ({
                   ...prev,
                   languages: value === `other` ? `` : value,
                }));
             }
             }
             placeholder="اذكر جميع اللغات التي تعرفها مرتبة حسب تعلمك لها (اللغة الأم أولاً)"
             error={!isOther ? errors.languages : undefined}
         />
         {(formData.languages?.toLowerCase().includes(`other`) || isOther) && (
             <div className="space-y-2 !mt-4">
                <Label>
                   يرجى تحديد اللغات:
                </Label>
                <Input
                    value={formData.languages}
                    onChange={(e) =>
                        setFormData({
                           ...formData,
                           languages: e.target.value,
                        })
                    }
                    placeholder={``}
                />
             </div>
         )}
         {(errors.languages && isOther) && (
            <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
         )}
      </div>
   );
}

export default Languages;
