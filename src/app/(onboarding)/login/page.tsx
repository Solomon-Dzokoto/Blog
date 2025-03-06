"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Link from "next/link"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"
import { useRouter } from "next/navigation"

const logInSchema = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LogInData = z.infer<typeof logInSchema>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LogInData>({
    resolver: zodResolver(logInSchema),
    mode: "onChange",
  })

  const router = useRouter()

  const onSubmit = (data: LogInData) => {
    console.log("Form Data:", data)
    router.push("/onboarding")
  }

  return (
    <div className="w-full max-w-96 rounded-lg bg-white p-6 text-[#212121]">
      <h2 className="mb-6 text-[32px] font-bold">Log In</h2>
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
          Log In
        </Button>
      </form>
      <div className="mt-2 flex items-center justify-center gap-1 text-xs">
        <p className="text-[#424242]">Don&apos;t have an account yet ?</p>
        <Link className="text-[#212121]" href="/signup">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
