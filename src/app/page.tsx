"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function LandingPage() {
  const faqs = [
    {
      question: "ما هو هذا المشروع البحثي؟",
      answer:
        "يهدف هذا المشروع البحثي إلى فهم كيفية معالجة الناس وتمييزهم للكلمات العربية. مشاركتك ستساعدنا في فهم آليات معالجة اللغة بشكل أفضل.",
    },
    {
      question: "كم من الوقت سيستغرق؟",
      answer:
        "تستغرق العملية بأكملها حوالي 15-20 دقيقة، بما في ذلك جلسة التدريب والاختبار الرئيسي والاستبيان.",
    },
    {
      question: "ماذا يجب علي أن أفعل؟",
      answer:
        "سيتم عرض سلسلة من الكلمات وسيُطلب منك تحديد ما إذا كانت كل كلمة عربية حقيقية أم لا. يمكنك الإجابة باستخدام أسهم لوحة المفاتيح على الكمبيوتر أو الأزرار على الأجهزة المحمولة.",
    },
    {
      question: "هل بياناتي سرية؟",
      answer:
        "نعم، جميع البيانات التي يتم جمعها مجهولة المصدر وسيتم استخدامها لأغراض البحث فقط. يمكنك العثور على مزيد من التفاصيل في نموذج الموافقة قبل بدء الاختبار.",
    },
  ];

  return (
    <div className="py-10 w-full">
      <div className="space-y-2">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          مرحباً بك في اختبار الكلمات العربية
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="max-w-2xl mx-auto text-muted-foreground text-lg"
        >
          اختبر معرفتك باللغة العربية من خلال تحديد الكلمات الحقيقية
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex justify-center"
        >
          <Button asChild size="lg">
            <Link href="/auth/login">ابدأ الاختبار</Link>
          </Button>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-20 space-y-8"
      >
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="text-center text-3xl font-bold tracking-tight"
        >
          الأسئلة الشائعة
        </motion.h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            >
              <AccordionItem value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </motion.div>
    </div>
  );
}
