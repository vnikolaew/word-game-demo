"use client";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
   CardFooter,
} from "@/components/ui/card";
import {
   FormField,
   FormItem,
   FormLabel,
   FormControl,
   FormMessage,
   Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useSignUp } from "./hooks";
import Link from "next/link";

function RegisterClient() {
   const { error, form, isLoading, onSubmit } = useSignUp();

   return (
      <div className="container flex h-full w-full flex-col items-center justify-center">
         <Card className="w-[400px]">
            <CardHeader>
               <CardTitle>إنشاء حساب جديد</CardTitle>
               <CardDescription>أدخل بياناتك لإنشاء حساب جديد</CardDescription>
            </CardHeader>
            <CardContent>
               <Form {...form}>
                  <form
                     onSubmit={form.handleSubmit(onSubmit)}
                     className="space-y-6"
                  >
                     <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                           <FormItem>
                              <FormLabel>الاسم</FormLabel>
                              <FormControl>
                                 <Input
                                    {...field}
                                    type="text"
                                    placeholder="الاسم الكامل"
                                 />
                              </FormControl>
                              <FormMessage />
                           </FormItem>
                        )}
                     />
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
                                    autoComplete="new-password"
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
                        {isLoading ? "جاري إنشاء الحساب..." : "إنشاء حساب"}
                     </Button>
                  </form>
               </Form>
            </CardContent>
            <CardFooter>
               <div className="text-center text-sm text-gray-500">
                  لديك حساب بالفعل؟{" "}
                  <Link
                     href="/auth/login"
                     className="text-primary hover:underline"
                  >
                     تسجيل الدخول
                  </Link>
               </div>
            </CardFooter>
         </Card>
      </div>
   );
}

export default RegisterClient;
