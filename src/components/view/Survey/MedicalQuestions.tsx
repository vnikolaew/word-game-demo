import { SurveyData } from "@/types";
import { Label } from "@radix-ui/react-label";
import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
import React, { Dispatch, SetStateAction } from "react";
import { FormErrors } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function MedicalQuestions({ errors, formData, setFormData }: Props) {
   return (
      <>
         <div className="space-y-2">
            <Label>هل تم تشخيصك باضطراب الانتباه وفرط الحركة؟</Label>
            <RadioGroup
               value={formData.attentionDisorder}
               onValueChange={(value: string) =>
                  setFormData({ ...formData, attentionDisorder: value })
               }
            >
               <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="attention_yes" />
                  <Label htmlFor="attention_yes">نعم</Label>
               </div>
               <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="attention_no" />
                  <Label htmlFor="attention_no">لا</Label>
               </div>
            </RadioGroup>
            {errors.attentionDisorder && (
               <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
         </div>
         <div className="space-y-2">
            <Label>هل تم تشخيصك باضطراب القراءة (الديسلكسيا)؟</Label>
            <RadioGroup
               value={formData.readingDisorder}
               onValueChange={(value: string) =>
                  setFormData({ ...formData, readingDisorder: value })
               }
            >
               <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="reading_yes" />
                  <Label htmlFor="reading_yes">نعم</Label>
               </div>
               <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="reading_no" />
                  <Label htmlFor="reading_no">لا</Label>
               </div>
            </RadioGroup>
            {errors.readingDisorder && (
               <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
         </div>
         <div className="space-y-2">
            <Label>هل رؤيتك طبيعية أو مُصححة؟</Label>
            <RadioGroup
               value={formData.vision}
               onValueChange={(value: string) =>
                  setFormData({ ...formData, vision: value })
               }
            >
               <div className="flex items-center space-x-2">
                  <RadioGroupItem value="yes" id="vision_yes" />
                  <Label htmlFor="vision_yes">نعم</Label>
               </div>
               <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no" id="vision_no" />
                  <Label htmlFor="vision_no">لا</Label>
               </div>
            </RadioGroup>
            {errors.vision && (
               <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
         </div>
         <div className="space-y-2">
            <Label>هل أنت أيمن أم أيسر؟</Label>
            <RadioGroup
               value={formData.handedness}
               onValueChange={(value: string) =>
                  setFormData({ ...formData, handedness: value })
               }
            >
               <div className="flex items-center space-x-2">
                  <RadioGroupItem value="right" id="right_handed" />
                  <Label htmlFor="right_handed">أيمن</Label>
               </div>
               <div className="flex items-center space-x-2">
                  <RadioGroupItem value="left" id="left_handed" />
                  <Label htmlFor="left_handed">أيسر</Label>
               </div>
            </RadioGroup>
            {errors.handedness && (
               <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
         </div>
      </>
   );
}

export default MedicalQuestions;
