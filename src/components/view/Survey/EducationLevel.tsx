import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { SurveyData } from "@/types";
import { CustomDropdown, FormErrors } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function EducationLevel({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label htmlFor="highestEducation">
            يرجى اختيار أعلى مستوى تعليمي أكملته:
         </Label>
         <CustomDropdown
            value={formData.highestEducation}
            options={[
               {
                  value: "less_than_high_school",
                  label: "أقل من المدرسة الثانوية",
               },
               { value: "high_school", label: "المدرسة الثانوية" },
               { value: "vocational", label: "تدريب مهني" },
               { value: "some_college", label: "بعض التعليم الجامعي" },
               { value: "college_degree", label: "درجة جامعية" },
               { value: "some_postgraduate", label: "بعض التعليم العالي" },
               { value: "master_degree", label: "درجة الماجستير" },
               {
                  value: "phd",
                  label: "دكتوراه (في الفلسفة أو الطب أو القانون، إلخ.)",
               },
            ]}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  highestEducation: value,
               }))
            }
            placeholder="يرجى اختيار إجابة"
            error={errors.highestEducation}
         />
      </div>
   );
}

export default EducationLevel;
