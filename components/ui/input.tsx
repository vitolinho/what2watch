"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"

const inputVariants = cva(
  "flex items-center w-full bg-secondary-500 placeholder-text-500 rounded-md border border-text-500 px-4 py-2 text-text-500 focus-visible:outline-none focus-visible:bg-secondary-500  disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "",
        code: "text-center"
      },
      size: {
        lg: "h-11 body-lg",
        md: "h-10 body-md",
        sm: "h-9 body-md"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
)

export interface InputProperties
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  size?: SizeVariant | null
}

type SizeVariant = "md" | "sm" | "lg"

const InputUi = React.forwardRef<HTMLInputElement, InputProperties>(
  ({ size, variant, className, type, ...properties }, reference) => {
    return (
      <input
        type={type}
        className={cn(inputVariants({ size, variant, className }))}
        ref={reference}
        {...properties}
      />
    )
  }
)

InputUi.displayName = "Input"

export { InputUi }
