import React, { Dispatch, SetStateAction } from "react";
import YesNoQuestion from "./YesNoQuestion";
import { SurveyData } from "@/types";
import { FormErrors } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function Hands({ errors, formData, setFormData }: Props) {
   return (
      <YesNoQuestion
         prop="handedness"
         category="اليمنى أو اليسرى"
         description="اليد المفضلة التي تستخدمها للكتابة وأداء المهام اليدوية الدقيقة."
         errors={errors}
         formData={formData}
         setFormData={setFormData}
         question={`هل أنت أيمن (تستخدم يدك اليمنى بشكل أساسي) أم أيسر (تستخدم يدك اليسرى بشكل أساسي)؟`}
         options={[
            {
               label: `أيمن`,
               value: `Right-handed`,
            },
            {
               label: `أيسر`,
               value: `Left-handed`,
            },
         ]}
      />
   );
}

export default Hands;
