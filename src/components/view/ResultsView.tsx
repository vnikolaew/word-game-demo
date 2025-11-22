"use client";

// Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";

import {
   TwitterShareButton,
   WhatsappShareButton,
   TwitterIcon,
   WhatsappIcon,
} from "react-share";
import { motion } from "framer-motion";
import { useQuizResult } from "@/hooks/useQuizResult";
import { useRouter } from "next/navigation";
import { showHeaderAndFooter } from "@/lib/utils";
import { Fragment, useEffect, useMemo, useState } from "react";
import { Clipboard, ClipboardCheck } from "lucide-react";
import { Input } from "../ui/input";

export interface ProlificCodeProps {
   score: number;
}

const PROLIFIC_BASE_URL = `https://app.prolific.com/submissions/complete`;

const PROLIFIC_URL_80_AND_BELOW_CODE =
   process.env.NEXT_PUBLIC_PROLIFIC_URL_80_AND_BELOW_CODE ?? `C15I0O1U`;

const PROLIFIC_URL_80_AND_ABOVE_CODE =
   process.env.NEXT_PUBLIC_PROLIFIC_URL_80_AND_ABOVE_CODE ?? `CLMSPQ2F`;

const ProlificCode = ({ score }: ProlificCodeProps) => {
   const [copied, setCopied] = useState(false);

   const prolificUrl = useMemo(
      () =>
         `${PROLIFIC_BASE_URL}?cc=${score < 80 ? PROLIFIC_URL_80_AND_BELOW_CODE : score >= 80 ? PROLIFIC_URL_80_AND_ABOVE_CODE : ``}`,
      [score]
   );
   const textToBeCopied = useMemo(() => prolificUrl, [prolificUrl]);

   async function handleCopy() {
      await navigator.clipboard.writeText(textToBeCopied);

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
   }

   return (
      <div
         className={`w-full text-center flex flex-col items-center gap-2 !mb-12 `}
      >
         <label
            htmlFor={`prolificCode`}
            className={`text-3xl font-semibold drop-shadow-sm`}
         >
            Prolific completion code
         </label>
         <div className={`w-full flex items-center justify-center mt-4`}>
            <div
               className={`flex flex-col items-center justify-center !w-full md:!w-fit mx-auto sm:!flex-row gap-2 sm:!gap-0`}
            >
               <Input
                  readOnly
                  name={`prolificCode`}
                  id={`prolificCode`}
                  value={prolificUrl}
                  title={prolificUrl}
                  type="text"
                  placeholder={`اكتب هنا`}
                  className="text-base input-primary input-md input md:!text-base input-bordered !bg-white  !pr-0 !mr-0 !w-[400px] sm:!w-[500px] text-primary !mx-auto !px-2"
               />
               <div className={`ml-2 !h-full !w-fit`}>
                  <Button
                     disabled={copied}
                     onClick={handleCopy}
                     title={
                        copied ? (`تم نسخها` as string) : (`ينسخ` as string)
                     }
                     className="btn btn-primary !text-white !bg-primary btn-md !h-full !rounded-md !px-8 disabled:!opacity-90 !min-w-[80px] md:!min-w-[120px] !text-center md:!text-sm disabled:!cursor-none inline-flex items-center gap-2 hover:!opacity-80 duration-200 transition-all !py-2.5"
                  >
                     {copied ? (
                        <Fragment>
                           <ClipboardCheck size={14} />
                           <span
                              className={`hidden md:block`}
                           >{`تم نسخها`}</span>
                        </Fragment>
                     ) : (
                        <Fragment>
                           <Clipboard size={14} />
                           <span className={`hidden md:block`}>{`ينسخ`}</span>
                        </Fragment>
                     )}
                  </Button>
               </div>
            </div>
         </div>
      </div>
   );
};

interface ResultsViewProps {
   hasProlificEmail: boolean;
}

export default function ResultsView({
   hasProlificEmail = false,
}: ResultsViewProps) {
   const {
      error,
      getFeedbackMessage,
      handleShare,
      loading,
      results,
      shareUrl,
   } = useQuizResult();

   const router = useRouter();

   const handleResultsComplete = () => {
      router.push("/");
   };

   const handleRetake = () => {
      router.push(`/quiz?screen=main`);
   };

   useEffect(() => {
      document.body.classList.add(`!bg-transparent`);
      showHeaderAndFooter();
   }, []);

   if (loading || !results) {
      return (
         <div className="flex flex-col gap-2 items-center justify-center min-h-[50vh]">
            <Spinner size="sm" />
            <p className="text-sm text-gray-500">
               يرجى الانتظار بينما نقوم بتحميل النتائج ...
            </p>
         </div>
      );
   }

   if (error) {
      return (
         <Card>
            <CardContent className="text-center py-6">
               <div className="text-red-600 mb-4">{error}</div>
               <Button onClick={() => window.location.reload()}>
                  حاول مرة أخرى
               </Button>
            </CardContent>
         </Card>
      );
   }

   const shareTextAr = `حصلت على درجة ${results.score} من ${100} في اختبار حروفنا! جرب الاختبار #اختبار_حروفنا #الكلمات_العربية`;

   return (
      <Card>
         <CardHeader>
            <CardTitle>نتيجة الاختبار</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
            <div className="text-center">
               <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.0 }}
                  className="text-sm text-gray-500"
               >
                  الدرجة النهائية:
               </motion.p>
               <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.0 }}
                  className="mt-1 text-4xl font-extrabold text-indigo-600"
               >
                  {results.score?.toFixed(2)}%
               </motion.p>
               <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-2 text-lg text-gray-700"
               >
                  {getFeedbackMessage(results.score)}
               </motion.p>
            </div>
            {hasProlificEmail && <ProlificCode score={results.score} />}

            <div className="text-center">
               <p className="text-sm text-gray-500">شارك نتيجتك مع الآخرين!</p>
               <div className="mt-4 flex justify-center space-x-4">
                  <TwitterShareButton url={shareUrl} title={shareTextAr}>
                     <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={shareUrl} title={shareTextAr}>
                     <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
               </div>
               <Button title={`مشاركة نتيجة الاختبار`} className="mt-4" onClick={handleShare}>
                  مشاركة
               </Button>
            </div>

            <div className="flex justify-center gap-4 mt-8">
               <Button title={`إعادة الاختبار`} onClick={handleRetake} variant="outline">
                  إعادة الاختبار
               </Button>
               <Button title={`العودة إلى المنزل`} onClick={handleResultsComplete}>
                  العودة للصفحة الرئيسية
               </Button>
            </div>
         </CardContent>
      </Card>
   );
}
