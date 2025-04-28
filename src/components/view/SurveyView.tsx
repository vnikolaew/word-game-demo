"use client";

import { useState, useRef, useEffect } from "react";
import { match } from "ts-pattern";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";

// Types
import { SurveyData } from "@/types";
import NativeLanguage from "./Survey/NativeLanguage";
import Gender from "./Survey/Gender";
import Age from "./Survey/Age";
import EducationLevel from "./Survey/EducationLevel";
import ArabicDialect from "./Survey/ArabicDialect";
import Nationality from "./Survey/Nationality";
import Residence from "./Survey/Residence";
import Languages from "./Survey/Languages";
import LanguageUsageHours from "./Survey/LanguageUsageHours";
import ChildLanguages from "./Survey/ChildLanguages";
import CurrentUniversity from "./Survey/CurrentUniversity";
import KindergartenLanguage from "./Survey/KindergartenLanguage";
import PrimaryLanguage from "./Survey/PrimaryLanguage";
import MiddleLanguage from "./Survey/MiddleLanguage";
import HighSchoolLanguage from "./Survey/HighSchoolLanguage";
import UniversityLanguage from "./Survey/UniversityLanguage";
import AttentionDisorder from "./Survey/AttentionDisorder";
import ReadingDisorder from "./Survey/ReadingDisorder";
import Vision from "./Survey/Vision";
import Hands from "./Survey/Hands";
import { cn } from "@/lib/utils";
import ParentsLanguage from "./Survey/ParentsLanguage";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSurvey } from "@/hooks/useSurvey";

interface SurveyViewProps {
   onComplete: (data: SurveyData) => void;
}

export type FormErrors = Partial<Record<keyof SurveyData, string>>;

interface CustomDropdownProps {
   options: { value: string; label: string }[];
   value: string;
   onChange: (value: string) => void;
   placeholder: string;
   error?: string;
   className?: string;
}

export const CustomDropdown = ({
   options,
   value,
   onChange,
   placeholder,
   error,
   className,
}: CustomDropdownProps) => {
   const [isOpen, setIsOpen] = useState(false);
   const dropdownRef = useRef<HTMLDivElement>(null);

   const selectedOption = options.find((opt) => opt.value === value);

   useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
         if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target as Node)
         ) {
            setIsOpen(false);
         }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () =>
         document.removeEventListener("mousedown", handleClickOutside);
   }, []);

   return (
      <div className="relative" ref={dropdownRef}>
         <div
            className={cn(
               `w-full p-3 border rounded-lg bg-white cursor-pointer flex items-center justify-between ${
                  error ? "border-red-500" : "border-gray-300"
               } hover:border-gray-400 transition-colors`,
               className
            )}
            onClick={() => setIsOpen(!isOpen)}
         >
            <span
               tabIndex={0}
               className={selectedOption ? "text-gray-900" : "text-gray-500"}
            >
               {selectedOption ? selectedOption.label : placeholder}
            </span>
            <svg
               className={`w-5 h-5 transition-transform ${
                  isOpen ? "transform rotate-180" : ""
               }`}
               fill="none"
               stroke="currentColor"
               viewBox="0 0 24 24"
            >
               <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
               />
            </svg>
         </div>

         {isOpen && (
            <div className="absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
               {options.map((option) => (
                  <div
                     key={option.value}
                     aria-disabled={!option.value?.length}
                     className={`p-3 cursor-pointer hover:bg-gray-50 transition-colors ${
                        value === option.value ? "bg-gray-100" : ""
                     }`}
                     onClick={() => {
                        onChange(option.value);
                        setIsOpen(false);
                     }}
                  >
                     {option.label}
                  </div>
               ))}
            </div>
         )}
         {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>
   );
};

export const DROPDOWN_PLACEHOLDER = `الرجاء تحديد خيار`;

const FIELDS_BY_PAGE: (keyof SurveyData)[][] = [
   [
      `age`,
      `gender`,
      `highestEducation`,
      `nationality`,
      `otherNationality`,
      `residence`,
      `otherResidence`,
      `currentUniversity`,
   ],
   [
      `nativeLanguage`,
      `otherNativeLanguage`,
      `languageAcquisition`,
      `otherAcquisitionLanguage`,
      `familyLanguage`,
      `otherFamilyLanguage`,
      `languages`,
      `arabicDialect`,
   ],
   [
      `kindergartenLanguage`,
      `otherKindergartenLanguage`,
      `primaryLanguage`,
      `otherPrimaryLanguage`,
      `middleLanguage`,
      `otherMiddleLanguage`,
      `highSchoolLanguage`,
      `otherHighSchoolLanguage`,
      `universityLanguage`,
      `otherUniversityLanguage`,
   ],
   [`readingHours`, `listeningHours`, `writingHours`, `speakingHours`],
   [`attentionDisorder`, `readingDisorder`, `vision`, `handedness`],
];

export function SurveyView({ onComplete }: SurveyViewProps) {
   const {
      errors,
      formData,
      handleSubmit,
      loading,
      page,
      setErrors,
      setFormData,
      setPage,
      validateForm,
   } = useSurvey(onComplete);

   if (loading) {
      return (
         <div className="flex items-center justify-center min-h-[50vh]">
            <Spinner size="lg" />
         </div>
      );
   }

   const props = { errors, formData, setFormData } as const;

   return (
      <Card>
         <CardHeader>
            <CardTitle>استبيان المشارك </CardTitle>
         </CardHeader>
         <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
               {match(page)
                  .with(1, () => (
                     <>
                        <Age {...props} />
                        <Gender {...props} />
                        <EducationLevel {...props} />
                        <Nationality {...props} />
                        <Residence {...props} />
                        <CurrentUniversity {...props} />
                     </>
                  ))
                  .with(2, () => (
                     <>
                        <NativeLanguage {...props} />
                        <ChildLanguages {...props} />
                        <ParentsLanguage {...props} />
                        <Languages {...props} />
                        <ArabicDialect {...props} />
                     </>
                  ))
                  .with(3, () => (
                     <>
                        <KindergartenLanguage {...props} />
                        <PrimaryLanguage {...props} />
                        <MiddleLanguage {...props} />
                        <HighSchoolLanguage {...props} />
                        <UniversityLanguage {...props} />
                     </>
                  ))
                  .with(4, () => <LanguageUsageHours {...props} />)
                  .with(5, () => (
                     <>
                        <AttentionDisorder {...props} />
                        <ReadingDisorder {...props} />
                        <Vision {...props} />
                        <Hands {...props} />
                     </>
                  ))
                  .otherwise((_) => null)}

               {page < 5 ? (
                  <div className="w-full flex items-center !mt-4 gap-4 justify-end">
                     <Button
                        disabled={page === 1}
                        onClick={(_) => setPage((p) => p - 1)}
                        type="button"
                        className="w-fit !px-12 flex items-center gap-2"
                     >
                        سابق
                        <ChevronRight size={18} />
                     </Button>
                     <Button
                        disabled={page === 5}
                        onClick={(e) => {
                           e.preventDefault();
                           const new_errors = validateForm();
                           if (
                              !!Object.keys(new_errors).length &&
                              FIELDS_BY_PAGE[page - 1].some(
                                 (f) => !!new_errors[f]?.length
                              )
                           ) {
                              return;
                           }

                           setPage((p) => p + 1);
                           setErrors((e) => {
                              const new_errors = { ...e };
                              FIELDS_BY_PAGE[page].forEach((f) => {
                                 delete new_errors[f];
                              });
                              return new_errors;
                           });
                        }}
                        type="button"
                        className="w-fit !px-12 flex items-center gap-2"
                     >
                        التالي
                        <ChevronLeft size={18} />
                     </Button>
                  </div>
               ) : (
                  <div className="w-full flex items-center justify-center !mt-4">
                     <Button type="submit" className="w-1/2 !mx-auto">
                        إرسال
                     </Button>
                  </div>
               )}
            </form>
         </CardContent>
      </Card>
   );
}
