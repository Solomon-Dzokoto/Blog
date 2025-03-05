import React from "react"
import SignUpForm from "./sign-up-form"

export default function SignUp() {
  return (
    <div className="mt-[18.5%] flex flex-col items-center space-y-20 px-[4.5%]">
      <div
        className="h-[72px] w-[284px]"
        style={{
          backgroundImage: "url('/images/Logo.png')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />
      <SignUpForm />
    </div>
  )
}
