import Navbar from "@/components/navbar"

export default function LandingPageLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body className={`min-h-screen`}>
      <Navbar />
      {children}
    </body>
  )
}
