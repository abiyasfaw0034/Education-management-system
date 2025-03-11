/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { signInFormSchema } from "@/lib/auth-schema";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { toast } from "sonner";
import LoadingButton from "@/components/loading-button";
import { useRouter } from "next/navigation";

const SignIn = () => {
  const [pending, setPending] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof signInFormSchema>) {
    const { email, password } = values;
    const { data, error } = await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onRequest: () => {
          setPending(true);
          toast("Please Wait", {
            description: "Signing you in",
          });
        },
        onSuccess: () => {
          setPending(false);
          //   form.reset();
          toast("Welcome", {
            description: "Your have logged in to ur account.",
          });
          router.push("/admin");
        },
        onError: (ctx) => {
          setPending(false);
          toast("cant sign in", {
            description: ctx.error.message ?? "Something went wrong.",
          });
        },
      }
    );
    console.log(values);
  }
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Sign In</CardTitle>
        <CardDescription>Welcome back, sign in to continue</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="abebe@gmail.com"
                      {...field}
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
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <LoadingButton pending={pending}>Subimt</LoadingButton>
          </form>
        </Form>
      </CardContent>
      <CardFooter className="flex justify-center">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account yet?{" "}
          <Link href="/sign-up" className="text-primary hover:underline">
            Sign Up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignIn;
