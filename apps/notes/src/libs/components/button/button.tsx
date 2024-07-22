import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

const buttonVariants = cva(
  "text-primary inline-flex h-[39px] w-[112px] items-center justify-center rounded duration-75 active:scale-95",
  {
    variants: {
      variant: {
        danger: "bg-red-300",
        success: "bg-green-300",
      },
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={buttonVariants({ variant, className })}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
