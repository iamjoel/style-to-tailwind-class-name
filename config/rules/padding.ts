import { LEN_ITEM_VALUE } from "@/config/unit"
const supportValues = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20]
// 'p', 'py', 'pt', 'pb', 'px', 'pl', 'pr'
const supportKeyAndClassNames = [
  { 
    key: 'padding',
    className: 'p',
  },
  { 
    key: 'padding-y',
    className: 'py',
  },
  { 
    key: 'padding-top',
    className: 'pt',
  },
  { 
    key: 'padding-bottom',
    className: 'pb',
  },
  { 
    key: 'padding-x',
    className: 'px',
  },
  { 
    key: 'padding-left',
    className: 'pl',
  },
  { 
    key: 'padding-right',
    className: 'pr',
  },
]
const rules = []

supportKeyAndClassNames.forEach(({key, className}) => {
  supportValues.forEach(value => {
    rules.push({
      key,
      value: `${value * LEN_ITEM_VALUE}px`,
      className: `${className}-${value}`,
    })
    if(value === 0) {
      rules.push({
        key,
        value: `${value}`,
        className: `${className}-0`,
      })
    }
  })
})

export const dynamicRules = [
  {
    key: 'padding',
    className: 'p-[{value}]',
  },
  {
    key: 'padding-top',
    className: 'pt-[{value}]',
  },
  {
    key: 'padding-bottom',
    className: 'pb-[{value}]',
  },
  {
    key: 'padding-left',
    className: 'pl-[{value}]',
  },
  {
    key: 'padding-right',
    className: 'pr-[{value}]',
  },
]

export default rules
