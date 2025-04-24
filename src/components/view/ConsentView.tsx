"use client";

import { useState } from "react";

// components
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
   const [submitting, setSubmitting] = useState(false);

   const consentItems = [
      {
         id: "statement1",
         text: "أفهم أن المشاركة في هذه الدراسة طوعية.",
      },
      {
         id: "statement2",
         text: "أفهم أن بياناتي ستظل مجهولة المصدر ولن تُستخدم إلا لأغراض البحث العلمي.",
      },
      {
         id: "statement3",
         text: "أوافق على المشاركة في هذه الدراسة.",
      },
   ];

   const allChecked = checkedItems.length === consentItems.length;

   const handleSubmitConsent = async () => {
      if (!allChecked || submitting) return;

      try {
         setSubmitting(true);
         // Call the parent's onConsent handler
         await onConsent();
      } finally {
         setSubmitting(false);
      }
   };

   return (
      <Card>
         <CardHeader>
            <CardTitle>التعليمات والموافقة على البحث</CardTitle>
            <CardDescription>
               اقرأ التعليمات بعناية ثم وافق عليها للمتابعة
            </CardDescription>
         </CardHeader>
         <CardContent className="space-y-8 mt-4">
            {" "}
            <div className="prose prose-sm">
               <h2 className="text-lg font-medium">
                  دراسة تقييم الكلمات العربية
               </h2>
               <p>
                  إذا كنت تتحدث اللغة العربية <b>العربية</b> وعمرك{" "}
                  <b>18 عامًا أو أكثر</b>، فنرحب بمشاركتك في هذه الدراسة.
                  <br /> يرجى قراءة المعلومات التالية بعناية.
                  <br /> والتواصل مع الباحثين إذا كان هناك أي معلومات غير واضحة
                  قبل اتخاذ قرار المشاركة.
                  <br />
               </p>

               <h2 className="text-lg font-medium mt-6">
                  ما هو هدف هذه الدراسة؟
               </h2>
               <p>
                  الهدف من هذه الدراسة هو قياس معرفة متحدثي اللغة العربية
                  بالكلمات العربية الفصيحة.
                  <br />
               </p>

               <h2 className="text-lg font-medium mt-6">هل يجب أن أشارك؟</h2>
               <p>
                  مشاركتك في الدراسة طوعية تمامًا،
                  <br /> ويمكنك الانسحاب منها <b>في أي وقت</b>.<br />
               </p>

               <h2 className="text-lg font-medium mt-6">كم مدة الدراسة؟</h2>
               <p>
                  10-15 دقيقة.
                  <br />
               </p>

               <h2 className="text-lg font-medium mt-6">
                  ماذا سأفعل في هذه الدراسة؟
               </h2>
               <p>
                  ستقرأ 100 كلمة والمطلوب أن تحدد ما إذا الكلمة هي كلمة عربية
                  فصيحة أم لا.
                  <br /> ستُكمل استبيان المعلومات الشخصية.
                  <br />
               </p>

               <h2 className="text-lg font-medium mt-6">
                  هل ستُحفظ بياناتي بسرية؟
               </h2>
               <p>
                  سيتم ترميز جميع الإجابات المقدمة في هذه التجربة لضمان{" "}
                  <b>سرية المشاركين</b>،<br /> ولن تُستخدم بيانات المشاركين إلا
                  لأغراض البحث العلمي.
                  <br />
               </p>
               <h2 className="text-lg font-medium mt-6">الباحثون</h2>

               <ul>
                  <li>
                     د. وفاء الجعيثن، <b>جامعة الملك سعود</b>
                  </li>
                  <li>
                     د. زها العنزي، <b>جامعة المجمعة</b>
                  </li>
                  <li>
                     د. آلاء الزهراني، <b>باحثة مستقلة</b>
                  </li>
               </ul>
            </div>
            <div className="space-y-4 mt-12">
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
         <CardFooter className="flex justify-end !mt-4">
            <Button
               className="!px-12"
               onClick={handleSubmitConsent}
               disabled={!allChecked || submitting}
            >
               {submitting ? "جاري الحفظ..." : "نعم، أوافق."}
            </Button>
         </CardFooter>
      </Card>
   );
}
