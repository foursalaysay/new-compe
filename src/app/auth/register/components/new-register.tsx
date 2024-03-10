"use client"


import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"
import { useRouter } from "next/navigation"

import { useForm } from 'react-hook-form';

const profileFormSchema = z.object({
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

type ProfileFormValues = z.infer<typeof profileFormSchema>

// This can come from your database or API.
const defaultValues: Partial<ProfileFormValues> = {
  userTypeName : "",
  userAddress : "",
  userContact : "",
  userRep : "",
  userRole : "organization",
  userEmail : "",
  password : "",
  confirmPassword : ""
}

export function RegisterSection() {

  const router = useRouter();

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues
  })

  const reRoute = () => {
    router.push("/dashb/company-dashboard")
  }
  

  function onSubmit(data: ProfileFormValues) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="userTypeName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name: </FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="userAddress"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address: </FormLabel>
            <FormControl>
              <Input  {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="userContact"
        render={({ field }) => (
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
        name="userRep"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Representative Name</FormLabel>
            <FormControl>
              <Input   {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <FormField
          control={form.control}
          name="userRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Choose Type of User</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type of User" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="organization">Company</SelectItem>
                  <SelectItem value="company">Organization</SelectItem>
                 
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
        control={form.control}
        name="userEmail"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Email: </FormLabel>
            <FormControl>
              <Input {...field} />
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
            <FormLabel>Password: </FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
       <FormField
        control={form.control}
        name="confirmPassword"
        render={({ field }) => (
          <FormItem>
            <FormLabel> Confirm Password: </FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
        <Button className="w-full" onClick={reRoute} type="submit">Register</Button>
      </form>
    </Form>
  )
}