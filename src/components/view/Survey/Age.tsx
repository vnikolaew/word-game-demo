import { Input } from "@/components/ui/input";
import { SurveyData } from "@/types";
import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { FormErrors } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}
function Age({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2 w-1/2">
         <div>
            <Label htmlFor="age">
               How old are you? Please write your age as a number
            </Label>
            <br/>
            <Label htmlFor="age">كم عمرك؟ يرجى كتابة عمرك كرقم:</Label>
         </div>
         <Input
            id="age"
            type="number"
            value={formData.age}
            onChange={(e) => setFormData({ ...formData, age: e.target.value })}
            placeholder={`Please enter your age`}
         />
         {errors.age && (
            <p className="text-red-500 text-sm">يرجى إدخال عمر صحيح</p>
         )}
      </div>
   );
}

export default Age;
