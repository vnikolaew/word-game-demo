"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";

interface ConsentViewProps {
  onConsent: () => void;
}

export function ConsentView({ onConsent }: ConsentViewProps) {
  const [checkedItems, setCheckedItems] = useState<string[]>([]);

  const consentItems = [
    {
      id: "voluntary",
      text: "أدرك أن مشاركتي طوعية وأنني حر في الانسحاب في أي وقت دون إبداء أي سبب.",
    },
    {
      id: "data",
      text: "أدرك أن بياناتي سيتم تخزينها بشكل آمن وأن إجاباتي ستكون مجهولة الهوية.",
    },
    {
      id: "research",
      text: "أوافق على استخدام بياناتي لأغراض البحث والمنشورات الأكاديمية.",
    },
    {
      id: "contact",
      text: "أدرك أنه يمكنني الاتصال بفريق البحث إذا كان لدي أي أسئلة أو مخاوف حول الدراسة.",
    },
  ];

  const allChecked = checkedItems.length === consentItems.length;

  return (
    <Card>
      <CardHeader>
        <CardTitle>الموافقة على المشاركة في الدراسة</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="prose prose-sm">
          <h2 className="text-lg font-medium">نظرة عامة على الدراسة</h2>
          <p>
            يهدف هذا المشروع البحثي إلى فهم كيفية معالجة الناس للكلمات العربية
            والتعرف عليها. سيتم عرض سلسلة من سلاسل الأحرف عليك وسيُطلب منك تحديد
            ما إذا كانت كل واحدة منها كلمة عربية حقيقية أم لا.
          </p>

          <h2 className="text-lg font-medium mt-6">ماذا ستحتاج أن تفعل؟</h2>
          <ul>
            <li>إكمال جلسة تدريبية مع ملاحظات فورية</li>
            <li>إكمال اختبار الكلمات الرئيسي (حوالي 10-15 دقيقة)</li>
            <li>ملء استبيان موجز عن خلفيتك</li>
          </ul>

          <h2 className="text-lg font-medium mt-6">حماية البيانات</h2>
          <p>
            سيتم تجهيل جميع البيانات التي يتم جمعها وتخزينها بشكل آمن. سيتم
            استخدام إجاباتك فقط لأغراض البحث ويمكن تضمينها في المنشورات
            الأكاديمية بشكل مجهول الهوية.
          </p>
        </div>

        <div className="space-y-4">
          {consentItems.map((item) => (
            <div key={item.id} className="flex items-start space-x-3">
              <Checkbox
                id={item.id}
                checked={checkedItems.includes(item.id)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setCheckedItems([...checkedItems, item.id]);
                  } else {
                    setCheckedItems(
                      checkedItems.filter((id) => id !== item.id)
                    );
                  }
                }}
              />
              <label
                htmlFor={item.id}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item.text}
              </label>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button onClick={onConsent} disabled={!allChecked}>
          أوافق على المشاركة
        </Button>
      </CardFooter>
    </Card>
  );
}
