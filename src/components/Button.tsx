import { ReactNode, ButtonHTMLAttributes } from "react"
import clsx from "clsx"

// Define types for variants and sizes
type Variant = "primary" | "secondary" | "outline" | "danger"
type Size = "sm" | "md" | "lg"

// Define style configurations
const variantStyles: Record<Variant, string> = {
  primary: "bg-[#ffffff] hover:bg-[#fafafa] text-[#212121]",
  secondary: "bg-[#090F1C] hover:bg-[#000000] text-white",
  outline:
    "bg-transparent border border-[#A0A0A0] hover:bg-gray-100 text-[#212121]",
  danger: "bg-red-600 hover:bg-red-700 text-white",
}

const sizeStyles: Record<Size, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-4 py-3 text-base",
  lg: "px-7 py-3 text-lg",
}

// Define component props interface
interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: Variant
  size?: Size
  disabled?: boolean
  className?: string
}

// Button component with TypeScript
const Button = ({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  onClick,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles =
    "cursor-pointer inline-flex items-center justify-center gap-1.5 rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"

  const buttonStyles = clsx(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  )

  return (
    <button
      type={type}
      className={buttonStyles}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
