export default function OnboardingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <body
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/onboarding-bg.png')",
        backgroundColor: "#1E1E1EBF",
        backgroundBlendMode: "overlay",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundAttachment: "fixed",
      }}
    >
      {children}
    </body>
  )
}
