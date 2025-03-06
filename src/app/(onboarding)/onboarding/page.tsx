"use client"
import React from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Button from "@/components/ui/button"
import Input from "@/components/ui/input"

const logInSchema = z.object({
  organisation: z
    .string()
    .min(3, "Organisation name must be at least 3 characters"),
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

  const onSubmit = (data: LogInData) => {
    console.log("Form Data:", data)
  }

  return (
    <div className="w-full max-w-96 rounded-lg bg-white p-6 text-[#212121]">
      <h2 className="mb-5 text-2xl font-bold">Welcome, Agent </h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
        <div>
          <label className="block text-base font-[450] text-[#212121]">
            Create new organization.
          </label>
          <Input
            register={register("organisation")}
            placeholder="Enter your organization name"
            className="mt-3"
          />
          {errors.organisation && (
            <p className="mt-2 text-xs text-[11px] text-[#DC2626]">
              {errors.organisation.message}
            </p>
          )}
        </div>
        <Button
          variant="form"
          type="submit"
          disabled={!isValid}
          className="font-medium"
        >
          Create Organisation
        </Button>
      </form>
    </div>
  )
}
