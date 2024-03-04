'use client'

import Image from 'next/image'

// IMAGE IMPORT
import Logo from './../../public/logo.png'

export default function Home() {
  return (
    <div className='w-screen h-auto p-0'>
      <div className=' w-screen h-screen flex flex-row justify-center gap-20 items-center'>
    <Image
    src={Logo}
    alt='image-landing'
    width={500}
    height={500}                

    />
    <div className='flex flex-col text-left gap-5'>
      <h1 className='text-8xl font-bold'>
        ShareSurplus
      </h1>
      <p className='text-lg'>Companies donated products delivered at ease</p>
    </div>
    
    </div>

    {/* ABOUT SHARESURPLUS */}

    <div className='h-screen w-screen flex flex-row'>
      <section className='flex flex-col gap-10'>
        <h1 className='text-4xl'>About</h1>
        <div className='bg-gray-400 rounded h-2/3 w-[500px]'>

        </div>
      </section>
      
    </div>
    </div>
    
  )
};
