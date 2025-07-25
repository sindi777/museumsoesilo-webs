

import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import LayoutClient from './componens/LayoutClient';
import SessionProviderWrapper from "./componens/SessionProviderWrapper";
import Script from 'next/script'; // ✅ Import Next.js Script component

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Script Hotjar */}
        <Script id="hotjar-init" strategy="afterInteractive">
  {`
    (function(h,o,t,j,a,r){
      h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
      h._hjSettings={hjid:3705066,hjsv:6};
      a=o.getElementsByTagName('head')[0];
      r=o.createElement('script');r.async=1;
      r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
      a.appendChild(r);
    })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
  `}
</Script>

          
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#FFFFF] text-[#1E1E1E]`}
      >
        <SessionProviderWrapper>
          <LayoutClient>
            {children}
          </LayoutClient>
        </SessionProviderWrapper>
      </body>
    </html>
  )
}
