import React from "react"
import { Slot } from "@radix-ui/react-slot"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean
}

export default function Button({
  asChild,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      {...props}
      disabled={disabled}
      className={`w-full cursor-pointer rounded-xl py-2 text-base font-medium transition outline-none ${disabled ? "cursor-not-allowed bg-[#C0C3C9] text-[#797979]" : "bg-[#212121] text-white hover:opacity-90"} ${className || ""}`}
    >
      {children}
    </Comp>
  )
}
