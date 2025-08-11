import { Input } from "@/components/ui/input";
import { SurveyData } from "@/types";
import { Label } from "@radix-ui/react-label";
import React, { Dispatch, SetStateAction } from "react";
import { FormErrors } from "../SurveyView";
import { cn } from "@/lib/utils";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}

export const NATIONALITY_OPTIONS = [
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
] as const;

function Nationality({ formData, setFormData, errors }: Props) {
   const [value, setValue] = React.useState("");

   return (
      <div className="space-y-2 w-3/4 md:!w-1/2 flex flex-col items-start">
         <div>
            <Label dir={`ltr`} htmlFor="nationality">
               What is your nationality?
            </Label>
            <br/>
            <Label htmlFor="nationality">ما هي جنسيتك؟</Label>
         </div>
         <Input
            className={cn(
               errors.nationality && `!border-red-500 !outline-red-500`,
               `w-[400px]`
            )}
            onChange={(e) => {
               setValue(e.target.value);
               setFormData({ ...formData, nationality: e.target.value });
            }}
            value={value}
            placeholder={`Enter your nationality here`}
         />
         {errors.nationality && (
            <p className="text-red-500 text-sm">يرجى إدخال عمر صحيح</p>
         )}
         {formData.nationality === `other` && (
            <div className="!mt-4">
               <Label>Please select a nationality:</Label>
               <Input
                  value={formData.otherNationality}
                  onChange={(e) =>
                     setFormData({
                        ...formData,
                        otherNationality: e.target.value,
                     })
                  }
                  placeholder={``}
               />
            </div>
         )}
      </div>
   );
}

export default Nationality;
