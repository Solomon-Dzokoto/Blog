import type { Metadata } from "next"
import "./globals.css"
import "swiper/css"
import "swiper/css/navigation"
import Navbar from "@/components/navbar"

export const metadata: Metadata = {
  title: "Welcome to Outbound AI",
  description:
    "This AI-powered calling solution helps you connect with customers effortlessly, track conversations in real-time, and never miss an opportunity.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={``}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
