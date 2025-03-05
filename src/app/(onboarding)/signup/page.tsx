import Image from "next/image"
import React from "react"
import SignUpForm from "./sign-up-form"

export default function SignUp() {
  return (
    <div>
      <Image
        src={"/images/Logo.png"}
        width={281}
        height={69}
        alt="outbound logo"
      />
      <SignUpForm />
    </div>
  )
}
