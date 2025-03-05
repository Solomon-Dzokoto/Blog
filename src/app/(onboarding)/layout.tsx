export default function OnboardingLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body
      className={`min-h-screen bg-cover bg-center`}
      style={{
        backgroundImage: "url('/images/onboarding-bg.png')",
        backgroundColor: "#1E1E1EBF",
        backgroundBlendMode: "overlay",
      }}
    >
      {children}
    </body>
  )
}
