

import OrganizationSidebar from './components/organization-sidebar';
import AdminProfile from '../admin-dashboard/components/profile';

import { Separator } from '@/components/ui/separator';

import ODonatedSection from './components/organization-section';
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
        <ODonatedSection donationDataArray={donationDataArray} />
      </>
    </div>
    )
}