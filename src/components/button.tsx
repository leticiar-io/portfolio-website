import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-sm text-base font-light ring-offset-background transition-all duration-250 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 tracking-wide",
  {
    variants: {
      variant: {
        default:
          "bg-black-800 text-white hover:px-10 transition-all duration-300 ease-in-out",
        stroke:
          "bg-transparent text-black-700 border-3 border-black-700 hover:bg-black-800 hover:px-10 hover:text-white hover:border-0 transition-all duration-250 ease-in-out",
        simpleStroke:
          "bg-transparent text-black-700 border-3 border-black-700 hover:bg-black-800 hover:px-10 hover:text-white hover:border-0 transition-all duration-250 ease-in-out",
        whiteStroke:
          "bg-transparent text-gray-200 border-3 border-gray-200 hover:bg-white hover:px-10 hover:text-black-600 hover:border-0 transition-all duration-250 ease-in-out",
      },
      size: {
        default: "h-14 px-8 py-2",
        small: "h-12 px-6 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
