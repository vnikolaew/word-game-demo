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
         description={`إذا كنت ترى بوضوح بدون مساعدة أو إذا كنت ترى بوضوح باستخدام نظارات/عدسات، اختر "نعم". إذا كنت لا ترى بوضوح وأنت أيضًا لا تستخدم نظارات/عدسات، اختر "لا".`}
         errors={errors}
         formData={formData}
         setFormData={setFormData}
         question={`هل رؤيتك طبيعية أو مُصححة (باستخدام النظارات أو العدسات اللاصقة)؟`}
      />
   );
}

export default Vision;
