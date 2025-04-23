"use client";

import { useState, useRef, useEffect } from "react";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";
import { toast } from "sonner";

// Types
import { SurveyData } from "@/types";
import NativeLanguage from "./Survey/NativeLanguage";
import Gender from "./Survey/Gender";
import Age from "./Survey/Age";
import EducationLevel from "./Survey/EducationLevel";
import FamilyLanguage from "./Survey/FamilyLanguage";
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

interface SurveyViewProps {
   onComplete: (data: SurveyData) => void;
}

export interface FormErrors {
   [key: string]: string;
}

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

export function SurveyView({ onComplete }: SurveyViewProps) {
   const [loading, setLoading] = useState(false);
   const [errors, setErrors] = useState<FormErrors>({});
   const [formData, setFormData] = useState<SurveyData>({
      currentUniversity: ``,
      nativeLanguage: "",
      otherNativeLanguage: "",
      languageAcquisition: "",
      otherAcquisitionLanguage: "",
      familyLanguage: "",
      otherFamilyLanguage: "",
      gender: "",
      age: "",
      highestEducation: "",
      arabicDialect: "",
      nationality: "",
      otherNationality: "",
      residence: "",
      otherResidence: "",
      languages: "",
      kindergartenLanguage: "",
      otherKindergartenLanguage: "",
      primaryLanguage: "",
      otherPrimaryLanguage: "",
      middleLanguage: "",
      otherMiddleLanguage: "",
      highSchoolLanguage: "",
      otherHighSchoolLanguage: "",
      universityLanguage: "",
      otherUniversityLanguage: "",
      readingHours: "",
      listeningHours: "",
      writingHours: "",
      speakingHours: "",
      attentionDisorder: "",
      readingDisorder: "",
      vision: "",
      handedness: "",
   });

   const validateForm = () => {
      const newErrors: FormErrors = {};
      const requiredFields: (keyof SurveyData)[] = [
         `currentUniversity`,
         "nativeLanguage",
         "languageAcquisition",
         "familyLanguage",
         "gender",
         "age",
         "highestEducation",
         "arabicDialect",
         "nationality",
         "residence",
         "languages",
         "kindergartenLanguage",
         "primaryLanguage",
         "middleLanguage",
         "highSchoolLanguage",
         "universityLanguage",
         "readingHours",
         "listeningHours",
         "writingHours",
         "speakingHours",
         "attentionDisorder",
         "readingDisorder",
         "vision",
         "handedness",
      ];

      // Debug log
      console.log("Current form data:", formData);

      // Check each required field
      requiredFields.forEach((field) => {
         if (
            !formData[field as keyof SurveyData] ||
            formData[field as keyof SurveyData] === ""
         ) {
            newErrors[field] = "هذا الحقل مطلوب";
            console.log(`Missing field: ${field}`);
         }
      });

      // Special validation for otherNativeLanguage
      if (
         (formData.nativeLanguage === "arabic_and_other" ||
            formData.nativeLanguage === "other") &&
         !formData.otherNativeLanguage
      ) {
         newErrors.otherNativeLanguage = "يرجى تحديد اللغة";
      }

      // Age validation
      if (formData.age) {
         const ageNum = Number(formData.age);
         if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
            newErrors.age = "يرجى إدخال عمر صحيح";
         }
      }

      setErrors(newErrors);
      return Object.keys(newErrors).length === 0;
   };

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submission attempted");

      if (!validateForm()) {
         console.log("Form validation failed");
         toast.error("يرجى ملء جميع الحقول المطلوبة");
         return;
      }

      setLoading(true);

      try {
         const response = await fetch("/api/survey", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
         });

         if (!response.ok) {
            throw new Error("فشل في إرسال الاستبيان");
         }

         toast.success("تم إرسال الاستبيان بنجاح");
         onComplete(formData);
      } catch (error) {
         console.error("Error submitting survey:", error);
         toast.error(
            error instanceof Error ? error.message : "فشل في إرسال الاستبيان"
         );
      } finally {
         setLoading(false);
      }
   };

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
            <CardTitle>استبيان المشارك / Participant Survey</CardTitle>
         </CardHeader>
         <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
               <NativeLanguage {...props} />
               <ChildLanguages {...props} />
               <FamilyLanguage {...props} />

               <Gender {...props} />
               <Age {...props} />
               <CurrentUniversity {...props} />

               <EducationLevel {...props} />
               <ArabicDialect {...props} />
               <Nationality {...props} />
               <Residence {...props} />
               <Languages {...props} />
               <KindergartenLanguage {...props} />
               <PrimaryLanguage {...props} />
               <MiddleLanguage {...props} />
               <HighSchoolLanguage {...props} />
               <UniversityLanguage {...props} />
               <LanguageUsageHours {...props} />

               <AttentionDisorder {...props} />
               <ReadingDisorder {...props} />
               <Vision {...props} />
               <Hands {...props} />

               <Button type="submit" className="w-full">
                  إرسال
               </Button>
            </form>
         </CardContent>
      </Card>
   );
}
