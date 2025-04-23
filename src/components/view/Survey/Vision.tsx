import React, { Dispatch, SetStateAction } from "react";
import YesNoQuestion from "./YesNoQuestion";
import { SurveyData } from "@/types";
import { FormErrors } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function Vision({ errors, formData, setFormData }: Props) {
   return (
      <YesNoQuestion
         prop="vision"
         category="الرؤية الطبيعية أو المُصححة"
         description="الرؤية الطبيعية أو المُصححة تعني أنك تستطيع رؤية الأشياء بوضوح، إما بعينيك فحسب أو بمساعدة النظارات."
         errors={errors}
         formData={formData}
         setFormData={setFormData}
         question="هل رؤيتك طبيعية أو مُصححة (باستخدام النظارات أو العدسات اللاصقة)؟"
      />
   );
}

export default Vision;
