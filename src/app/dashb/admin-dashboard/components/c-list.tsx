'use client'



import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { ScrollArea } from '@/components/ui/scroll-area'

import { CompanyData } from './sample-data'
import { DialogDemo } from './verification-dialog'
import Image from 'next/image'

interface cProps {
  cDataUser : CompanyData[]
}


// LIST ALL COMPANY AND MAKE CARD TO SEE IMAGES, NAME, ADDRESS, CONTACT NUMBER AND REPRESENTATIVE

export default function CompanyList({ cDataUser } : cProps) {
  
  return (
    <div className='flex flex-col w-ful h-full'>
     <h1 className='text-6xl text-left p-5'>Companies</h1>
    
     <div className=' flex flex-wrap p-5 gap-5 h-screen'>
      <ScrollArea>

      {cDataUser.map(obj => (
       
         <Card key={obj.id} className='flex flex-row w-[500px] border-gray border-2 rounded'>
          <Image
          className=' p-0'
          width={200}
          height={50}
          src={obj.image}
          alt={obj.image}
           />
           <div className='flex flex-col p-5 justify-center items-start text-md'>
           <h4>{obj.company_name}</h4>
           <p>{obj.address}</p>
           <p>{obj.contact_number}</p>
           <p>{obj.representative}</p>
          <div className='ml-32 mt-8'>
            <DialogDemo />
          </div>
           </div>
       </Card>
      ))}
      </ScrollArea>
    </div>
    
   
    </div>
  )
}
