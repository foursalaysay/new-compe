// import Navbar from "@/components/common/navbar";
// import Profile from "@/components/common/profile";
// import SidebarMenuItems from "@/components/common/sidebar-menu-items";
import { ScrollArea } from "@/components/ui/scroll-area";

import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full overflow-hidden">
      <div className="w-full lg:ml-72 ">
        {/* <Navbar /> */}
        <ScrollArea className="m-auto h-[calc(100vh-72.8px)] bg-muted dark:bg-background">
          {children}
        </ScrollArea>
      </div>
    </div>
  );
}
