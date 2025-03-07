export default function OnboardingLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="min-h-screen  w-full bg-[#1E1E1EBF] bg-[url('/images/onboarding-bg.png')] bg-cover bg-center bg-fixed bg-no-repeat [background-blend-mode:overlay]">
      <div className="flex h-screen flex-col items-center justify-center space-y-20 px-[4.5%]">
        <div className="h-[72px] w-[284px] bg-[url('/images/Logo.png')] bg-cover bg-no-repeat" />
        {children}
      </div>
    </div>
  )
}
