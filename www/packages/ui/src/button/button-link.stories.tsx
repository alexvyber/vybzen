import { ButtonLink } from "."

import type { Story } from "@ladle/react"
import type { Props } from "./button-link"

export default {
  title: "Button/ButtonLink",
}

export const Default: Story<Props> = (args) => <ButtonLink {...args} />
Default.args = {
  intent: "primary",
  children: "It was easy!",
  rounded: "full",
  href: "#",
  as: "a",
} satisfies Props
