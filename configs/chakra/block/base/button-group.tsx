import React from 'react'
import { ComponentConfig } from "@measured/puck"
import { buttonField, ButtonSize, ButtonProps } from './button'
import { ButtonGroup, Button } from '@chakra-ui/react'

export type ButtonGroupProps = {
  items: ButtonProps[]
}
const ButtonGroupConfig: ComponentConfig<ButtonGroupProps> = {
  fields: {
    items: {
      type: "array",
      label: 'Button',
      arrayFields: buttonField as any
    },
  },
  defaultProps: {
    items: [
      {
        text: "Button",
        size: ButtonSize.md,
      },
    ],
  },
  render: ({ items }) => (
    <ButtonGroup spacing='6'>
      {items.map((item, index) => (
        <Button
          key={index}
          size={item.size}
          colorScheme='blue'
        >
          {item.text}
        </Button>
      ))}
    </ButtonGroup>
  )
}

export default ButtonGroupConfig
