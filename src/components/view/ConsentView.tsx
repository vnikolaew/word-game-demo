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
import Link from "next/link";
import { Check, Copy } from "lucide-react";

interface ConsentViewProps {
   onConsent: () => void;
}

const consentItems = [
   {
      id: "statement1",
      text: `أفهم أن المشاركة في هذه الدراسة طوعية.`,
      enText: `I understand that participation in this study is voluntary.`,
   },
   {
      id: "statement2",
      text: `أفهم أن بياناتي ستظل مجهولة المصدر ولن تُستخدم إلا لأغراض البحث العلمي.`,
      enText: `I understand that my data will remain anonymous and will only be used for scientific research purposes.`,
   },
   {
      id: "statement3",
      text: `أوافق على المشاركة في هذه الدراسة.`,
      enText: `I agree to participate in this study.`,
   },
];

export function ConsentView({ onConsent }: ConsentViewProps) {
   const [checkedItems, setCheckedItems] = useState<string[]>([]);
   const [submitting, setSubmitting] = useState(false);
   const [copied, setCopied] = useState(false);

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
             <CardTitle>
                RESEARCH INSTRUCTIONS AND CONSENT
                <br/>
                التعليمات والموافقة على البحث
             </CardTitle>
             <CardDescription>
             </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8 mt-4">
             {" "}
             <div className="prose prose-sm">
                <h2 className="text-lg font-medium">
                   ARABIC WORD EVALUATION STUDY
                   <br/>
                   دراسة تقييم الكلمات العربية
                </h2>
                <p dir={`ltr`}>
                   If you are a learner of Arabic as a second language and are 18 years old or older, we welcome your
                   participation in this study. Please read the following information carefully and contact the
                   researchers if any information is unclear before deciding to participate.Read the instructions
                   carefully then agree to them to continue.
                   <br/>
                   <span dir={`rtl`}>
                   إذا كنت تتعلم اللغة العربية لغة ثانية وعمرك 18 عامًا أو أكثر، فنرحب بمشاركتك في هذه الدراسة. يرجى
                   قراءة المعلومات التالية بعناية. والتواصل مع الباحثين إذا كان هناك أي معلومات غير واضحة قبل اتخاذ قرار
                   المشاركة.
                   </span>
                </p>

                <h2 className="text-lg font-medium mt-6">
                   <span dir={`ltr`}>

                   WHAT IS THE PURPOSE OF THIS STUDY?
                   </span>

                   <br/>
                   <span dir={`rtl`}>
                   ما هو هدف هذه الدراسة؟
                   </span>
                </h2>
                <p>
                   <span dir={`ltr`}>
                      The purpose of this study is to measure Arabic speakers' knowledge of Modern Standard Arabic words.
                   </span>
                   <br/>
                   <span dir={`rtl`}>
                   الهدف من هذه الدراسة هو قياس معرفة متحدثي اللغة العربية بالكلمات العربية الفصيحة.
                   </span>
                </p>

                <h2 className="text-lg font-medium mt-6">
                   <span dir={`ltr`}>
                   DO I HAVE TO PARTICIPATE?
                   </span>
                   <br/>
                   <span dir={`rtl`}>
                   هل يجب أن أشارك؟
                   </span>
                </h2>
                <p>
               <span dir={`ltr`}>

                   Your participation in the study is completely voluntary, and you can withdraw from it at any time.
               </span>
                   <br/>
                   <span dir={`rtl`}>
                   مشاركتك في الدراسة طوعية تمامًا، ويمكنك الانسحاب منها في أي وقت.
                   </span>
                </p>

                <h2 className="text-lg font-medium mt-6">
                   <span dir={`ltr`}>
                   HOW LONG IS THE STUDY?
                   </span>
                   <br/>
                   <span dir={`rtl`}>
                   كم مدة الدراسة؟
               </span>
                </h2>
                <p>
                   <span dir={`ltr`}>
                   15-20 minutes.
                   </span>
                   <br/>
                   <span dir={`rtl`}>
                   15-20 دقيقة.
                   </span>
                </p>

                <h2 className="text-lg font-medium mt-6">
                   <span dir={`ltr`}>
                   WHAT WILL I DO IN THIS STUDY?
                   </span>
                   <br/>
                   <span dir={`rtl`}>
                   ماذا سأفعل في هذه الدراسة؟
                   </span>
                </h2>
                <p>
                   <span dir={`ltr`}>
                   - You will complete a short test that measures your Arabic proficiency.
                   </span>
                   <br/>
                   <span dir={`rtl`}>
                   سُتكمل اختباراً قصيراً يقيس كفاءتك في اللغة العربية
                   </span>
                   <br/>
                   <span dir={`ltr`}>
                   - You will read 100 words and are required to determine whether each word is a Modern Standard Arabic
                   word or not.
                   </span>
                   <br/>
                   <span dir={`rtl`}>
                   ستقرأ 100 كلمة والمطلوب أن تحدد ما إذا الكلمة هي كلمة عربية فصيحة أم لا
                   </span>
                   <br/>
                   <span dir={`ltr`}>
                   - You will complete a demographic questionnaire.
                   </span>
                   <br/>
                   <span dir={`rtl`}>
                   ستُكمل استبيان المعلومات الشخصية
                   </span>
                </p>

                <h2 className="text-lg font-medium mt-6">
              <span dir={`ltr`}>
                   WILL MY DATA BE KEPT CONFIDENTIAL?
              </span>
                   <br/>
                   <span dir={`rtl`}>
                   هل ستُحفظ بياناتي بسرية؟
                   </span>
                </h2>
                <p>
                   <span dir={`ltr`}>
                   All responses provided in this experiment will be coded to ensure participant confidentiality, and
                   participant data will only be used for scientific research purposes.
                   </span>
                   <br/>
                   <span dir={`rtl`}>
                   سيتم ترميز جميع الإجابات المقدمة في هذه التجربة لضمان سرية المشاركين، ولن تُستخدم بيانات المشاركين
                   إلا لأغراض البحث العلمي.
                   </span>
                </p>
             </div>
             <div>
                <h2 className="text-lg font-medium mt-6">
                   <span dir={`ltr`}>
                   RESEARCH APPROVAL
                   </span>
                   <br/>
                   <span dir={`rtl`}>
                   موافقة البحث
                   </span>

                </h2>
                <p dir={`ltr`}>
                   <span dir={`ltr`}>
                   Scientific Research Ethics Committee Approval Number:
                   </span>
                   <span className="inline-flex items-center gap-2">
                     <b>KSU-HE-25-495</b>{" "}
                      <span title={copied ? `تم النسخ!` : `ينسخ`}>
                        {copied ? (
                            <Check className="" size={14}/>
                        ) : (
                            <Copy
                                onClick={async () => {
                                   await window.navigator.clipboard.writeText(
                                       `KSU-HE-25-495`
                                   );
                                   setCopied(true);
                                   setTimeout(() => {
                                      setCopied(false);
                                   }, 3000);
                                }}
                                className="cursor-pointer"
                                size={14}
                            />
                        )}
                     </span>
                  </span>
                   <br/>
                   This study has been approved by the Scientific Research Ethics Committee at King Saud University.
                </p>
                <p>
                   رقم موافقة لجنة أخلاقيات البحث العلمي:{" "}
                   <span className="inline-flex items-center gap-2">
                     <b>KSU-HE-25-495</b>{" "}
                      <span title={copied ? `تم النسخ!` : `ينسخ`}>
                        {copied ? (
                            <Check className="" size={14}/>
                        ) : (
                            <Copy
                                onClick={async () => {
                                   await window.navigator.clipboard.writeText(
                                       `KSU-HE-25-495`
                                   );
                                   setCopied(true);
                                   setTimeout(() => {
                                      setCopied(false);
                                   }, 3000);
                                }}
                                className="cursor-pointer"
                                size={14}
                            />
                        )}
                     </span>
                  </span>
                   <br/>
                   تمت الموافقة على هذه الدراسة من قبل لجنة أخلاقيات البحث العلمي
                   بجامعة الملك سعود.
                </p>
                <h2 className="text-lg font-medium mt-6">
                   CONTACT US
                   <br/>
                   تواصل معنا

                </h2>
                <p>
                   For any inquiries about the study, please feel free to contact us via email:{` `}
                   <Link
                       className={`text-lg text-blue-600 hover:text-blue-800 transition-colors font-semibold mx-2`}
                       href={`mailto:alzahrani.alaaa@gmail.com`}
                   >
                      alzahrani.alaaa@gmail.com
                   </Link>
                   <br/>
                   {` `}لأي استفسارات حول الدراسة، يسرنا تواصلك معنا عبر البريد الإلكتروني:
                   <Link
                       className={`text-lg text-blue-600 hover:text-blue-800 transition-colors font-semibold mx-2`}
                       href={`mailto:alzahrani.alaaa@gmail.com`}
                   >
                      alzahrani.alaaa@gmail.com
                   </Link>
                </p>
                <div className="space-y-6 mt-12">
                   {consentItems.map((item) => (
                       <div key={item.id} className="flex items-center space-x-3">
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
                          <div className={`flex flex-col items-start gap-1`}>
                             <label
                                 dir="ltr"
                                 htmlFor={item.id}
                                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             >
                                {item.enText}
                             </label>
                             <label
                                 htmlFor={item.id}
                                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                             >
                                {item.text}
                             </label>
                          </div>
                       </div>
                   ))}
                </div>
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
