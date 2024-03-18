

import CompanySidebar from './components/company-sidebar';
import AdminProfile from '../admin-dashboard/components/profile';

import { Separator } from '@/components/ui/separator';

import DonatedSection from './components/donated-goods';
import { donationDataArray } from './components/donation-data';


export default function CompanyDashboard(){
    return(
        <div className="flex flex-row">
          <div className="flex flex-col w-[250px]">
              <AdminProfile />
              <CompanySidebar />
          </div>
         
          <div className=' flex flex-row w-calc([100vw - 250px]) h-screen'>
            <Separator orientation="vertical"/>
            <DonatedSection donationDataArray={donationDataArray} />
          </div>
    </div>
    )
}