"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { date, z } from "zod"

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
import { toast } from "@/components/ui/use-toast"


export const Transaction = z
    .object({
        donationId : z.string(),
        product : z.array(
            z.object({
                pName : z.string(),
                pQuantity : z.number(),
                pExpiration : z.date()
            })
        ),
        cName : z.string(),
        cContact : z.string(),
        cAddress : z.string(),
        cRep : z.string(),

        oName : z.string(),
        oContact : z.string(),
        oAddress : z.string(),
        oRep : z.string()

    })

  
    
// put session in and add in forms

export function InputForm() {
  const form = useForm<z.infer<typeof Transaction>>({
    resolver: zodResolver(Transaction),
    defaultValues: {
      donationId : "",
      product : [{
        pName : "",
        pQuantity : 0,
        pExpiration : date(),
      }],
      cName : "",
      cContact : "",
      cAddress : "",
      cRep : "",
      oName : "",
      oContact : "",
      oAddress : "",
      oRep : ""
    },
  })

  function onSubmit(data: z.infer<typeof Transaction>) {
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
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="donationId"
          render={({ field }) => (
            <FormItem> 
              
              <FormControl>
                <Input placeholder="shadcn" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
