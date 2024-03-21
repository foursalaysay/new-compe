import React from 'react';
import { useRouter } from 'next/router';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CIHistory, CHistory } from './sample-data'; // Import CHistoryData from your sample-data file

export const OHistoryList: React.FC<CIHistory> = ({ CHistoryData }) => {
  const router = useRouter();


  // NOTE FETCH THE HISTORY DATA FROM THE DATABASE

  return (
    <div className='flex flex-wrap w-full gap-5 p-5'>
      {CHistoryData.map((donation: CHistory) => (
        <Card key={donation.donationId} className='flex flex-row justify-between px-5'>
          <div>
            <h4>{donation.oName}</h4>
            <p>{donation.oAddress}</p>
          </div>
          <Button variant='default'>
            <Link href={`/dashb/company-dashboard/${donation.donationId}`}>View Details</Link>
          </Button>
        </Card>
      ))}
    </div>
  );
}
