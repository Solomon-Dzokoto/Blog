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
      <div className="flex h-screen flex-col items-center justify-center space-y-20 px-[4.5%]">
        <div
          className="h-[72px] w-[284px]"
          style={{
            backgroundImage: "url('/images/Logo.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />
        {children}
      </div>
    </body>
  )
}
