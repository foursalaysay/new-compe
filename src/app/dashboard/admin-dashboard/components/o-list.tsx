"use client"


import React from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { CompanyData } from './sample-data'
import Image from 'next/image'
import { DialogDemo } from './verification-dialog'
import { ScrollArea } from '@/components/ui/scroll-area'

interface cProps {
  cDataUser : CompanyData[]
}


// LIST ALL COMPANY AND MAKE CARD TO SEE IMAGES, NAME, ADDRESS, CONTACT NUMBER AND REPRESENTATIVE

export default function OrgList({ cDataUser } : cProps) {
  
  return (
    <div className='flex flex-col w-full h-screen '>
     <h1 className='text-6xl text-left p-5'>Organizations</h1>
    <div className=' flex flex-wrap p-5 gap-5'>
      <ScrollArea>
      {cDataUser.map(obj => (
        
         <Card key={obj.id} className='flex flex-row max-w-3xl border-gray border-2 rounded'>
          <Image
          className='w-[200px] p-0'
          width={500}
          height={500}
          src={obj.image}
          alt={obj.image}
           />
           <div className='flex flex-col p-5 justify-center items-start text-sm'>
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
