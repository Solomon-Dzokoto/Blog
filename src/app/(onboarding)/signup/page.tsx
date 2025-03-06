import React from "react"
import SignUpFlow from "./sign-up-flow"

export default function SignUp() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-20 px-[4.5%]">
      <div
        className="h-[72px] w-[284px]"
        style={{
          backgroundImage: "url('/images/Logo.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <SignUpFlow />
    </div>
  )
}
