import { Button } from "."

import type { Story } from "@ladle/react"
import type { Props } from "./button"

export default {
  title: "Button/Default",
}

export const Default: Story<Props> = (args) => <Button {...args} />
Default.args = {
  intent: "primary",
  children: "It was easy!",
  rounded: "full",
} satisfies Props

Default.argTypes = {
  intent: {
    options: ["primary", "secondary"],
    control: { type: "radio" },
    defaultValue: "primary",
  },

  rounded: {
    options: ["full", "brand"],
    control: { type: "radio" },
    defaultValue: "full",
  },
}
