"use client";

import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";

// Components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";
import {
   AlertDialog,
   AlertDialogAction,
   AlertDialogCancel,
   AlertDialogContent,
   AlertDialogDescription,
   AlertDialogFooter,
   AlertDialogHeader,
   AlertDialogTitle,
   AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const formatCompletionTime = (duration: number | undefined | null): string => {
   if (typeof duration !== "number" || isNaN(duration)) {
      return "0s";
   }
   return `${Math.round(duration / 1000)} ثانية ${duration % 1000} مللي ثانية`;
};

// Icons
import { Trash2, LogOut } from "lucide-react";

// Types
import { UserProfile as UserProfileType } from "@/types";
import { NATIONALITY_OPTIONS } from "./Survey/Nationality";
import { useProfile } from "@/hooks/useProfile";

const AccountManagement = ({}) => {
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   const handleLogout = () => {
      signOut({ callbackUrl: "/" });
   };

   const deleteUserProfile = async () => {
      try {
         setIsLoading(true);
         setError(null);
         const response = await fetch("/api/profile", {
            method: "DELETE",
         });
         if (!response.ok) throw new Error("Failed to delete account");
         return true;
      } catch (err) {
         setError(
            err instanceof Error ? err.message : "Failed to delete account"
         );
         return false;
      } finally {
         setIsLoading(false);
      }
   };

   const handleDeleteAccount = async () => {
      try {
         const success = await deleteUserProfile();
         if (success) {
            await signOut({ callbackUrl: "/" });
         }
      } catch (err) {
         console.error("Failed to delete account:", err);
      }
   };

   return (
      <Card className="p-6">
         <h2 className="text-xl font-semibold mb-4">إدارة الحساب</h2>
         <div className="flex flex-col sm:flex-row gap-4">
            <Button
               variant="outline"
               onClick={handleLogout}
               className="flex items-center gap-2 !cursor-pointer"
            >
               <LogOut className="h-4 w-4" />
               تسجيل الخروج
            </Button>

            <AlertDialog>
               <AlertDialogTrigger asChild>
                  <Button
                     variant="destructive"
                     className="flex items-center gap-2 !cursor-pointer"
                  >
                     <Trash2 className="h-4 w-4" />
                     حذف الحساب
                  </Button>
               </AlertDialogTrigger>
               <AlertDialogContent>
                  <AlertDialogHeader>
                     <AlertDialogTitle>هل أنت متأكد تماماً؟</AlertDialogTitle>
                     <AlertDialogDescription>
                        لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف حسابك
                        بشكل دائم وإزالة جميع بياناتك من خوادمنا.
                     </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                     <AlertDialogCancel>إلغاء</AlertDialogCancel>
                     <AlertDialogAction
                        onClick={handleDeleteAccount}
                        className="bg-red-600 hover:bg-red-700"
                     >
                        حذف الحساب
                     </AlertDialogAction>
                  </AlertDialogFooter>
               </AlertDialogContent>
            </AlertDialog>
         </div>
      </Card>
   );
};

const QuizHistory = ({
   quizAttempts,
}: {
   quizAttempts: UserProfileType["quizAttempts"];
}) => (
   <Card className="mb-8 p-6">
      <h2 className="text-xl font-semibold mb-4">سجل الاختبارات</h2>
      <div className="space-y-4">
         <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
            <div className="flex items-center gap-2">
               <p className="text-sm text-gray-500">
                  إجمالي الاختبارات المكتملة:
               </p>
               <p className="font-medium">{quizAttempts.length || 0}</p>
            </div>
            <div className="flex items-center gap-2">
               <p className="text-sm text-gray-500">المحاولات المتبقية:</p>
               <p className="font-medium">{200 - (quizAttempts.length || 0)}</p>
            </div>
         </div>

         {quizAttempts.length > 0 ? (
            <div className="space-y-4">
               {quizAttempts.map((attempt) => (
                  <div key={attempt.id} className="border rounded-lg p-4">
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                           <p className="text-sm text-gray-500">الدرجة</p>
                           <p className="font-medium">{attempt.score}%</p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              الكلمات الصحيحة
                           </p>
                           <p className="font-medium">
                              {attempt.correctWords + attempt.correctNonWords}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">وقت الإكمال</p>
                           <span className="font-medium">
                              {formatCompletionTime(attempt.totalQuizDuration)}
                           </span>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">التاريخ</p>
                           <time className="font-medium">
                              {new Date(attempt.createdAt).toLocaleDateString()}
                           </time>
                        </div>
                     </div>
                  </div>
               ))}
            </div>
         ) : (
            <p className="text-gray-500">لم يتم إكمال أي اختبارات بعد</p>
         )}
      </div>
   </Card>
);

const DemographicInformation = ({
   info,
}: {
   info: NonNullable<UserProfileType["demographicSurvey"]>;
}) => {
   const gender =
      info.gender === `male`
         ? `ذكر`
         : info.gender === `female`
           ? `أنثى`
           : `أفضل عدم قول ذلك`;

   return (
      <Card className="mb-8 p-6">
         <h2 className="text-xl font-semibold mb-4">معلومات أساسية</h2>
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Personal Information */}
            <div className="col-span-2">
               <h3 className="text-lg font-medium mb-2">معلومات شخصية</h3>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                     <p className="text-sm text-gray-500">عمر</p>
                     <p className="font-medium">{info.age}</p>
                  </div>
                  <div>
                     <p className="text-sm text-gray-500">جنس</p>
                     <p className="font-medium">{gender}</p>
                  </div>
                  <div>
                     <p className="text-sm text-gray-500">جنسية</p>
                     <p className="font-medium">
                        {
                           NATIONALITY_OPTIONS.find(
                              (o) => o.value === info.nationality
                           )?.label
                        }
                        {info.otherNationality && ` (${info.otherNationality})`}
                     </p>
                  </div>
               </div>
            </div>

            {/* Language Background */}

            {/* Education History */}

            {/* Language Usage */}

            {/* Medical Information */}
         </div>
      </Card>
   );
};

const PersonalInfo = ({ profile }: { profile: UserProfileType }) => (
   <Card className="mb-8 p-6">
      <h2 className="text-xl font-semibold mb-4">معلومات شخصية</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
         <div>
            <p className="text-sm text-gray-500">اسم</p>
            <p className="font-medium">{profile.name || "غير متوفر"}</p>
         </div>
         <div>
            <p className="text-sm text-gray-500">بريد إلكتروني</p>
            <p className="font-medium">{profile.email}</p>
         </div>
      </div>
   </Card>
);

export default function UserProfile() {
   const { error, getUserProfile, isLoading, profile } = useProfile();

   if (isLoading) {
      return (
         <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
            <Spinner size="sm" />
            <p className="text-sm text-gray-500">جاري تحميل الملف الشخصي...</p>
         </div>
      );
   }

   if (error) {
      return (
         <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={getUserProfile}>حاول ثانية</Button>
         </div>
      );
   }

   if (!profile) {
      return null;
   }

   return (
      <div className="container mx-auto py-8 px-4">
         <h1 className="text-3xl font-bold mb-8">حساب تعريفي</h1>

         <PersonalInfo profile={profile} />

         {/* Demographic Information */}
         {profile.demographicSurvey && (
            <DemographicInformation info={profile.demographicSurvey} />
         )}

         {/* Quiz History */}
         <QuizHistory quizAttempts={profile.quizAttempts} />

         {/* Account Management */}
         <AccountManagement />
      </div>
   );
}
