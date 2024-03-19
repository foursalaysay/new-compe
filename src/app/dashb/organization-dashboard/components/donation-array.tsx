import React from 'react';
import { TCDonation } from '../../company-dashboard/components/donation-data';
import { Separator } from '@/components/ui/separator';

export interface ITCDonation {
    donationDataArray : TCDonation []
}

export interface Product {
    pName : string;
    pQuantity : number;
    pExpiration : Date
}

export default function ODonationFeed({ donationDataArray } : ITCDonation ) {
  return (
    <div className='flex flex-wrap p-5 gap-5'>
    {donationDataArray.map(donation => (
      <div key={donation.donationId} className="bg-gray-200 p-4 mb-4 rounded">
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
  )
}
