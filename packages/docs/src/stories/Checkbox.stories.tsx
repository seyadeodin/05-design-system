import type { StoryObj, Meta } from '@storybook/react'
import { Box, Text, Checkbox, CheckboxProps } from '@ignite-ui/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '$2',
          }}
        >
          {Story()}
          <Text size="sm">Accept terms of use</Text>
        </Box>
      )
    },
  ],
  // decorators allow  customize our component view
  // we pass a Story object and we can use stitch options to transform our box in a label and apply new css options over it
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    placeholder: 'Type your name',
  },
}
