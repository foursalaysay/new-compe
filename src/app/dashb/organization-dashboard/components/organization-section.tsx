import React from 'react';
import ODonationFeed, { ITCDonation } from './donation-array';

import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

export default function ODonatedSection({ donationDataArray }  : ITCDonation) {
  return (
    <div className='flex flex-col w-calc[100vw - 250px)] h-screen'>
      <h1 className='text-6xl text-left p-5'>List of Donated Goods</h1>
      <Separator />
      <ScrollArea>
          <ODonationFeed donationDataArray={donationDataArray}/>
      </ScrollArea>
    </div>
  );
}
