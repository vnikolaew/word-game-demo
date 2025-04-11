"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/Spinner";
import { toast } from "sonner";

interface SurveyViewProps {
  onComplete: (data: SurveyData) => void;
}

interface SurveyData {
  age: string;
  gender: string;
  educationLevel: string;
  nativeLanguage: string;
  otherLanguages: string[];
  arabicProficiency?: string;
  yearsLearningArabic?: string;
}

export function SurveyView({ onComplete }: SurveyViewProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<SurveyData>({
    age: "",
    gender: "",
    educationLevel: "",
    nativeLanguage: "",
    otherLanguages: [],
    arabicProficiency: "",
    yearsLearningArabic: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Convert otherLanguages string to array if needed
      const formattedData = {
        ...formData,
        otherLanguages:
          formData.otherLanguages.length > 0 ? formData.otherLanguages : [],
      };

      const response = await fetch("/api/survey", {
        method: "POST",
        body: JSON.stringify(formattedData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit survey");
      }
      toast.success("Survey submitted successfully");

      onComplete(formattedData);
    } catch (error) {
      console.error("Error submitting survey:", error);
      toast.error("Failed to submit survey");
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
        <CardTitle>استبيان المشارك</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="age">العمر</Label>
            <Input
              id="age"
              type="number"
              required
              value={formData.age}
              onChange={(e) =>
                setFormData({ ...formData, age: e.target.value })
              }
              placeholder="أدخل عمرك"
            />
          </div>

          <div className="space-y-2">
            <Label>الجنس</Label>
            <RadioGroup
              required
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
                <RadioGroupItem value="other" id="other" />
                <Label htmlFor="other">آخر</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label>المستوى التعليمي</Label>
            <RadioGroup
              required
              value={formData.educationLevel}
              onValueChange={(value: string) =>
                setFormData({ ...formData, educationLevel: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="highSchool" id="highSchool" />
                <Label htmlFor="highSchool">ثانوي</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bachelors" id="bachelors" />
                <Label htmlFor="bachelors">بكالوريوس</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="masters" id="masters" />
                <Label htmlFor="masters">ماجستير</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="doctorate" id="doctorate" />
                <Label htmlFor="doctorate">دكتوراه</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="nativeLanguage">اللغة الأم</Label>
            <Input
              id="nativeLanguage"
              required
              value={formData.nativeLanguage}
              onChange={(e) =>
                setFormData({ ...formData, nativeLanguage: e.target.value })
              }
              placeholder="أدخل لغتك الأم"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="otherLanguages">اللغات الأخرى</Label>
            <Input
              id="otherLanguages"
              value={formData.otherLanguages.join(", ")}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  otherLanguages: e.target.value
                    .split(",")
                    .map((lang) => lang.trim())
                    .filter(Boolean),
                })
              }
              placeholder="أدخل اللغات الأخرى التي تتحدثها (مفصولة بفواصل)"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="arabicProficiency">مستوى إتقان اللغة العربية</Label>
            <RadioGroup
              value={formData.arabicProficiency}
              onValueChange={(value: string) =>
                setFormData({ ...formData, arabicProficiency: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="beginner" />
                <Label htmlFor="beginner">مبتدئ</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="intermediate" />
                <Label htmlFor="intermediate">متوسط</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced">متقدم</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="space-y-2">
            <Label htmlFor="yearsLearningArabic">
              سنوات تعلم اللغة العربية
            </Label>
            <Input
              id="yearsLearningArabic"
              type="number"
              value={formData.yearsLearningArabic}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  yearsLearningArabic: e.target.value,
                })
              }
              placeholder="عدد سنوات تعلم اللغة العربية"
            />
          </div>

          <Button type="submit" className="w-full">
            إرسال
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
