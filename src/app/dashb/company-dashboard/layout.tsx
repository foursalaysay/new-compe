import React from 'react'


import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/common/theme-provider";
import Providers from "@/components/providers/Providers";


// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Company Dashboard",
  description: "Find Skillful and Reliable Home Service Providers",
};

export default function CompanyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          async
          defer
          src={`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY}&libraries=places`}
        ></script>
        
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
