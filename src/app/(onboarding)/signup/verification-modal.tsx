import React from "react"
import Button from "@/component/ui/button"
import Link from "next/link"

export default function VerificationModal() {
  return (
    <div className="w-full max-w-96 space-y-5 rounded-lg bg-white p-6 text-[#212121]">
      <div className="text-[#212121]">
        <h2 className="text-[32px] font-bold">Email verifiaction</h2>
        <p className="text-base font-normal">
          A link has been sent to your email, click the link to verify.
        </p>
      </div>
      <Button asChild>
        <Link className="block text-center" href={"/login"}>
          Continue
        </Link>
      </Button>
    </div>
  )
}
