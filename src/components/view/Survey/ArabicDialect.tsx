import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { CustomDropdown, FormErrors } from "../SurveyView";
import { SurveyData } from "@/types";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function ArabicDialect({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2">
         <Label>أي لهجة عربية تتحدث؟</Label>
         <CustomDropdown
            options={[
               { value: "gulf", label: "خليجية" },
               { value: "egyptian", label: "مصرية" },
               { value: "levantine", label: "شامية" },
               { value: "yemeni", label: "يمنية" },
               { value: "iraqi", label: "عراقية" },
               { value: "maghrebi", label: "مغربية" },
            ]}
            value={formData.arabicDialect}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  arabicDialect: value,
               }))
            }
            placeholder="يرجى اختيار إجابة"
            error={errors.arabicDialect}
         />
      </div>
   );
}

export default ArabicDialect;
