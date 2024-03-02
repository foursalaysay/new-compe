import React from 'react'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



export default function AdminProfile() {

  
  return (
    <div className='flex flex-col justify-center items-center gap-5 w-[203px] h-[162px]'>
        <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <p>Hello!, FOUR</p>
    </div>
  )
}
