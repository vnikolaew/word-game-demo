"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// components

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
   Card,
   CardContent,
   CardDescription,
   CardFooter,
   CardHeader,
   CardTitle,
} from "@/components/ui/card";
import {
   Form,
   FormControl,
   FormField,
   FormItem,
   FormLabel,
   FormMessage,
} from "@/components/ui/form";
import GoogleIcon from "@/components/icons/GoogleIcon";

const formSchema = z.object({
   email: z.string().email("عنوان البريد الإلكتروني غير صالح"),
   password: z.string().min(6, "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل"),
});

type FormValues = z.infer<typeof formSchema>;

export default function LoginPage() {
   const router = useRouter();
   const [error, setError] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState(false);

   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         email: "",
         password: "",
      },
   });

   const onSubmit = async (values: FormValues) => {
      setIsLoading(true);
      setError(null);

      try {
         const result = await signIn("credentials", {
            email: values.email,
            password: values.password,
            redirect: false,
         });

         if (result?.error) {
            setError("البريد الإلكتروني أو كلمة المرور غير صحيحة");
            return;
         }

         router.push("/quiz");
         router.refresh();
      } catch (error) {
         setError("حدث خطأ. يرجى المحاولة مرة أخرى.");
      } finally {
         setIsLoading(false);
      }
   };

   return (
      <div className="container flex h-full w-full flex-col items-center justify-center">
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
                     className="w-full"
                     disabled={isLoading}
                     onClick={(_) =>
                        signIn(`google`, {
                           redirect: true,
                        })
                     }
                  >
                     <GoogleIcon />
                     Login with Google
                  </Button>
               </div>
               <div className="text-center text-sm text-gray-500">
                  ليس لديك حساب؟{" "}
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
