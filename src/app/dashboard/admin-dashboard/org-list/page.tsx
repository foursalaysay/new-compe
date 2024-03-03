'use client'

import SidebarMenuItems from "../components/sidebar-menu-items";
// import DonationForm from "./dashboard/company-dashboard/components/donation-form";
import AdminProfile from "../components/profile";
import OrgList from "../components/o-list";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";


import { cUsers } from "../components/sample-data";

export default function OrgListVerification() {
  return (
    <div className="flex flex-row h-screen w-screen">
    <div className="flex flex-col w-[250px]">
      <ScrollArea>
          <AdminProfile />
          <SidebarMenuItems />
      </ScrollArea>
      </div>
      
      <div className="w-full flex flex-row w-calc([100vw - 250px])">
        
          <Separator orientation="vertical"/>
        <ScrollArea>
          <OrgList cDataUser={cUsers} />
        </ScrollArea>
        
      </div>
    </div>
  );
}
