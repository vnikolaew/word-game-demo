import { Input } from "@/components/ui/input";
import { SurveyData } from "@/types";
import { Label } from "@radix-ui/react-label";
import React, { Dispatch, Fragment, SetStateAction } from "react";
import { CustomDropdown, FormErrors } from "../SurveyView";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

function Residence({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2">
         <Label>في أي دولة تعيش حالياً؟</Label>
         <CustomDropdown
            options={[
               { value: "saudi_arabia", label: "المملكة العربية السعودية" },
               { value: "uae", label: "الإمارات العربية المتحدة" },
               { value: "bahrain", label: "البحرين" },
               { value: "kuwait", label: "الكويت" },
               { value: "yemen", label: "اليمن" },
               { value: "qatar", label: "قطر" },
               { value: "oman", label: "عمان" },
               { value: "jordan", label: "الأردن" },
               { value: "syria", label: "سوريا" },
               { value: "lebanon", label: "لبنان" },
               { value: "palestine", label: "فلسطين" },
               { value: "iraq", label: "العراق" },
               { value: "sudan", label: "السودان" },
               { value: "egypt", label: "مصر" },
               { value: "libya", label: "ليبيا" },
               { value: "tunisia", label: "تونس" },
               { value: "algeria", label: "الجزائر" },
               { value: "morocco", label: "المغرب" },
               { value: "mauritania", label: "موريتانيا" },
               { value: "other", label: "أخرى" },
            ]}
            value={formData.residence}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  residence: value,
               }))
            }
            placeholder="يرجى اختيار إجابة"
            error={errors.residence}
         />
         {formData.residence === `other` && (
            <Fragment>
               <Label>يرجى تحديد الدولة:</Label>
               <Input
                  value={formData.otherResidence}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherResidence: e.target.value,
                     })
                  }
                  placeholder=""
               />
            </Fragment>
         )}
      </div>
   );
}

export default Residence;
