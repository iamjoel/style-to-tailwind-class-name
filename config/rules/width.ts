import { LEN_ITEM_VALUE } from "@/config/unit"
const supportValues = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20]
const supportPercents = [
  {
    value: '50%',
    className: 'w-1/2',
  },
  {
    value: '25%',
    className: 'w-1/4',
  },
  {
    value: '75%',
    className: 'w-3/4',
  },
  {
    value: '100%',
    className: 'w-full',
  },
]
const width = [
  {
    key: 'width',
    value: '100vh',
    className: 'w-screen',
  }
]

supportValues.forEach(value => {
  width.push({
    key: 'width',
    value: `${value * LEN_ITEM_VALUE}px`,
    className: `w-${value}`,
  })
})

supportPercents.forEach(({value, className}) => {
  width.push({
    key: 'width',
    value,
    className,
  })
})

const rules = [...width, ...supportPercents]

export const dynamicRules = [
  {
    key: 'width',
    className: 'w-[{value}]',
  },
  {
    key: 'min-width',
    className: 'min-w-[{value}]',
  },
  {
    key: 'max-width',
    className: 'max-w-[{value}]',
  },
]

export default rules