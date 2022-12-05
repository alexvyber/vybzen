import { cva, VariantProps } from "class-variance-authority"
import clsx from "clsx"

// --

export const className =
  "inline-flex gap-2 justify-center items-center py-2 px-3 text-sm rounded-md transition active:transition-none outline-offset-2"

export const buttonStyles = cva(className, {
  variants: {
    intent: {
      primary:
        "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
      secondary:
        "bg-zinc-50 font-medium text-zinc-900 hover:bg-zinc-100 active:bg-zinc-100 active:text-zinc-900/60 dark:bg-zinc-800/50 dark:text-zinc-300 dark:hover:bg-zinc-800 dark:hover:text-zinc-50 dark:active:bg-zinc-800/50 dark:active:text-zinc-50/70",
    },
    rounded: {
      full: "rounded-full",
      brand: "rounded-[13px]",
    },
  },
  defaultVariants: {
    intent: "primary",
    rounded: "brand",
  },
})

// --

export interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonStyles> {}

export const Button = ({
  intent,
  children,
  rounded,
  className,
  ...props
}: Props) => {
  return (
    <button
      className={clsx(buttonStyles({ intent, rounded }), className)}
      {...props}
    >
      {children}
    </button>
  )
}
