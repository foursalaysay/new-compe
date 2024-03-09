import React from 'react';
import { TCDonation } from './donation-data';
import CreateDonation from './create-donation';
import NewDonation from './new-donation';

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
    <div className='flex flex-col w-calc[100vw - 225px)] h-screen'>
      <div className='flex flex-row p-10 justify-between'>
      <h1 className='text-6xl text-left p-5'>List of Donations</h1>
      <NewDonation />
      </div>
      
      <div className='flex flex-wrap p-5 gap-5'>
        {donationDataArray.map(donation => (
          <div key={donation.donationId} className="bg-gray-200 p-4 mb-4 rounded">
            <h2 className="text-xl font-bold mb-2">{donation.cName}</h2>
            <p>Contact: {donation.cContact}</p>
            <p>Address: {donation.cAddress}</p>
            <p>Representative: {donation.cRep}</p>
            <ul className="mt-2">
            {donation.product.map((product : Product) => (
                <li key={product.pName} className="list-disc ml-4">
                    {product.pName} - {product.pQuantity} pcs - Expires: {product.pExpiration.toDateString()}
                </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
