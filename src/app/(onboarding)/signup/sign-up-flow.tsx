"use client"
import React, { useState } from "react"
import SignUpForm from "./sign-up-form"
import VerificationModal from "./verification-modal"

export default function SignUpFlow() {
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
