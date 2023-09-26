'use client'
import React from 'react'
import { ComponentConfig } from "@measured/puck"
import { FormControl, FormLabel, Input } from '@chakra-ui/react'

export type InputProps = {
}

const InputConfig: ComponentConfig<InputProps> = {
  fields: {
    text: { type: "text" },
  },
  defaultProps: {
  },
  render: () => (
    <Input value='Input' placeholder='Input ...' size='md' />
  )
}

export type WithLabelInputProps = {
  label: string
}

export const WithLabelInputConfig: ComponentConfig<WithLabelInputProps> = {
  fields: {
    label: { type: "text" },
  },
  defaultProps: {
    label: 'Label',
  },
  render: ({ label }) => (
    <FormControl className='my-1 flex items-center'>
      <FormLabel className='!mb-0 !mr-2 shrink-0'>{label}</FormLabel>
      <Input placeholder='input...' />
    </FormControl>
  )
}

export default InputConfig
