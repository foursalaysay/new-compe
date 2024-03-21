'use client'

// import DonatedSection from './components/donated-goods';
// import { donationDataArray } from './components/donation-data';


import CompanySidebar from '../../components/company-sidebar';
import AdminProfile from '@/app/dashb/admin-dashboard/components/profile';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

import OHistoryList from '../components/list';



export default function MoreInfo(){
    return(
        <div className="flex flex-row">
          <div className="flex flex-col w-[250px]">
              <AdminProfile />
              <CompanySidebar />
          </div>
         
          <div className=' flex flex-row w-calc([100vw - 250px]) h-screen'>
            <Separator orientation="vertical"/>
            <ScrollArea>
                
            </ScrollArea>
          </div>
    </div>
    )
}