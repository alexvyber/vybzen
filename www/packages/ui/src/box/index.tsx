import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

// --

const className = "my-2 sm:my-8 md:my-12 lg:my-20 xl:my-32 xs:my-4 2xs:my-6"

const classes = cva(className, {
  variants: {},
  defaultVariants: {},
})

// --

interface Props extends VariantProps<typeof classes> {
  as?: keyof JSX.IntrinsicElements
}

export const Box = ({
  as: Component = "div",
  children,
}: React.PropsWithChildren<Props>) => {
  return <Component className={classes({})}>{children}</Component>
}
