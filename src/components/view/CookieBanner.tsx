"use client";

import { Button } from "@/components/ui/button";
import {
   Card,
   CardContent,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import { Cookie } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { UserConsent } from "@prisma/client";

const CONSENT_VERSION = `cookie_consent_1.0`;

export default function CookieBanner({ consents }: { consents: UserConsent[] }) {
   const [isVisible, setIsVisible] = useState(false);
   const [loading, setLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const handleConsent = useCallback(async () => {
      try {
         setLoading(true);
         setError(null);

         // Save consent to database or perform any other necessary actions
         await fetch("/api/consent/cookie", {
            method: "POST",
            body: JSON.stringify({
               consentVersion: CONSENT_VERSION,
            }),
         });

      } catch (error) {
         setError("حدث خطأ أثناء حفظ الموافقة");
         console.error("Consent error:", error);
      } finally {
         setLoading(false);
      }
   }, []);

   useEffect(() => {
      // Check if consent is already given
      const consent = consents?.find(c => c.consentVersion === CONSENT_VERSION)
      if (!consent) {
         setIsVisible(true);
      }
   }, [consents]);

   const handleAccept = () => {
      // Save consent to localStorage
      localStorage.setItem("word_game_cookie_consent", "true");
      // Set a cookie as well
      document.cookie = "word_game_cookie_consent=true; path=/; max-age=31536000";

      handleConsent()
          .then(_ => {
             setIsVisible(false);
          })
   };

   const handleReject = () => {
      // Save rejection to localStorage
      localStorage.setItem("word_game_cookie_consent", "false");
      // Set a cookie as well
      document.cookie = "word_game_cookie_consent=false; path=/; max-age=31536000";
      setIsVisible(false);
   };

   if (!isVisible) return null;

   return (
       <div
           className="fixed bottom-4 right-4 z-50 max-w-sm w-full animate-in slide-in-from-bottom-10 fade-in duration-500">
          <Card className="shadow-lg border-primary/20 !gap-1 !py-2">
             <CardHeader className="p-1 px-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                   <Cookie size={24} className="text-primary"/>
                   ملفات تعريف الارتباط
                </CardTitle>
             </CardHeader>
             <CardContent className="p-4 pt-0 pb-2">
                <p className="text-sm text-muted-foreground leading-relaxed">
                   نحن نستخدم ملفات تعريف الارتباط لتحسين تجربتك على موقعنا.
                </p>
             </CardContent>
             <CardFooter className="p-4 pt-0 flex justify-end gap-2">
                <Button
                    onClick={handleReject}
                    variant="outline"
                    size="sm"
                    className="w-full sm:w-auto !px-8 disabled:!opacity-70"
                    disabled={loading}
                >
                   رفض
                </Button>
                <Button
                    onClick={handleAccept}
                    size="sm"
                    className="w-full sm:w-auto !px-8 disabled:!opacity-70"
                    disabled={loading}
                >
                   {loading ? "جاري الحفظ..." : "أوافق"}
                </Button>
             </CardFooter>
          </Card>
       </div>
   );
}
