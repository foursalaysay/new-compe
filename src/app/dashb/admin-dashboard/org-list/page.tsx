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
    <div className="flex flex-row">
    <div className="flex flex-col w-[250px]">
        <AdminProfile />
        <SidebarMenuItems />
    </div>
    <Separator orientation="vertical"/>
    <>
      <OrgList cDataUser={cUsers} />
    </>
    </div>
  );
}
