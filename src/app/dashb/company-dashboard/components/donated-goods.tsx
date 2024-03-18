import React from 'react';
import { TCDonation } from './donation-data';
import CreateDonation from './create-donation';
import NewDonation from './new-donation';

import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

// TCDonation is the array of objects


export interface ITCDonation {
    donationDataArray : TCDonation []
}

export interface Product {
    pName : string;
    pQuantity : number;
    pExpiration : Date
}

export default function DonatedSection({ donationDataArray } : ITCDonation ) {
  return (
   
    <div className='w-full h-screen'>
      <div className='flex flex-col'>
      <div className='flex flex-row p-10 justify-between items-center'>
      <h1 className='text-6xl text-left p-5'>List of Donated Items</h1>
      {/* MODAL FOR MAKING DONATION */}
        <NewDonation />
      </div>
      <Separator />
      
     
     <div className='flex flex-wrap p-2 gap-2'>
     {donationDataArray.map(donation => (
          <div key={donation.donationId} className="bg-gray-200 p-4 mb-4 rounded w-[510px]">
            <h2 className="text-xl font-bold mb-2">{donation.cName}</h2>
            <p>Contact: {donation.cContact}</p>
            <p>Address: {donation.cAddress}</p>
            <p>Representative: {donation.cRep}</p>
            <ul className="mt-2 bg-white rounded p-5 mb-5">
            {donation.product.map((product : Product) => (
                <li key={product.pName} className="list-disc ml-4">
                    {product.pName} - {product.pQuantity} pcs - Expires: {product.pExpiration.toDateString()}
                </li>
                ))}
            </ul>
            <Separator orientation='horizontal'/>
            <p>Donation Status: {donation.donationStatus}</p>
          </div>
        ))}
     </div>
      </div>
    </div>
  );
}
