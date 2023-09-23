import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-end justify-center rounded-md ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary-500 text-text-500 hover:bg-primary-300",
        secondary: "bg-secondary-500 text-text-500 hover:bg-secondary-300",
        outline: "bg-text-500 border border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-text-500",
        link: "bg-transparent text-text-500 hover:text-primary-500"
      },
      size: {
        lg: "h-14 px-6 py-3 gap-x-2 button-lg",
        md: "h-12 px-5 py-3 gap-x-2 button-md",
        sm: "h-10 px-4 py-2 gap-x button-sm",
        icon: "h-11 w-11"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "md"
    }
  }
)

export interface ButtonProperties
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const ButtonUi = React.forwardRef<HTMLButtonElement, ButtonProperties>(
  ({ className, variant, size, asChild = false, ...properties }, reference) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={reference}
        {...properties}
      />
    )
  }
)
ButtonUi.displayName = "Button"

export { ButtonUi, buttonVariants }
