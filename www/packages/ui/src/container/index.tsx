import type { VariantProps } from "class-variance-authority"
import { cva } from "class-variance-authority"

// --

const classes = cva("mx-auto sm:px-6 lg:px-8", {
  variants: {
    mobilePadding: {
      true: "px-1.5 xs:px-2 2xs:px-4",
    },
    wide: {
      false: "max-w-7xl",
      true: "w-full",
    },
  },
  defaultVariants: {
    mobilePadding: true,
    wide: false,
  },
})

// --

interface Props extends VariantProps<typeof classes> {
  as?: keyof JSX.IntrinsicElements
}

export const Container = ({
  as: Component = "div",
  children,
  mobilePadding = true,
  wide = false,
}: React.PropsWithChildren<Props>) => {
  return (
    <Component className={classes({ mobilePadding, wide })}>
      {children}
    </Component>
  )
}
