'use client'
import Image from 'next/image'
// IMAGE IMPORT
import Logo from './../../public/logo.png'
import Link from 'next/link'


export default function Home() {
  return (
    <div className='w-screen h-auto overflow-x-hidden p-10'>
      <div className='w-full h-screen flex flex-row justify-center items-center'>
        <div className='w-1/2'>
          <Image
          src={Logo}
          alt='image-landing'
          width={500}
          height={500}                
          />
        </div>
    
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
    </div>
    
  )
};
