"use client";
import React from "react";
import { useSignIn } from "./hooks";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import GoogleIcon from "@/components/icons/GoogleIcon";
import { Button } from "@/components/ui/button";
import {
   FormField,
   FormItem,
   FormLabel,
   FormControl,
   FormMessage,
   Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signIn } from "next-auth/react";
import Link from "next/link";
import ProlificSignInButton from "./ProlificSignInButton ";

function LoginClient() {
   const { error, form, isLoading, onSubmit } = useSignIn();

   return (
      <div className="container flex h-full w-full flex-col items-center justify-center mt-12">
         <Card className="w-[400px]">
            <CardHeader>
               <CardTitle>تسجيل الدخول</CardTitle>
               <CardDescription>
                  أدخل بيانات اعتمادك للوصول إلى الاختبار
               </CardDescription>
            </CardHeader>
            <CardContent>
               <Form {...form}>
                  <form
                     onSubmit={form.handleSubmit(onSubmit)}
                     className="space-y-6"
                  >
                     <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>البريد الإلكتروني</FormLabel>
                              <FormControl>
                                 <Input
                                    {...field}
                                    type="email"
                                    autoComplete="email"
                                    placeholder="عنوان البريد الإلكتروني"
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
                     <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>كلمة المرور</FormLabel>
                              <FormControl>
                                 <Input
                                    {...field}
                                    type="password"
                                    autoComplete="current-password"
                                    placeholder="كلمة المرور"
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />

                     {error && (
                        <div className="text-red-500 text-sm text-center">
                           {error}
                        </div>
                     )}

                     <Button
                        type="submit"
                        className="w-full"
                        disabled={isLoading}
                     >
                        {isLoading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
                     </Button>
                  </form>
               </Form>
            </CardContent>
            <CardFooter className="flex flex-col gap-4">
               <div className="relative w-full">
                  <div className="absolute inset-0 flex items-center">
                     <div className="w-full border-t border-gray-300" />
                  </div>
                  <div className="relative flex justify-center text-sm">
                     <span className="px-2 bg-white text-gray-500">
                        أو تابع باستخدام
                     </span>
                  </div>
               </div>
               <div className=" w-full">
                  <Button
                     variant={`outline`}
                     type="button"
                     className="w-full inline-flex items-center gap-2"
                     disabled={isLoading}
                     onClick={(_) =>
                        signIn(`google`, {
                           redirect: true,
                        })
                     }
                  >
                     <GoogleIcon />
                     تسجيل الدخول باستخدام جوجل
                  </Button>
                  <ProlificSignInButton />
               </div>
               <div className="text-center text-sm text-gray-500 inline-flex items-center gap-1">
                  <span>ليس لديك حساب؟ </span>
                  <Link
                     href="/auth/register"
                     className="text-primary hover:underline"
                  >
                     إنشاء حساب جديد
                  </Link>
               </div>
            </CardFooter>
         </Card>
      </div>
   );
}

export default LoginClient;
