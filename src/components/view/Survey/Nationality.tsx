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

function Nationality({ errors, formData, setFormData }: Props) {
   return (
      <div className="space-y-2">
         <Label>ما هي جنسيتك؟</Label>
         <CustomDropdown
            options={[
               { value: "saudi", label: "سعودي" },
               { value: "emirati", label: "إماراتي" },
               { value: "bahraini", label: "بحريني" },
               { value: "kuwaiti", label: "كويتي" },
               { value: "yemeni", label: "يمني" },
               { value: "qatari", label: "قطري" },
               { value: "omani", label: "عماني" },
               { value: "jordanian", label: "أردني" },
               { value: "syrian", label: "سوري" },
               { value: "lebanese", label: "لبناني" },
               { value: "palestinian", label: "فلسطيني" },
               { value: "iraqi", label: "عراقي" },
               { value: "sudanese", label: "سوداني" },
               { value: "egyptian", label: "مصري" },
               { value: "libyan", label: "ليبي" },
               { value: "tunisian", label: "تونسي" },
               { value: "algerian", label: "جزائري" },
               { value: "moroccan", label: "مغربي" },
               { value: "mauritanian", label: "موريتاني" },
               { value: "other", label: "أخرى" },
            ]}
            value={formData.nationality}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  nationality: value,
               }))
            }
            placeholder="يرجى اختيار إجابة"
            error={errors.nationality}
         />
         {formData.nationality === `other` && (
            <Fragment>
               <Label>يرجى تحديد الجنسية:</Label>
               <Input
                  value={formData.otherNationality}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherNationality: e.target.value,
                     })
                  }
                  placeholder=""
               />
            </Fragment>
         )}
      </div>
   );
}

export default Nationality;
