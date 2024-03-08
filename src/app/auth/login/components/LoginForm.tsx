"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn, useSession } from "next-auth/react";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

import  { useState } from 'react';

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

type FormData = z.infer<typeof formSchema>;

const LoginForm = () => {
  const router = useRouter();
  // const session = useSession();
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // PRELIMINARY ROUTING


  const routingButton = () => {
    
      router.push("/dashboard/admin-dashboard");
      
  }

  const onSubmit = async (data: FormData) => {
    const response = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (response?.error) {
      toast.error(response.error);
      return;
    }

    router.push("/dashboard/admin-dashboard");
  };
  // onSubmit={form.handleSubmit(onSubmit)}
  return (
    <Form {...form}>
      <form >
        <fieldset disabled={form.formState.isSubmitting} className="space-y-3">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="your@email.com" {...field} />
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
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" onClick={routingButton}>
            Log In
          </Button>
        </fieldset>
      </form>
    </Form>
  );
};

export default LoginForm;


// {form.formState.isSubmitting ? (
//   <Loader2 className="animate-spin" />
// ) : (
//   "Log in"
// )}