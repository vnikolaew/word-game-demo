import {Input} from "@/components/ui/input";
import {SurveyData} from "@/types";
import {Label} from "@radix-ui/react-label";
import React, {Dispatch, SetStateAction} from "react";
import {FormErrors} from "../SurveyView";
import {RadioGroup, RadioGroupItem} from "@/components/ui/radio-group";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function ChildLanguages({errors, formData, setFormData}: Props) {
   return (
       <div className="space-y-2 w-3/4 md:!w-1/2">
          <div>
             <Label dir={`ltr`} htmlFor="nativeLanguage">
                What languages did you learn at home as a child before age six?
             </Label>
             <br/>
             <Label htmlFor="childLanguages">
                ما هي اللغات التي تعلمتها في المنزل وأنت طفل قبل سن السادسة؟
             </Label>
          </div>
          <RadioGroup
              value={formData.languageAcquisition}
              dir="rtl"
              className="!my-4"
              onValueChange={(value: string) =>
                  setFormData({...formData, languageAcquisition: value})
              }
          >
             <div className="flex items-center space-x-2">
                <RadioGroupItem value="native_only" id="native_only"/>
                <Label htmlFor="native_only">
                   Your native language only
                </Label>
             </div>

             <div className="flex items-center space-x-2">
                <RadioGroupItem
                    value="native_then_other"
                    id="native_then_other"
                />
                <Label htmlFor="native_then_other">
                   Your native language first then another language
                </Label>
             </div>

             <div className="flex items-center space-x-2">
                <RadioGroupItem value="native_and_other" id="native_and_other"/>
                <Label htmlFor="native_and_other">
                   Your native language and another language at the same time
                </Label>
             </div>
          </RadioGroup>
          {formData.languageAcquisition?.toLowerCase().includes(`other`) && (
              <div className="space-y-2 !mt-4">
                 <Label dir={`ltr`}>
                    If you learned a language other than your native language before the age of 6, please specify it:
                 </Label>
                 <Input
                     value={formData.otherAcquisitionLanguage}
                     onChange={(e) =>
                         setFormData({
                            ...formData,
                            otherAcquisitionLanguage: e.target.value,
                         })
                     }
                     placeholder="Specify the language here"
                 />
              </div>
          )}
          {errors.languageAcquisition && (
              <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
          )}
       </div>
   );
}

export default ChildLanguages;
