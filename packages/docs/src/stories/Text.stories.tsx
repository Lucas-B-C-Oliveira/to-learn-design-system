import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@herkulys-ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children:
      ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam non maxime ratione porro iusto, eligendi qui explicabo facilis, sed possimus unde. Aliquid voluptatibus facere, illo maxime earum fugiat doloribus aliquam?',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
