import React from "react"
import { UseFormRegisterReturn } from "react-hook-form"

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn
}

export default function Input({ register, className, ...props }: InputProps) {
  return (
    <input
      {...register}
      {...props}
      className={`w-full rounded-lg border border-[#C0C3C9] px-4 py-2 text-base text-[#212121BF] outline-none placeholder:text-[#C0C3C9] ${className || ""}`}
    />
  )
}
