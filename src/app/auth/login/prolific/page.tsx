"use client";
import { motion } from "framer-motion";
import React, { Fragment, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { PROLIFIC_EMAIL_REGEX } from "@/lib/utils";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ErrorMessage from "@/components/ErrorMessage";
import Image from "next/image";
import prolificLogo from "@/../public/Prolific_Icon_Prolific_Blue.png";

export interface SignInFormProps {
   prolific?: boolean;
}

const signInSchema = (prolific: boolean) =>
   z.object({
      email: prolific
         ? z
              .string()
              .email({ message: `الرجاء إدخال بريد إلكتروني صالح` })
              .regex(PROLIFIC_EMAIL_REGEX, {
                 message: `الرجاء إدخال بريد إلكتروني صالح`,
              })
         : z.string().email({ message: `الرجاء إدخال بريد إلكتروني صالح` }),
   });

const SignInForm = ({ prolific = true }: SignInFormProps) => {
   const [error, setError] = useState(``);

   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm({
      resolver: zodResolver(signInSchema(prolific)),
      defaultValues: {
         email: ``,
      },
      reValidateMode: `onBlur`,
      mode: `onChange`,
   });
   const router = useRouter();

   async function onError() {}

   async function onSubmit({ email }: { email: string }) {
      let res = await signIn(`credentials`, {
         email,
         password: ``,
         redirect: false,
         type: `prolific`,
      });

      console.log({ res });

      if (res?.error === `CredentialsSignin`)
         setError(`بيانات اعتماد غير صالحة`);
      else if (res?.error === `Configuration`)
         setError(`بيانات اعتماد غير صالحة`);
      else if (res?.ok && res?.status === 200) router.push(`/`);
   }

   return (
      <Fragment>
         <motion.div
            initial={{ opacity: 0, translateX: -20 }}
            animate={{ opacity: 1, translateX: 0 }}
            exit={{ opacity: 0, translateX: 20 }}
            transition={{ duration: 0.4 }}
            key={`screen-end`}
            className={`flex flex-col items-start w-full gap-2 mt-12 px-4 `}
         >
            <h2
               className={`text-3xl font-semibold drop-shadow-md inline-flex items-center gap-4 `}
            >
               <Image
                  alt="prolific"
                  height={32}
                  width={32}
                  src={prolificLogo}
               />
               تسجيل الدخول عبر Prolific
            </h2>
            <h2 className={`text-base text-neutral-500 flex-wrap`}>
               قم بتسجيل الدخول باستخدام حسابك المميز
            </h2>
         </motion.div>
         <form
            className={`flex flex-col items-start gap-2 !w-1/2 px-4`}
            onSubmit={handleSubmit(onSubmit, onError)}
         >
            <div className={`w-full mt-12`}>
               <div className="label">
                  <label
                     htmlFor={`email`}
                     className="label-text text-neutral-700 text-lg font-semibold  "
                  >
                     عنوان البريد الإلكتروني:
                  </label>
               </div>
               <label className="input input-primary input-md input-bordered !bg-white flex items-center gap-2 !w-1/2 mt-2">
                  <Input
                     id={`email`}
                     type="email"
                     placeholder={`أدخل بريدك الإلكتروني هنا`}
                     className="w-full !bg-white input-primary grow pl-2 !min-w-[300px] sm:!min-w-[400px]"
                     {...register(`email`)}
                  />
               </label>
            </div>
            {error ||
               (errors?.email?.message && (
                  <div>
                     <ErrorMessage error={error || errors?.email?.message} />
                  </div>
               ))}
            <div
               className={`w-full flex flex-col items-start justify-start mt-8 gap-4 sm:!flex-row`}
            >
               <Link href={`/auth/login`}>
                  <Button
                     variant={`outline`}
                     className={`link link-hover text-md !px-6 !py-3.5 rounded-md hover:!bg-opacity-90 transition-opacity duration-200`}
                  >
                     العودة إلى صفحة تسجيل الدخول
                     <span className={`mr-2`}>&larr;</span>
                  </Button>
               </Link>
               <Button
                  type="submit"
                  className={`btn btn-primary text-md btn-lg shadow-md !px-12 !py-3.5 rounded-md bg-primary text-white hover:!bg-opacity-90 transition-opacity duration-200`}
               >
                  تسجيل الدخول
               </Button>
            </div>
         </form>
      </Fragment>
   );
};

export default SignInForm;
