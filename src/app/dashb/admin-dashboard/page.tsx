'use client'

import SidebarMenuItems from "./components/sidebar-menu-items";
// import DonationForm from "./dashboard/company-dashboard/components/donation-form";
import AdminProfile from "./components/profile";
import { Separator } from "@/components/ui/separator";
import CompanyList from "./components/c-list";

import { useState, useEffect } from 'react'


import { cUsers } from "./components/sample-data";

export async function getCompanyList(){
  const response = await fetch('/api/admin-dashboard',

  );
}

export default function Home() {

  const [ getCData, setGetCData ] = useState([])
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
 