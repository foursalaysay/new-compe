'use client'
import Image from 'next/image'
// IMAGE IMPORT
import Logo from './../../public/logo.png'
import Link from 'next/link'

import { Button } from '@/components/ui/button'


export default function Home() {
  return (
    <div className='w-screen h-auto overflow-x-hidden'>
      <div className='w-full h-screen flex flex-row justify-center items-center p-10'>
        <div className='w-1/2'>
          <Image
          src={Logo}
          alt='image-landing'
          width={500}
          height={500}                
          />
        </div>
    
    <div className='flex flex-col gap-10 w-1/2'>
     
      <div className='text-left'>
        <h1 className='text-8xl font-bold'>
          ShareSurplus
        </h1>
        <p className='text-lg'>Companies donated products distributed at ease</p>
      </div>
      <div className='flex flex-row justify-center items-center gap-2'>
        <Button className='text-sm bg-sky-600 w-1/2'><Link href="/auth/login">Login</Link></Button>
        <p className='text-md text-center '>|</p>
        <Button className='text-sm  bg-sky-600 w-1/2' ><Link href="/auth/register">Register</Link></Button>
      </div>
      

      
      {/* <p><Link href="/">Back</Link></p>
     <Link href="/dashboard/admin-dashboard">See Admin Dashboard</Link>
      <Link href="/dashboard/admin-dashboard/org-list">List of Organizations</Link>
      <Link href="/dashboard/admin-dashboard/com-list">List of Companies</Link> */}
    </div>
    
    </div>
    </div>
    
  )
};
