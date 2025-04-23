import { SurveyData } from "@/types";
import React, { Dispatch, SetStateAction } from "react";
import { FormErrors } from "../SurveyView";
import YesNoQuestion from "./YesNoQuestion";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function AttentionDisorder({ errors, formData, setFormData }: Props) {
   return (
      <YesNoQuestion
         prop="attentionDisorder"
         category="اضطراب الانتباه"
         description="
         اضطراب الانتباه هو حالة تجعل الشخص يواجه صعوبة في التركيز والبقاء
            منظماً وإكمال المهام.
         "
         errors={errors}
         formData={formData}
         setFormData={setFormData}
         question="هل تم تشخيصك باضطراب الانتباه وفرط الحركة أو اضطراب مشابه؟"
      />
   );
}

export default AttentionDisorder;
