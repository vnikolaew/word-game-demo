"use client";

import { useState } from "react";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/Spinner";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Types
import { SurveyData } from "@/types";

interface SurveyViewProps {
  onComplete: (data: SurveyData) => void;
}

interface FormErrors {
  [key: string]: string;
}

export function SurveyView({ onComplete }: SurveyViewProps) {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [formData, setFormData] = useState<SurveyData>({
    nativeLanguage: "",
    otherNativeLanguage: "",
    languageAcquisition: "",
    familyLanguage: "",
    gender: "",
    age: "",
    highestEducation: "",
    arabicDialect: "",
    nationality: "",
    residence: "",
    languages: "",
    kindergartenLanguage: "",
    primaryLanguage: "",
    middleLanguage: "",
    highSchoolLanguage: "",
    universityLanguage: "",
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

    // Required field validation
    Object.keys(formData).forEach((key) => {
      // Skip validation for optional "other" fields
      if (key.startsWith("other")) return;

      if (!formData[key as keyof SurveyData]) {
        newErrors[key] = "هذا الحقل مطلوب / This field is required";
      }
    });

    // Age validation
    if (
      formData.age &&
      (isNaN(Number(formData.age)) || Number(formData.age) < 0)
    ) {
      newErrors.age = "يرجى إدخال عمر صحيح / Please enter a valid age";
    }

    // Validate other language field if needed
    if (
      (formData.nativeLanguage === "arabic_and_other" ||
        formData.nativeLanguage === "other") &&
      !formData.otherNativeLanguage
    ) {
      newErrors.otherNativeLanguage =
        "يرجى تحديد اللغة / Please specify the language";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error(
        "يرجى ملء جميع الحقول المطلوبة / Please fill all required fields"
      );
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
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || "Failed to submit survey");
      }

      toast.success("تم إرسال الاستبيان بنجاح / Survey submitted successfully");
      onComplete(formData);
    } catch (error) {
      console.error("Error submitting survey:", error);
      toast.error(
        error instanceof Error
          ? error.message
          : "فشل في إرسال الاستبيان / Failed to submit survey"
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
            <Label htmlFor="nativeLanguage">
              أي لغة تعتبرها لغتك الأم؟ / Which language do you consider your
              mother tongue?
            </Label>
            <Select
              value={formData.nativeLanguage}
              onValueChange={(value: string) => {
                setFormData({
                  ...formData,
                  nativeLanguage: value,
                  otherNativeLanguage:
                    value === "arabic" ? "" : formData.otherNativeLanguage,
                });
              }}
            >
              <SelectTrigger>
                <SelectValue placeholder="يرجى اختيار إجابة / Please select an answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="arabic">العربية / Arabic</SelectItem>
                <SelectItem value="arabic_and_other">
                  العربية ولغة أخرى / Arabic and another language
                </SelectItem>
                <SelectItem value="other">
                  لغة أخرى / Another language
                </SelectItem>
              </SelectContent>
            </Select>
            {errors.nativeLanguage && (
              <p className="text-red-500 text-sm">{errors.nativeLanguage}</p>
            )}
            {(formData.nativeLanguage === "arabic_and_other" ||
              formData.nativeLanguage === "other") && (
              <div className="mt-2">
                <Input
                  placeholder="يرجى تحديد اللغة / Please specify the language"
                  value={formData.otherNativeLanguage || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      otherNativeLanguage: e.target.value,
                    })
                  }
                />
              </div>
            )}
          </div>

          {/* Gender */}
          <div className="space-y-2">
            <Label>الجنس / Gender</Label>
            <RadioGroup
              value={formData.gender}
              onValueChange={(value: string) =>
                setFormData({ ...formData, gender: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="male" id="male" />
                <Label htmlFor="male">ذكر / Male</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="female" id="female" />
                <Label htmlFor="female">أنثى / Female</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  value="prefer_not_to_say"
                  id="prefer_not_to_say"
                />
                <Label htmlFor="prefer_not_to_say">
                  لا أود الإفصاح / Prefer not to say
                </Label>
              </div>
            </RadioGroup>
            {errors.gender && (
              <p className="text-red-500 text-sm">{errors.gender}</p>
            )}
          </div>

          {/* Age */}
          <div className="space-y-2">
            <Label htmlFor="age">العمر / Age</Label>
            <Input
              id="age"
              type="number"
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              placeholder="يرجى إدخال عمرك / Please enter your age"
            />
            {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
          </div>

          {/* Education Level */}
          <div className="space-y-2">
            <Label htmlFor="highestEducation">
              المستوى التعليمي / Education Level
            </Label>
            <Select
              value={formData.highestEducation}
              onValueChange={(value: string) =>
                setFormData({ ...formData, highestEducation: value })
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="يرجى اختيار إجابة / Please select an answer" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="less_than_high_school">
                  أقل من المدرسة الثانوية / Less than high school
                </SelectItem>
                <SelectItem value="high_school">
                  المدرسة الثانوية / High school
                </SelectItem>
                <SelectItem value="vocational">
                  تدريب مهني / Vocational training
                </SelectItem>
                <SelectItem value="some_college">
                  بعض التعليم الجامعي / Some college education
                </SelectItem>
                <SelectItem value="college_degree">
                  درجة جامعية / College degree
                </SelectItem>
                <SelectItem value="master_degree">
                  درجة الماجستير / Master&apos;s degree
                </SelectItem>
                <SelectItem value="phd">دكتوراه / PhD</SelectItem>
              </SelectContent>
            </Select>
            {errors.highestEducation && (
              <p className="text-red-500 text-sm">{errors.highestEducation}</p>
            )}
          </div>

          {/* Additional Medical Questions */}
          <div className="space-y-2">
            <Label>
              هل تم تشخيصك باضطراب الانتباه وفرط الحركة؟ / Have you been
              diagnosed with ADHD?
            </Label>
            <RadioGroup
              value={formData.attentionDisorder}
              onValueChange={(value: string) =>
                setFormData({ ...formData, attentionDisorder: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="attention_yes" />
                <Label htmlFor="attention_yes">نعم / Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="attention_no" />
                <Label htmlFor="attention_no">لا / No</Label>
              </div>
            </RadioGroup>
            {errors.attentionDisorder && (
              <p className="text-red-500 text-sm">{errors.attentionDisorder}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>
              هل تم تشخيصك باضطراب القراءة (الديسلكسيا)؟ / Have you been
              diagnosed with dyslexia?
            </Label>
            <RadioGroup
              value={formData.readingDisorder}
              onValueChange={(value: string) =>
                setFormData({ ...formData, readingDisorder: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="reading_yes" />
                <Label htmlFor="reading_yes">نعم / Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="reading_no" />
                <Label htmlFor="reading_no">لا / No</Label>
              </div>
            </RadioGroup>
            {errors.readingDisorder && (
              <p className="text-red-500 text-sm">{errors.readingDisorder}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>
              هل رؤيتك طبيعية أو مُصححة؟ / Do you have normal or corrected
              vision?
            </Label>
            <RadioGroup
              value={formData.vision}
              onValueChange={(value: string) =>
                setFormData({ ...formData, vision: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="vision_yes" />
                <Label htmlFor="vision_yes">نعم / Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="vision_no" />
                <Label htmlFor="vision_no">لا / No</Label>
              </div>
            </RadioGroup>
            {errors.vision && (
              <p className="text-red-500 text-sm">{errors.vision}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>
              هل أنت أيمن أم أيسر؟ / Are you right-handed or left-handed?
            </Label>
            <RadioGroup
              value={formData.handedness}
              onValueChange={(value: string) =>
                setFormData({ ...formData, handedness: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="right" id="right_handed" />
                <Label htmlFor="right_handed">أيمن / Right-handed</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="left" id="left_handed" />
                <Label htmlFor="left_handed">أيسر / Left-handed</Label>
              </div>
            </RadioGroup>
            {errors.handedness && (
              <p className="text-red-500 text-sm">{errors.handedness}</p>
            )}
          </div>

          <Button type="submit" className="w-full">
            إرسال / Submit
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
