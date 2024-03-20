import React from 'react'

import {useRouter} from 'next/router'

import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button';

export default function OHistoryList() {

    const router = useRouter();

  return (
    <div className='flex flex-wrap w-full gap-5 p-5'>
        <Card className='flex flex-row justify-between px-5'>
        <>
        <h4>Sample Organization</h4>
        <p>Sample Address</p>
        </>
        <>
        <Button variant='default'>More Details</Button></>
        </Card>
    </div>
  )
}
