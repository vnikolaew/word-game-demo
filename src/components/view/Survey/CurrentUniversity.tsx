import React from "react";
import { Label } from "@radix-ui/react-label";
import { Dispatch, SetStateAction } from "react";
import {
   CustomDropdown,
   DROPDOWN_PLACEHOLDER,
   FormErrors,
} from "../SurveyView";
import { SurveyData } from "@/types";

interface Props {
   formData: SurveyData;
   errors: FormErrors;
   setFormData: Dispatch<SetStateAction<SurveyData>>;
}
const SAUDI_ARABIA = `saudi_arabia`;

function CurrentUniversity({ errors, formData, setFormData }: Props) {
   if (formData.residence !== SAUDI_ARABIA) return null;

   return (
      <div className="space-y-2 w-3/4 md:!w-1/2">
         <Label>إذا كنت طالب جامعي، ما اسم جامعتك؟</Label>
         <CustomDropdown
            className=""
            options={[
               {
                  value: "king_saud_university",
                  label: "جامعة الملك سعود",
               },
               {
                  value: "princess_nora_university",
                  label: "جامعة الأميرة نورة بنت عبدالرحمن",
               },
               {
                  value: "imam_mohammad_university",
                  label: "جامعة الإمام محمد بن سعود الإسلامية",
               },
               {
                  value: "majmaah_university",
                  label: "جامعة المجمعة",
               },
               {
                  value: "qassim_university",
                  label: "جامعة القصيم",
               },
               {
                  value: "other",
                  label: "أخرى، الرجاء التحديد",
               },
               {
                  value: "not_applicable",
                  label: "لاينطبق",
               },
            ]}
            value={formData.currentUniversity ?? ``}
            onChange={(value) =>
               setFormData((prev) => ({
                  ...prev,
                  currentUniversity: value,
               }))
            }
            placeholder={DROPDOWN_PLACEHOLDER}
            error={errors.currentUniversity}
         />
      </div>
   );
}

export default CurrentUniversity;
