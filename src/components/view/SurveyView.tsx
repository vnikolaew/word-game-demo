"use client";

import { useState, useRef, useEffect } from "react";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/Spinner";
import { toast } from "sonner";

// Types
import { SurveyData } from "@/types";

interface SurveyViewProps {
  onComplete: (data: SurveyData) => void;
}

interface FormErrors {
  [key: string]: string;
}

interface CustomDropdownProps {
  options: { value: string; label: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  error?: string;
}

const CustomDropdown = ({
  options,
  value,
  onChange,
  placeholder,
  error,
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className={`w-full p-3 border rounded-lg bg-white cursor-pointer flex items-center justify-between ${
          error ? "border-red-500" : "border-gray-300"
        } hover:border-gray-400 transition-colors`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={selectedOption ? "text-gray-900" : "text-gray-500"}>
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
    const requiredFields = [
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

  return (
    <Card>
      <CardHeader>
        <CardTitle>استبيان المشارك / Participant Survey</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Native Language */}
          <div className="space-y-2">
            <Label htmlFor="nativeLanguage">أي لغة تعتبرها لغتك الأم؟</Label>
            <CustomDropdown
              options={[
                { value: "arabic", label: "العربية" },
                { value: "arabic_and_other", label: "العربية ولغة أخرى" },
                { value: "other", label: "لغة أخرى" },
              ]}
              value={formData.nativeLanguage}
              onChange={(value) => {
                setFormData((prev) => ({
                  ...prev,
                  nativeLanguage: value,
                  otherNativeLanguage:
                    value === "arabic" ? "" : prev.otherNativeLanguage,
                }));
              }}
              placeholder="يرجى اختيار إجابة"
              error={errors.nativeLanguage}
            />
            {(formData.nativeLanguage === "arabic_and_other" ||
              formData.nativeLanguage === "other") && (
              <div className="mt-2" key={formData.nativeLanguage}>
                <Input
                  placeholder="يرجى تحديد اللغة"
                  value={formData.otherNativeLanguage}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      otherNativeLanguage: e.target.value,
                    }))
                  }
                />
                {errors.otherNativeLanguage && (
                  <p className="text-red-500 text-sm">يرجى تحديد اللغة</p>
                )}
              </div>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label>الجنس</Label>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value: string) =>
                setFormData({ ...formData, gender: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">ذكر</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">أنثى</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="prefer_not_to_say"
                  id="prefer_not_to_say"
                />
                <Label htmlFor="prefer_not_to_say">لا أود الإفصاح</Label>
              </div>
            </RadioGroup>
            {errors.gender && (
              <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
          </div>

          {/* Age */}
          <div className="space-y-2">
            <Label htmlFor="age">العمر</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              placeholder="يرجى إدخال عمرك"
            />
            {errors.age && (
              <p className="text-red-500 text-sm">يرجى إدخال عمر صحيح</p>
            )}
          </div>

          {/* Education Level */}
          <div className="space-y-2">
            <Label htmlFor="highestEducation">المستوى التعليمي</Label>
            <CustomDropdown
              options={[
                {
                  value: "less_than_high_school",
                  label: "أقل من المدرسة الثانوية",
                },
                { value: "high_school", label: "المدرسة الثانوية" },
                { value: "vocational", label: "تدريب مهني" },
                { value: "some_college", label: "بعض التعليم الجامعي" },
                { value: "college_degree", label: "درجة جامعية" },
                { value: "master_degree", label: "درجة الماجستير" },
                { value: "phd", label: "دكتوراه" },
              ]}
              value={formData.highestEducation}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  highestEducation: value,
                }))
              }
              placeholder="يرجى اختيار إجابة"
              error={errors.highestEducation}
            />
          </div>

          {/* Additional Medical Questions */}
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

          {/* Language Acquisition */}
          <div className="space-y-2">
            <Label>كيف اكتسبت اللغة العربية؟</Label>
            <CustomDropdown
              options={[
                { value: "native", label: "لغة أم" },
                { value: "school", label: "في المدرسة" },
                { value: "self_taught", label: "تعلم ذاتي" },
                { value: "other", label: "طريقة أخرى" },
              ]}
              value={formData.languageAcquisition}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  languageAcquisition: value,
                }))
              }
              placeholder="يرجى اختيار إجابة"
              error={errors.languageAcquisition}
            />
          </div>

          {/* Family Language */}
          <div className="space-y-2">
            <Label>ما هي اللغة المستخدمة في منزلك؟</Label>
            <CustomDropdown
              options={[
                { value: "arabic", label: "العربية" },
                { value: "mixed", label: "العربية مع لغة أخرى" },
                { value: "other", label: "لغة أخرى" },
              ]}
              value={formData.familyLanguage}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  familyLanguage: value,
                }))
              }
              placeholder="يرجى اختيار إجابة"
              error={errors.familyLanguage}
            />
          </div>

          {/* Arabic Dialect */}
          <div className="space-y-2">
            <Label>ما هي لهجتك العربية؟</Label>
            <CustomDropdown
              options={[
                { value: "gulf", label: "خليجية" },
                { value: "levantine", label: "شامية" },
                { value: "egyptian", label: "مصرية" },
                { value: "maghrebi", label: "مغربية" },
                { value: "iraqi", label: "عراقية" },
                { value: "yemeni", label: "يمنية" },
                { value: "other", label: "أخرى" },
              ]}
              value={formData.arabicDialect}
              onChange={(value) =>
                setFormData((prev) => ({
                  ...prev,
                  arabicDialect: value,
                }))
              }
              placeholder="يرجى اختيار إجابة"
              error={errors.arabicDialect}
            />
          </div>

          {/* Nationality */}
          <div className="space-y-2">
            <Label>الجنسية</Label>
            <Input
              value={formData.nationality}
              onChange={(e) =>
                setFormData({ ...formData, nationality: e.target.value })
              }
              placeholder="يرجى إدخال جنسيتك"
            />
            {errors.nationality && (
              <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
          </div>

          {/* Residence */}
          <div className="space-y-2">
            <Label>بلد الإقامة</Label>
            <Input
              value={formData.residence}
              onChange={(e) =>
                setFormData({ ...formData, residence: e.target.value })
              }
              placeholder="يرجى إدخال بلد إقامتك"
            />
            {errors.residence && (
              <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
          </div>

          {/* Languages */}
          <div className="space-y-2">
            <Label>ما هي اللغات التي تتحدثها؟</Label>
            <Input
              value={formData.languages}
              onChange={(e) =>
                setFormData({ ...formData, languages: e.target.value })
              }
              placeholder="يرجى إدخال اللغات التي تتحدثها"
            />
            {errors.languages && (
              <p className="text-red-500 text-sm">هذا الحقل مطلوب</p>
            )}
          </div>

          {/* Education Language Fields */}
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
                  setFormData({ ...formData, primaryLanguage: e.target.value })
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
                  setFormData({ ...formData, middleLanguage: e.target.value })
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

          {/* Language Usage Hours */}
          <div className="space-y-4">
            <div className="space-y-2">
              <Label>كم ساعة تقضي في القراءة باللغة العربية يومياً؟</Label>
              <CustomDropdown
                options={[
                  { value: "0", label: "لا أقرأ بالعربية" },
                  { value: "1", label: "ساعة واحدة" },
                  { value: "2", label: "ساعتان" },
                  { value: "3", label: "3 ساعات" },
                  { value: "4", label: "4 ساعات" },
                  { value: "5", label: "5 ساعات أو أكثر" },
                ]}
                value={formData.readingHours}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    readingHours: value,
                  }))
                }
                placeholder="يرجى اختيار عدد الساعات"
                error={errors.readingHours}
              />
            </div>

            <div className="space-y-2">
              <Label>كم ساعة تقضي في الاستماع باللغة العربية يومياً؟</Label>
              <CustomDropdown
                options={[
                  { value: "0", label: "لا أستمع للعربية" },
                  { value: "1", label: "ساعة واحدة" },
                  { value: "2", label: "ساعتان" },
                  { value: "3", label: "3 ساعات" },
                  { value: "4", label: "4 ساعات" },
                  { value: "5", label: "5 ساعات أو أكثر" },
                ]}
                value={formData.listeningHours}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    listeningHours: value,
                  }))
                }
                placeholder="يرجى اختيار عدد الساعات"
                error={errors.listeningHours}
              />
            </div>

            <div className="space-y-2">
              <Label>كم ساعة تقضي في الكتابة باللغة العربية يومياً؟</Label>
              <CustomDropdown
                options={[
                  { value: "0", label: "لا أكتب بالعربية" },
                  { value: "1", label: "ساعة واحدة" },
                  { value: "2", label: "ساعتان" },
                  { value: "3", label: "3 ساعات" },
                  { value: "4", label: "4 ساعات" },
                  { value: "5", label: "5 ساعات أو أكثر" },
                ]}
                value={formData.writingHours}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    writingHours: value,
                  }))
                }
                placeholder="يرجى اختيار عدد الساعات"
                error={errors.writingHours}
              />
            </div>

            <div className="space-y-2">
              <Label>كم ساعة تقضي في التحدث باللغة العربية يومياً؟</Label>
              <CustomDropdown
                options={[
                  { value: "0", label: "لا أتحدث العربية" },
                  { value: "1", label: "ساعة واحدة" },
                  { value: "2", label: "ساعتان" },
                  { value: "3", label: "3 ساعات" },
                  { value: "4", label: "4 ساعات" },
                  { value: "5", label: "5 ساعات أو أكثر" },
                ]}
                value={formData.speakingHours}
                onChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    speakingHours: value,
                  }))
                }
                placeholder="يرجى اختيار عدد الساعات"
                error={errors.speakingHours}
              />
            </div>
          </div>

          <Button type="submit" className="w-full">
            إرسال
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
