import { LEN_ITEM_VALUE } from "@/config/unit"
const supportValues = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20]
// 'm', 'my', 'mt', 'mb', 'mx', 'ml', 'mr'
const supportKeyAndClassNames = [
  { 
    key: 'margin',
    className: 'm',
  },
  { 
    key: 'margin-y',
    className: 'my',
  },
  { 
    key: 'margin-top',
    className: 'mt',
  },
  { 
    key: 'margin-bottom',
    className: 'mb',
  },
  { 
    key: 'margin-x',
    className: 'mx',
  },
  { 
    key: 'margin-left',
    className: 'ml',
  },
  { 
    key: 'margin-right',
    className: 'mr',
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
    key: 'margin',
    className: 'm-[{value}]',
  },
  {
    key: 'margin-top',
    className: 'mt-[{value}]',
  },
  {
    key: 'margin-bottom',
    className: 'mb-[{value}]',
  },
  {
    key: 'margin-left',
    className: 'ml-[{value}]',
  },
  {
    key: 'margin-right',
    className: 'mr-[{value}]',
  },
]

export default rules
