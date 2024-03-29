'use client'

import SidebarMenuItems from "../components/sidebar-menu-items";
// import DonationForm from "./dashboard/company-dashboard/components/donation-form";
import AdminProfile from "../components/profile";
import CompanyList from "../components/c-list";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";


import { cUsers } from "../components/sample-data";

export default function ComListVerification() {
  return (
    <div className="flex flex-row w-screen h-screen">
      <div className="flex flex-col w-[250px]">
        <ScrollArea>
            <AdminProfile />
            <SidebarMenuItems />
        </ScrollArea>
        </div>
        <Separator orientation="vertical"/>
      <div className="w-calc([w-100vw - 250px]) h-screen">
        
        <CompanyList cDataUser={cUsers} />
      </div>
    </div>
  );
}
