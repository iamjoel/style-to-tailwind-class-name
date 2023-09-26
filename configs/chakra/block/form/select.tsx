'use client'
import React from 'react'
import { ComponentConfig } from "@measured/puck"
import { FormControl, FormLabel, Select } from '@chakra-ui/react'

type Option = {
  id: string | number
  name: string
}

const OptionConfig = {
  id: {
    type: "text",
    label: 'ID'
  },
  name: {
    type: "text",
    label: '名称'
  }
}
export type SelectProps = {
  options: Option[]
}

const SelectConfig: ComponentConfig<SelectProps> = {
  fields: {
    options: {
      type: "array",
      label: 'Options',
      arrayFields: OptionConfig as any
    },
  },
  defaultProps: {
    options: []
  },
  render: ({ options }) => (
    <Select value='Select' placeholder='Select ...' size='md'>
      {options.map(item => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ))}
    </Select>
  )
}

export type WithLabelSelectProps = SelectProps & {
  label: string
}

export const WithLabelSelectConfig: ComponentConfig<WithLabelSelectProps> = {
  fields: {
    label: { type: "text" },
    options: {
      type: "array",
      label: 'Options',
      arrayFields: OptionConfig as any
    },
  },
  defaultProps: {
    label: 'Label',
    options: [{
      id: 1,
      name: 'opt1'
    }]
  },
  render: ({ label, options }) => (
    <FormControl className='my-1 flex items-center'>
      <FormLabel className='!mb-0 !mr-2 shrink-0'>{label}</FormLabel>
      <Select placeholder='Select...'>
        {options.map(item => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </Select>
    </FormControl>
  )
}

export default SelectConfig
