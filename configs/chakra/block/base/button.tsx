'use client'
import React from 'react'
import { ComponentConfig } from "@measured/puck"
import { Button } from '@chakra-ui/react'

export enum ButtonSize {
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}

export const buttonField = {
  text: { type: "text" },
  size: {
    type: "select", options: [
      {
        label: "Extra Small",
        value: ButtonSize.xs,
      },
      {
        label: "Small",
        value: ButtonSize.sm,
      },
      {
        label: "Medium",
        value: ButtonSize.md,
      },
      {
        label: "Large",
        value: ButtonSize.lg,
      },
    ]
  },
}

export type ButtonProps = {
  text: string
  size: ButtonSize
}

const ButtonConfig: ComponentConfig<ButtonProps> = {
  fields: buttonField as any,
  defaultProps: {
    text: "Button",
    size: ButtonSize.md,
  },
  render: ({ text, size }) => (
    <Button
      size={size}
      colorScheme='blue'
    >
      {text}
    </Button>
  )
}
export default ButtonConfig
