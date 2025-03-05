import React from "react"

export default function Button({
  disabled,
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={`cursor-pointer rounded-xl py-2 text-base font-medium transition outline-none ${disabled ? "cursor-not-allowed bg-[#C0C3C9] text-[#797979]" : "bg-[#212121] text-white hover:opacity-90"} ${className || ""}`}
    >
      {children}
    </button>
  )
}
