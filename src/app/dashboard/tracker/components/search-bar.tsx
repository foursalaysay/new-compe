import React, {useCallback, useEffect} from 'react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell } from 'lucide-react';
import { useRouter } from 'next/router';
import { CircleUserRound } from 'lucide-react';




export default function SearchBar() {
    
    const router = useRouter()

   

    
    // const searchOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // }
    
    // ROUTE THIS TO NOTIFICATION COMPANY
    const routeCNotif = () => {
        useEffect(() => {
            router.push('/dashboard/company-notif')
        })
    }

    const routeCProfile = () => {
        useEffect(() => {
            router.push('/dashboard/company-profile')
        })
    }

    


  return (
    <div className='w-full h-20 border-black space-x-10'>
         <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" />
            <Button type="submit">Subscribe</Button>
        </div>
        <div>
            <Button onClick={routeCNotif}>
                <Bell />
            </Button>
            <Button onClick={routeCProfile}>
                <CircleUserRound />
            </Button>
            

        </div>
    </div>
  )
}
