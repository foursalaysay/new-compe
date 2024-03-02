'use client'

import SidebarMenuItems from "./components/sidebar-menu-items";
// import DonationForm from "./dashboard/company-dashboard/components/donation-form";
import AdminProfile from "./components/profile";
import { Separator } from "@/components/ui/separator";
import CompanyList from "./components/c-list";


import { cUsers } from "./components/sample-data";

export default function Home() {
  return (
    <div className="flex flex-row">

      <div className="flex flex-col w-[225px]">
          <AdminProfile />
          <SidebarMenuItems />
      </div>
      <Separator orientation="vertical"/>
      <>
        <CompanyList cDataUser={cUsers} />
      </>
    </div>
  );
}
 