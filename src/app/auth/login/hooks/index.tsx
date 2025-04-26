"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
   email: z.string().email("عنوان البريد الإلكتروني غير صالح"),
   password: z.string().min(6, "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل"),
});

type FormValues = z.infer<typeof formSchema>;

export function useSignIn() {
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
   return { onSubmit, form, isLoading, error };
}
