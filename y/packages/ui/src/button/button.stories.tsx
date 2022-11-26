import { Button } from '.'

import type { Props } from '.'
import type { Story } from '@ladle/react'

export default {
  title: 'Button',
}

export const Default: Story<Props> = (args) => <Button {...args} />
Default.args = {
  intent: 'primary',
  children: 'It was easy!',
  rounded: 'full',
  href: '#',
} as Props
