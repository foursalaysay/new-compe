'use client'

import Image from 'next/image'

// IMAGE IMPORT
import Logo from './../../public/logo.png'

export default function Home() {
  return (
    <>
    <Image
    src={Logo}
    alt='image-landing'
    width={500}
    height={500}
    />
    </>
  );
}
