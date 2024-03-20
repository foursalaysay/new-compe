import React from 'react'

import {useRouter} from 'next/router'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function OHistoryList() {

    const router = useRouter();

    const donationId = 100;
    

  return (
    <div className='flex flex-wrap w-full gap-5 p-5'>
        <Card className='flex flex-row justify-between px-5'>
        <>
        <h4>Sample Organization</h4>
        <p>Sample Address</p>
        </>
        <>
        
        <Button variant='default'><Link href={`/dashb/company-dashboard/${donationId}`}></Link></Button></>
        </Card>
    </div>
  )
}
