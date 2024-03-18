"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useState } from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"

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
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { toast } from "@/components/ui/use-toast"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { Label } from "@/components/ui/label"

  import { ScrollArea } from "@/components/ui/scroll-area"



const accountFormSchema = z
.object({
    donationId : z.string(),
    product : z.array(
        z.object({
            pName : z.string(),
            pQuantity : z.number(),
            pExpiration : z.date()
        })
    ),
    // cName : z.string(),
    // cContact : z.string(),
    // cAddress : z.string(),
    // cRep : z.string(),

    oName : z.string(),
    oContact : z.string(),
    oAddress : z.string(),
    oRep : z.string()

})

type AccountFormValues = z.infer<typeof accountFormSchema>

// This can come from your database or API.
const defaultValues: Partial<AccountFormValues> = {


  // name: "Your name",
  // dob: new Date("2023-01-23"),
}

export default function NewDonation() { 

  const [numSets, setNumSets] = useState(1);
  const form = useForm<AccountFormValues>({
    resolver: zodResolver(accountFormSchema),
    defaultValues,
  })

  const addSet = () => {
    setNumSets((prevNumSets) => prevNumSets + 1);
  };

  function onSubmit(data: AccountFormValues) {
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
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Create Donation</Button>
      </DialogTrigger>
      
      <DialogContent className="w-full">
      <ScrollArea>
<div>


      
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
  control={form.control}
  name="product"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Products</FormLabel>
      <FormControl>
        {(field.value || []).map((product, index) => (
          <div key={index}>
            <FormField
              control={form.control}
              name={`product[${index}].pName` as `product.${number}.pName`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Product Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Product Name" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={`product[${index}].pQuantity` as `product.${number}.pQuantity`}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quantity</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Quantity"
                      type="number"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

<FormField
  control={form.control}
  name={`product[${index}].pExpiration` as `product.${number}.pExpiration`}
  render={({ field }) => (
    <FormItem>
      <FormLabel>Expiration Date</FormLabel>
      <FormControl>
        <Input
          placeholder="Expiration Date"
          type="date"
          value={
            field.value instanceof Array && field.value[index]
              ? new Date(field.value[index].pExpiration).toISOString().split('T')[0]
              : ''
          } // Convert Date to string
          onChange={(e) => {
            const selectedDate = e.target.value; // Get the selected date from the input

            // Parse the date string to a Date object if needed
            const parsedDate = selectedDate ? new Date(selectedDate) : null;

            // Your logic here, you can set the value to your form field state
            // For example, if using react-hook-form:
            field.onChange(parsedDate);
          }}
        />
      </FormControl>
    </FormItem>
  )}
/>


          </div>
        ))}
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>


        <FormField
          control={form.control}
          name="oName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Organization Name:</FormLabel>
              <FormControl>
                <Input placeholder="Your name" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="oContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact Number:</FormLabel>
              <FormControl>
                <Input placeholder="09*********" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="oAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address:</FormLabel>
              <FormControl>
                <Input placeholder="Cebu City" {...field} />
              </FormControl>
             
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={form.control}
          name="oRep"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Representative Name:</FormLabel>
              <FormControl>
                <Input placeholder="Alice Wiggins" {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />


       
       
        <Button type="submit">Donate Goods</Button>
      </form>
    </Form>
    </div>
    </ScrollArea>
    </DialogContent>
    
    </Dialog>
  )
}