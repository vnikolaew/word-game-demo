"use client";

import { useState, useEffect } from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

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

// Icons
import { Trash2, LogOut } from "lucide-react";

// Types
import { UserProfile as UserProfileType } from "@/types";

export default function UserProfile() {
   const router = useRouter();
   const [profile, setProfile] = useState<UserProfileType | null>(null);
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState<string | null>(null);

   // Add helper function for formatting completion time
   const formatCompletionTime = (
      duration: number | undefined | null
   ): string => {
      if (typeof duration !== "number" || isNaN(duration)) {
         return "0s";
      }
      return `${Math.round(duration / 1000)}s`;
   };

   const getUserProfile = async () => {
      try {
         setIsLoading(true);
         setError(null);
         const response = await fetch("/api/profile");
         if (!response.ok) {
            throw new Error("Failed to fetch profile");
         }
         const data = await response.json();
         setProfile(data);
         return data;
      } catch (err) {
         setError(err instanceof Error ? err.message : "An error occurred");
         return null;
      } finally {
         setIsLoading(false);
      }
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

   // Fetch profile on component mount
   useEffect(() => {
      let mounted = true;

      const fetchProfile = async () => {
         if (mounted && !profile) {
            await getUserProfile();
         }
      };

      fetchProfile();

      return () => {
         mounted = false;
      };
   }, [profile]);

   // Delete account
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

   // Handle logout
   const handleLogout = () => {
      signOut({ callbackUrl: "/" });
   };

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

         {/* Personal Information */}
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

         {/* Demographic Information */}
         {profile.demographicSurvey && (
            <Card className="mb-8 p-6">
               <h2 className="text-xl font-semibold mb-4">معلومات أساسية</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Personal Information */}
                  <div className="col-span-2">
                     <h3 className="text-lg font-medium mb-2">معلومات شخصية</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <p className="text-sm text-gray-500">عمر</p>
                           <p className="font-medium">
                              {profile.demographicSurvey.age}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">جنس</p>
                           <p className="font-medium">
                              {profile.demographicSurvey.gender}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">جنسية</p>
                           <p className="font-medium">
                              {profile.demographicSurvey.nationality}
                              {profile.demographicSurvey.otherNationality &&
                                 ` (${profile.demographicSurvey.otherNationality})`}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              محل الإقامة الحالي
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.residence}
                              {profile.demographicSurvey.otherResidence &&
                                 ` (${profile.demographicSurvey.otherResidence})`}
                           </p>
                        </div>

                        <div>
                           <p className="text-sm text-gray-500">جامعة</p>
                           <p className="font-medium">
                              {profile.demographicSurvey.university ??
                                 `غير محدد`}
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Language Background */}
                  <div className="col-span-2">
                     <h3 className="text-lg font-medium mb-2">
                        الخلفية اللغوية
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <p className="text-sm text-gray-500">اللغة الأم</p>
                           <p className="font-medium">
                              {profile.demographicSurvey.nativeLanguage}
                              {profile.demographicSurvey.otherNativeLanguage &&
                                 ` (${profile.demographicSurvey.otherNativeLanguage})`}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">اكتساب اللغة</p>
                           <p className="font-medium">
                              {profile.demographicSurvey.languageAcquisition}
                              {profile.demographicSurvey
                                 .otherAcquisitionLanguage &&
                                 ` (${profile.demographicSurvey.otherAcquisitionLanguage})`}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">لغة العائلة</p>
                           <p className="font-medium">
                              {profile.demographicSurvey.familyLanguage}
                              {profile.demographicSurvey.otherFamilyLanguage &&
                                 ` (${profile.demographicSurvey.otherFamilyLanguage})`}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              اللهجة العربية
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.arabicDialect}
                           </p>
                        </div>
                        <div className="col-span-2">
                           <p className="text-sm text-gray-500">
                              اللغات المعروفة
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.languages}
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Education History */}
                  <div className="col-span-2">
                     <h3 className="text-lg font-medium mb-2">تاريخ التعليم</h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <p className="text-sm text-gray-500">
                              أعلى مستوى تعليمي
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.highestEducation}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              لغة رياض الأطفال
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.kindergartenLanguage}
                              {profile.demographicSurvey
                                 .otherKindergartenLanguage &&
                                 ` (${profile.demographicSurvey.otherKindergartenLanguage})`}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              لغة المدرسة الابتدائية
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.primaryLanguage}
                              {profile.demographicSurvey.otherPrimaryLanguage &&
                                 ` (${profile.demographicSurvey.otherPrimaryLanguage})`}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              لغة المدرسة المتوسطة
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.middleLanguage}
                              {profile.demographicSurvey.otherMiddleLanguage &&
                                 ` (${profile.demographicSurvey.otherMiddleLanguage})`}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              لغة المدرسة الثانوية
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.highSchoolLanguage}
                              {profile.demographicSurvey
                                 .otherHighSchoolLanguage &&
                                 ` (${profile.demographicSurvey.otherHighSchoolLanguage})`}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">لغة الجامعة</p>
                           <p className="font-medium">
                              {profile.demographicSurvey.universityLanguage}
                              {profile.demographicSurvey
                                 .otherUniversityLanguage &&
                                 ` (${profile.demographicSurvey.otherUniversityLanguage})`}
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Language Usage */}
                  <div className="col-span-2">
                     <h3 className="text-lg font-medium mb-2">
                        الاستخدام اليومي للغة
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <p className="text-sm text-gray-500">
                              ساعات القراءة
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.readingHours}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              ساعات الاستماع
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.listeningHours}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              ساعات الكتابة
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.writingHours}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">ساعات التحدث</p>
                           <p className="font-medium">
                              {profile.demographicSurvey.speakingHours}
                           </p>
                        </div>
                     </div>
                  </div>

                  {/* Medical Information */}
                  <div className="col-span-2">
                     <h3 className="text-lg font-medium mb-2">
                        معلومات إضافية
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                           <p className="text-sm text-gray-500">
                              اضطراب الانتباه
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.attentionDisorder}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              اضطراب القراءة
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.readingDisorder}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">النظر</p>
                           <p className="font-medium">
                              {profile.demographicSurvey.vision}
                           </p>
                        </div>
                        <div>
                           <p className="text-sm text-gray-500">
                              اليد المسيطرة
                           </p>
                           <p className="font-medium">
                              {profile.demographicSurvey.handedness}
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </Card>
         )}

         {/* Quiz History */}
         <Card className="mb-8 p-6">
            <h2 className="text-xl font-semibold mb-4">سجل الاختبارات</h2>
            <div className="space-y-4">
               <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 mb-4">
                  <div className="flex items-center gap-2">
                     <p className="text-sm text-gray-500">
                        إجمالي الاختبارات المكتملة:
                     </p>
                     <p className="font-medium">
                        {profile?.quizAttempts.length || 0}
                     </p>
                  </div>
                  <div className="flex items-center gap-2">
                     <p className="text-sm text-gray-500">
                        المحاولات المتبقية:
                     </p>
                     <p className="font-medium">
                        {200 - (profile?.quizAttempts.length || 0)}
                     </p>
                  </div>
               </div>

               {profile?.quizAttempts.length > 0 ? (
                  <div className="space-y-4">
                     {profile.quizAttempts.map((attempt) => (
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
                                    {attempt.correctWords +
                                       attempt.correctNonWords}
                                 </p>
                              </div>
                              <div>
                                 <p className="text-sm text-gray-500">
                                    وقت الإكمال
                                 </p>
                                 <p className="font-medium">
                                    {formatCompletionTime(
                                       attempt.totalQuizDuration
                                    )}
                                 </p>
                              </div>
                              <div>
                                 <p className="text-sm text-gray-500">
                                    التاريخ
                                 </p>
                                 <p className="font-medium">
                                    {new Date(
                                       attempt.createdAt
                                    ).toLocaleDateString()}
                                 </p>
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

         {/* Account Management */}
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
                        <AlertDialogTitle>
                           هل أنت متأكد تماماً؟
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                           لا يمكن التراجع عن هذا الإجراء. سيؤدي هذا إلى حذف
                           حسابك بشكل دائم وإزالة جميع بياناتك من خوادمنا.
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
      </div>
   );
}
