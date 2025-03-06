"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

const signUpSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type SignUpData = z.infer<typeof signUpSchema>

export default function SignUpForm({
  setHasSubmitted,
}: {
  setHasSubmitted: (value: boolean) => void
}) {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<SignUpData>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
  })

  const onSubmit = (data: SignUpData) => {
    console.log("Form Data:", data)
    setHasSubmitted(true)
  }

  return (
    <div className="w-full max-w-96 rounded-lg bg-white p-6 text-[#212121]">
      <h2 className="mb-6 text-[32px] font-bold">Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
          <div>
            <label className="block text-base text-[#212121]">Email</label>
            <Input
              register={register("email")}
              placeholder="Enter email address"
              className="mt-1"
            />
            {errors.email && (
              <p className="mt-2 text-xs text-[11px] text-[#DC2626]">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label className="block text-base text-[#212121]">Password</label>
            <Input
              type="password"
              register={register("password")}
              placeholder="Enter password"
              className="mt-1"
            />
            {errors.password && (
              <p className="mt-2 text-xs text-[11px] text-[#DC2626]">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <Button variant="form" type="submit" disabled={!isValid}>
          Sign up
        </Button>
      </form>
      <div className="mt-2 flex items-center justify-center gap-1 text-xs">
        <p className="text-[#424242]">Already have an account ?</p>
        <Link className="text-[#212121]" href="/login">
          Login
        </Link>
      </div>
    </div>
  )
}
