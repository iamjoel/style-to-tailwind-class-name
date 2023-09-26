'use client'
import React from 'react'
import { ComponentConfig } from "@measured/puck"
import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
} from '@chakra-ui/react'

export type NumberInputProps = {
  text: string
}

const NumberInputConfig: ComponentConfig<NumberInputProps> = {
  fields: {
    text: { type: "text" },
  },
  defaultProps: {
    text: "NumberInput",
  },
  render: ({ text }) => (
    <NumberInput
    >
      <NumberInputField />
      <NumberInputStepper>
        <NumberIncrementStepper />
        <NumberDecrementStepper />
      </NumberInputStepper>
    </NumberInput>
  )
}

export type WithLabelNumberInputProps = {
  label: string
}

export const WithLabelNumberInputConfig: ComponentConfig<WithLabelNumberInputProps> = {
  fields: {
    label: { type: "text" },
  },
  defaultProps: {
    label: 'Label',
  },
  render: ({ label }) => (
    <FormControl className='my-1 flex items-center'>
      <FormLabel className='!mb-0 !mr-2 shrink-0'>{label}</FormLabel>
      <NumberInput
        className='grow'
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  )
}

export default NumberInputConfig
