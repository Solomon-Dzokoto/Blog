"use client"
import React, { useState } from "react"
import VerificationModal from "./verification-modal"
import SignUpForm from "./sign-up-form"

export default function SignUp() {
  const [hasSubmitted, setHasSubmitted] = useState(false)
  return (
    <>
      {hasSubmitted ? (
        <VerificationModal />
      ) : (
        <SignUpForm setHasSubmitted={setHasSubmitted} />
      )}
    </>
  )
}
