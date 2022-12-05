import Link from "next/link"
import clsx from "clsx"

import { buttonStyles, type Props as ButtonProps } from "./button"

// --

export interface Props extends ButtonProps {
  href: string
  as: "a" | typeof Link
}

export const ButtonLink = ({
  intent,
  children,
  rounded,
  href,
  className,
  as: Component = "a",
  ...props
}: Props) => (
  <Component
    href={href}
    className={clsx(buttonStyles({ intent, rounded }), className)}
    {...props}
  >
    {children}
  </Component>
)
