import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import LayoutClient from './componens/LayoutClient';
import SessionProviderWrapper from "./componens/SessionProviderWrapper";

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
      <head></head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#EFE7DF] text-[#1E1E1E]`}
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
