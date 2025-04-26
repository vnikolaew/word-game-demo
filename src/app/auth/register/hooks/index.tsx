import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
   name: z.string().min(2, "يجب أن يتكون الاسم من حرفين على الأقل"),
   email: z.string().email("عنوان البريد الإلكتروني غير صالح"),
   password: z.string().min(6, "يجب أن تتكون كلمة المرور من 6 أحرف على الأقل"),
});

type FormValues = z.infer<typeof formSchema>;

export function useSignUp() {
   const router = useRouter();
   const [error, setError] = useState<string | null>(null);
   const [isLoading, setIsLoading] = useState(false);

   const form = useForm<FormValues>({
      resolver: zodResolver(formSchema),
      defaultValues: {
         name: "",
         email: "",
         password: "",
      },
   });

   const onSubmit = async (values: FormValues) => {
      setIsLoading(true);
      setError(null);

      try {
         const res = await fetch("/api/auth/register", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(values),
         });

         if (!res.ok) {
            const data = await res.json();
            throw new Error(data.message || "حدث خطأ ما");
         }

         router.push("/auth/login");
      } catch (error: any) {
         setError(error.message);
      } finally {
         setIsLoading(false);
      }
   };
   return { error, isLoading, onSubmit, form };
}
