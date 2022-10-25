import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@ignite-ui/react'

export default {
  title: 'Form/Text input',
  component: TextInput,
  args: {},
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const CustomTag: StoryObj<TextInputProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}

// export const Big: StoryObj<ButtonProps> = {
//   args: {
//     size: 'big',
//   },
// }
