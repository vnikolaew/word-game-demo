import React, { Dispatch, SetStateAction } from "react";
import YesNoQuestion from "./YesNoQuestion";
import { SurveyData } from "@/types";
import { FormErrors } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function ReadingDisorder({ errors, formData, setFormData }: Props) {
   return (
      <YesNoQuestion
         prop="readingDisorder"
         category="اضطراب القراءة"
         description="اضطراب القراءة هو صعوبة في التعرف على الكلمات وفهمها رغم القدرات الذهنية الطبيعية."
         errors={errors}
         formData={formData}
         setFormData={setFormData}
         question="هل تم تشخيصك باضطراب القراءة (الديسلكسيا) أو صعوبات مماثلة في القراءة؟"
      />
   );
}

export default ReadingDisorder;
