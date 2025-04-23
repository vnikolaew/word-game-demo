import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { CustomDropdown, FormErrors } from "../SurveyView";
import { SurveyData } from "@/types";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function FamilyLanguage({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2">
         <Label>
            ما هي اللغة/اللغات التي استخدمها والداك/مقدمو الرعاية في المنزل
            عندما كنت طفلاً؟
         </Label>
         <CustomDropdown
            options={[
               { value: "arabic_only", label: "العربية فقط من كلا الوالدين" },
               { value: "other_only", label: "لغة أخرى فقط من كلا الوالدين" },
               {
                  value: "arabic_and_other",
                  label: "العربية من أحد الوالدين ولغة أخرى من الوالد الآخر",
               },
               {
                  value: "mix",
                  label: "مزيج من العربية ولغة أخرى من كلا الوالدين",
               },
            ]}
            value={formData.familyLanguage}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  familyLanguage: value,
               }))
            }
            placeholder="يرجى اختيار إجابة"
            error={errors.familyLanguage}
         />
      </div>
   );
}

export default FamilyLanguage;
