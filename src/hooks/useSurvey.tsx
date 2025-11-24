"use client";
import { FormErrors } from "@/components/view/SurveyView";
import { SurveyData } from "@/types";
import { useState } from "react";
import { toast } from "sonner";

export function useSurvey(onComplete: (data: SurveyData) => void) {
   const [loading, setLoading] = useState(false);
   const [page, setPage] = useState(1);

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
      otherArabicDialect: ``,
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

   const validateForm = (_: boolean = false) => {
      const newErrors: FormErrors = {};
      const requiredFields: (keyof SurveyData)[] = [
         // `currentUniversity`,
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
            console.warn(`Missing field: ${field}`);
         }
      });

      const SAUDI_ARABIA = `saudi_arabia`;
      if (
          formData.residence === SAUDI_ARABIA &&
          !formData.currentUniversity?.length
      ) {
         newErrors.currentUniversity = `يرجى تحديد الجامعة.`;
      }

      if (
          (formData.nativeLanguage === "arabic_and_other" ||
              formData.nativeLanguage === "other") &&
          !formData.otherNativeLanguage
      ) {
         newErrors.nativeLanguage = `يرجى تحديد اللغة.`;
      }

      if (
          formData.languageAcquisition?.toLowerCase().includes("other") &&
          !formData.otherAcquisitionLanguage
      ) {
         newErrors.languageAcquisition = `يرجى تحديد اللغة.`;
      }

      if (
          (formData.familyLanguage?.toLowerCase().includes(`other`) ||
              formData.familyLanguage?.toLowerCase().includes(`mix`)) &&
          !formData.otherFamilyLanguage
      ) {
         newErrors.familyLanguage = `يرجى تحديد اللغة.`;
      }

      if (
          formData.nationality?.toLowerCase() === "other" &&
          !formData.otherNationality
      ) {
         newErrors.nationality = `يرجى تحديد الجنسية.`;
      }

      if (
          formData.residence?.toLowerCase() === "other" &&
          !formData.otherResidence
      ) {
         newErrors.residence = "يرجى تحديد اللغة";
      }

      if (
          formData.arabicDialect?.toLowerCase() === "other" &&
          !formData.otherArabicDialect
      ) {
         newErrors.arabicDialect = "يرجى تحديد اللغة";
      }

      const pairKeys: [keyof SurveyData, keyof SurveyData][] = [
         [`kindergartenLanguage`, `otherKindergartenLanguage`],
         [`primaryLanguage`, `otherPrimaryLanguage`],
         [`middleLanguage`, `otherMiddleLanguage`],
         [`highSchoolLanguage`, `otherHighSchoolLanguage`],
         [`universityLanguage`, `otherUniversityLanguage`],
      ];
      pairKeys.forEach(([key, otherKey]) => {
         if (
             (formData[key]?.toLowerCase() === "other" ||
                 formData[key]?.toLowerCase() === `two_languages`) &&
             !formData[otherKey]
         ) {
            newErrors[key] = `يرجى تحديد اللغة.`;
         }
      });

      // Age validation
      if (formData.age) {
         const ageNum = Number(formData.age);
         if (isNaN(ageNum) || ageNum < 0 || ageNum > 120) {
            newErrors.age = "يرجى إدخال عمر صحيح";
         }
      }

      setErrors(newErrors);
      return newErrors;
   };

   const normalizeFormData = (values: SurveyData) => {
      values.arabicDialect = values.arabicDialect === `other`
          ? (values.otherArabicDialect ?? ``)
          : values.arabicDialect;
      return values
   }

   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Form submission attempted");

      const new_errors = validateForm(true);
      if (Object.keys(new_errors).length > 0) {
         console.log("Form validation failed", { errors });
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
            body: JSON.stringify(normalizeFormData(formData)),
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

   return {
      handleSubmit,
      loading,
      page,
      errors,
      formData,
      validateForm,
      setPage,
      setFormData,
      setErrors,
   };
}
