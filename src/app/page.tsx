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
      question: "ما هو هدف هذا الاختبار؟",
      answer:
        "يهدف الاختبار إلى جمع بيانات لغوية عن معرفتنا بمفردات اللغة العربية الفصحى، مما يساهم في فهم أعمق للغتنا",
    },
    {
      question: "كم سيستغرق هذا الاختبار؟",
      answer: "لن تستغرق الإجابة أكثر من 10 دقائق من وقتك",
    },
    {
      question: "من يمكنه المشاركة؟",
      answer:
        "يمكن لأي شخص يبلغ من العمر 18 عامًا أو أكثر المشاركة، شرط أن يكون متحدثاً للغة العربية. نرحب بمشاركتكم! 👥",
    },
    {
      question: "هل يمكن لمتعلمي العربية كلغة ثانية المشاركة؟",
      answer: "نعم نسعد بمشاركتهم معنا.",
    },
    {
      question: "كيف يتم حماية خصوصية المشاركين؟",
      answer:
        "نولي اهتمامًا كبيرًا بخصوصية المشاركين. سيتم تشفير جميع البيانات الشخصية وحمايتها، ولن تُستخدم إلا لأغراض البحث العلمي.",
    },
    {
      question: "هل يمكن الانسحاب من الاختبار؟",
      answer:
        "نعم، يمكنك الانسحاب في أي وقت تريده دون أي عواقب. نحن نحترم قرارك ونقدّر مشاركتك مهما كانت مدتها.",
    },
  ];

  const benefits = ["⚡ سهلة وسريعة"];

  return (
    <div className="py-10 w-full">
      <div className="space-y-2 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          حروفنا
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex flex-col items-center gap-4 my-8"
        >
          <p className="text-lg font-medium">
            مهمتك بسيطة: حدد إذا كانت الكلمات موجودة في اللغة العربية أم لا
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                className="bg-secondary/50 px-4 py-2 rounded-lg"
              >
                {benefit}
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="flex justify-center"
        >
          <Button asChild size="lg">
            <Link href="/auth/login">ابدأ الآن</Link>
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
