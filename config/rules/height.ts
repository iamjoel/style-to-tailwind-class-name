import { LEN_ITEM_VALUE } from "@/config/unit"
const supportValues = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20]
const supportPercents = [
  {
    value: '50%',
    className: 'h-1/2',
  },
  {
    value: '25%',
    className: 'h-1/4',
  },
  {
    value: '75%',
    className: 'h-3/4',
  },
  {
    value: '100%',
    className: 'h-full',
  },
]
const height = [
  {
    key: 'height',
    value: '100vh',
    className: 'h-screen',
  }
]

supportValues.forEach(value => {
  height.push({
    key: 'height',
    value: `${value * LEN_ITEM_VALUE}px`,
    className: `h-${value}`,
  })
})

supportPercents.forEach(({value, className}) => {
  height.push({
    key: 'height',
    value,
    className,
  })
})

const rules = [...height, ...supportPercents]

export const dynamicRules = [
  {
    key: 'height',
    className: 'h-[{value}]',
  },
  {
    key: 'min-height',
    className: 'min-h-[{value}]',
  },
  {
    key: 'max-height',
    className: 'max-h-[{value}]',
  },
]

export default rules