

import OrganizationSidebar from './components/organization-sidebar';
import AdminProfile from '../admin-dashboard/components/profile';

import { Separator } from '@/components/ui/separator';

import DonatedSection from '../company-dashboard/components/donated-goods';
import { donationDataArray } from '../company-dashboard/components/donation-data';



export default function OrgDashboard(){
    return(
        <div className="flex flex-row">

      <div className="flex flex-col w-[225px]">
          <AdminProfile />
          <OrganizationSidebar />
      </div>
      <Separator orientation="vertical"/>
      <>
        <DonatedSection donationDataArray={donationDataArray} />
      </>
    </div>
    )
}