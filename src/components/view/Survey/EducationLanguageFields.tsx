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

function EducationLanguageFields({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-4">
         <div className="space-y-2">
            <Label>لغة التعليم في رياض الأطفال</Label>
            <Input
               value={formData.kindergartenLanguage}
               onChange={(e) =>
                  setFormData({
                     ...formData,
                     kindergartenLanguage: e.target.value,
                  })
               }
               placeholder="يرجى إدخال لغة التعليم"
            />
            {errors.kindergartenLanguage && (
               <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
         </div>

         <div className="space-y-2">
            <Label>لغة التعليم في المرحلة الابتدائية</Label>
            <Input
               value={formData.primaryLanguage}
               onChange={(e) =>
                  setFormData({
                     ...formData,
                     primaryLanguage: e.target.value,
                  })
               }
               placeholder="يرجى إدخال لغة التعليم"
            />
            {errors.primaryLanguage && (
               <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
         </div>

         <div className="space-y-2">
            <Label>لغة التعليم في المرحلة المتوسطة</Label>
            <Input
               value={formData.middleLanguage}
               onChange={(e) =>
                  setFormData({
                     ...formData,
                     middleLanguage: e.target.value,
                  })
               }
               placeholder="يرجى إدخال لغة التعليم"
            />
            {errors.middleLanguage && (
               <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
         </div>

         <div className="space-y-2">
            <Label>لغة التعليم في المرحلة الثانوية</Label>
            <Input
               value={formData.highSchoolLanguage}
               onChange={(e) =>
                  setFormData({
                     ...formData,
                     highSchoolLanguage: e.target.value,
                  })
               }
               placeholder="يرجى إدخال لغة التعليم"
            />
            {errors.highSchoolLanguage && (
               <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
         </div>

         <div className="space-y-2">
            <Label>لغة التعليم في المرحلة الجامعية</Label>
            <Input
               value={formData.universityLanguage}
               onChange={(e) =>
                  setFormData({
                     ...formData,
                     universityLanguage: e.target.value,
                  })
               }
               placeholder="يرجى إدخال لغة التعليم"
            />
            {errors.universityLanguage && (
               <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
         </div>
      </div>
   );
}

export default EducationLanguageFields;
