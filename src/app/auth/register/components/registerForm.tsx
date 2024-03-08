"use client";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  FormDescription,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import React from "react";
import { Loader2Icon } from "lucide-react";

// import { useForm } from "react-hook-form";
import { z } from "zod";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { toast } from "sonner";

import { UseFormReturn } from 'react-hook-form';


import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { MeInputAddress } from "@/components/me/me-input-address";
import { Separator } from "@/components/ui/separator";
import { RegisterData, RegisterSchema } from "../data/schema";
import { MeMultiSeleect } from "@/components/me/me-multi-select";
import { skills } from "../data/data";
import { Textarea } from "@/components/ui/textarea";

//THIS SHOULD BE FETCH FROM ADMIN


export const userSchema = z.object({
  userTypeName: z.string(),
  userAddress: z.string(),
  userContact: z.string(),
  userRep: z.string(),
  userRole: z.enum(["company", "organization"]),
  userEmail: z.string().email(),
  password: z.string().min(6),
  confirmPassword: z.string().min(6),
})
.refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type userDType = z.infer<typeof userSchema>


const RegisterForm = () => {
  const router = useRouter();

const form: UseFormReturn<userDType> = useForm<userDType>({
  resolver: zodResolver(userSchema),
  defaultValues: {
    userTypeName: "",
    userContact: "",
    userAddress: "",
    userRep: "",
    userRole: "organization",
    userEmail: "",
    password: "",
    confirmPassword: "",
  },
});

  const reCom = () => {
      router.push("/dashboard/company-dashboard")
  }

  const onSubmit = async (data: userDType) => {
    console.log({ data });
    const response = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      toast.error(response.statusText);
      return;
    }

    toast.success("Account created successfully");
    router.push("/login");
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <fieldset disabled={form.formState.isSubmitting} className="space-y-3">
        <FormField
  control={form.control}
  name="userTypeName"
  render={({ field }: { field: userDType }) => (
    <FormItem>
      <FormLabel>Name</FormLabel>
      <FormControl>
        <Input placeholder="Your Name" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="userContact"
  render={({ field }: { field: userDType }) => (
    <FormItem>
      <FormLabel>Contact Number:</FormLabel>
      <FormControl>
        <Input  placeholder="09*********" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="userAddress"
  render={({ field }: { field: userDType }) => (
    <FormItem>
      <FormLabel>Address</FormLabel>
      <FormControl>
        <MeInputAddress value={field.value} onChange={field.onChange} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="userRep"
  render={({ field }: { field: userDType }) => (
    <FormItem>
      <FormLabel>Representative Name</FormLabel>
      <FormControl>
        <Input {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
            control={form.control}
            name="userRole"
            render={({ field }: { field: userDType }) => (
              <FormItem>
                <FormLabel>User Type</FormLabel>
                <Select
                  {...field}
                  onValueChange={(value: any) => {
                    field.onChange(value);
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Set Role Type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="organization">Organization</SelectItem>
                    <SelectItem value="company">Company</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />


<FormField
  control={form.control}
  name="userEmail"
  render={({ field }: { field: userDType }) => (
    <FormItem>
      <FormLabel>Email</FormLabel>
      <FormControl>
        <Input placeholder="@email.com" {...field} />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="password"
  render={({ field }: { field: userDType }) => (
    <FormItem>
      <FormLabel>Password</FormLabel>
      <FormControl>
        <Input {...field} type="password" />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={form.control}
  name="confirmPassword"
  render={({ field }: { field: userDType }) => (
    <FormItem>
      <FormLabel>Confirm Password</FormLabel>
      <FormControl>
        <Input {...field} type="password" />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


          <Button onClick={reCom}>Register</Button>

          {/* <Button type="submit" className="w-full">
            {form.formState.isSubmitting ? (
              <Loader2 className="animate-spin" />
              
              
            ) : (
              "Register"
            )
            }
          </Button> */}
        </fieldset>
      </form>
    </Form>
  );
};

export default RegisterForm;