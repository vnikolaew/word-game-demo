import {Label} from "@radix-ui/react-label";
import React, {Dispatch, SetStateAction} from "react";
import {SurveyData} from "@/types";
import {CustomDropdown, FormErrors} from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

const OPTIONS_AR = `أقل من المدرسة الثانوية,المدرسة الثانوية,تدريب مهني,بعض التعليم الجامعي,درجة جامعية,بعض التعليم العالي,درجة الماجستير,دكتوراه (في الفلسفة أو الطب أو القانون، إلخ.)`.split(`,`).map(o => o.trim())

function EducationLevel({errors, formData, setFormData}: Props) {
   return (
       <div className="space-y-2 w-3/4 md:!w-1/2">
          <div>
             <Label dir={`ltr`} htmlFor="highestEducation">
                Please choose the highest educational level you have completed:
             </Label>
             <br/>
             <Label htmlFor="highestEducation">
                يرجى اختيار أعلى مستوى تعليمي أكملته:
             </Label>
          </div>
          <CustomDropdown
              value={formData.highestEducation}
              options={[
                 {
                    value: "less_than_high_school",
                    label: `Less than high school`,
                 },
                 {value: "high_school", label: "High school"},
                 {value: "vocational", label: "Vocational training"},
                 {value: "some_college", label: "Some college education"},
                 {value: "college_degree", label: "College degree"},
                 {value: "some_postgraduate", label: "Some graduate education"},
                 {value: "master_degree", label: "Master's degree"},
                 {
                    value: "phd",
                    label: "Doctorate (Philosophy or Medicine or Law, etc.)",
                 },
              ].map((o, i) => ({...o, labelAr: OPTIONS_AR[i]}))}
              onChange={(value) =>
                  setFormData((prev) => ({
                     ...prev,
                     highestEducation: value,
                  }))
              }
              placeholder=""
              error={errors.highestEducation}
          />
       </div>
   );
}

export default EducationLevel;
