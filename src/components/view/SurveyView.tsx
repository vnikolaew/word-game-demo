"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/Spinner";

interface SurveyViewProps {
  onComplete: (data: SurveyData) => void;
}

interface SurveyData {
  age: string;
  gender: string;
  education: string;
  nativeLanguage: string;
  otherLanguages: string;
  readingHabits: string;
}

export function SurveyView({ onComplete }: SurveyViewProps) {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<SurveyData>({
    age: "",
    gender: "",
    education: "",
    nativeLanguage: "",
    otherLanguages: "",
    readingHabits: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      onComplete(formData);
    } catch (error) {
      console.error("Error submitting survey:", error);
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
              value={formData.education}
              onValueChange={(value: string) =>
                setFormData({ ...formData, education: value })
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
              value={formData.otherLanguages}
              onChange={(e) =>
                setFormData({ ...formData, otherLanguages: e.target.value })
              }
              placeholder="أدخل اللغات الأخرى التي تتحدثها (اختياري)"
            />
          </div>

          <div className="space-y-2">
            <Label>عادات القراءة</Label>
            <RadioGroup
              required
              value={formData.readingHabits}
              onValueChange={(value: string) =>
                setFormData({ ...formData, readingHabits: value })
              }
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="daily" id="daily" />
                <Label htmlFor="daily">يومياً</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="weekly" id="weekly" />
                <Label htmlFor="weekly">أسبوعياً</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="monthly" id="monthly" />
                <Label htmlFor="monthly">شهرياً</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="rarely" id="rarely" />
                <Label htmlFor="rarely">نادراً</Label>
              </div>
            </RadioGroup>
          </div>

          <Button type="submit" className="w-full">
            إرسال
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
