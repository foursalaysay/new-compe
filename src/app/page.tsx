'use client'

import Image from 'next/image'

// IMAGE IMPORT
import Logo from './../../public/logo.png'

import Link from 'next/link'


export default function Home() {
  return (
    <div className='w-screen h-auto overflow-x-hidden'>
      <div className='w-full h-screen flex flex-row justify-center gap-20 items-center'>
    <Image
    className='w-1/2'
    src={Logo}
    alt='image-landing'
    width={500}
    height={500}                

    />
    <div className='flex flex-col text-left gap-5 w-1/2'>
      <h1 className='text-8xl font-bold'>
        ShareSurplus
      </h1>
      <p className='text-lg'>Companies donated products delivered at ease</p>
      <p><Link href="/">Back</Link></p>
     <Link href="/dashboard/admin-dashboard">See Admin Dashboard</Link>
      <Link href="/dashboard/admin-dashboard/org-list">List of Organizations</Link>
      <Link href="/dashboard/admin-dashboard/com-list">List of Companies</Link>
    </div>
    
    </div>

    {/* ABOUT SHARESURPLUS */}

    <div className='h-full w-full flex flex-row'>
      <section className='flex flex-col gap-10'>
        <h1 className='text-4xl'>About</h1>
        <div className='bg-gray-400 rounded h-2/3 w-[500px]'>

        </div>
      </section>
      
    </div>
    </div>
    
  )
};
