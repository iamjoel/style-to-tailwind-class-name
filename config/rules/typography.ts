const supportFontSize = [
  {
    value: '12px',
    className: 'text-xs',
  },
  {
    value: '14px',
    className: 'text-sm',
  },
  {
    value: '16px',
    className: 'text-base',
  },
  {
    value: '18px',
    className: 'text-lg',
  },
  {
    value: '20px',
    className: 'text-xl',
  },
  {
    value: '24px',
    className: 'text-2xl',
  },
]

const supportFontWeights = [
  {
    value: '400',
    className: 'font-normal',
  },
  {
    value: '500',
    className: 'font-medium',
  },
  {
    value: '600',
    className: 'font-semibold',
  },
  {
    value: '700',
    className: 'font-bold',
  },
]

const supportTextTransform = ['uppercase', 'capitalize']

const supportLineHeights = [
  {
    value: '16px',
    className: 'leading-4',
  },
  {
    value: '20px',
    className: 'leading-5',
  },
  {
    value: '24px',
    className: 'leading-6',
  },
  {
    value: '1',
    className: 'leading-none',
  },
  {
    value: '1.25',
    className: 'leading-tight',
  },
  {
    value: '1.375',
    className: 'leading-snug',
  },
  {
    value: '1.5',
    className: 'leading-normal',
  },
  {
    value: '1.625',
    className: 'leading-relaxed',
  },
  {
    value: '2',
    className: 'leading-loose',
  },
]

const supportTextAlign = ['left', 'center', 'right', 'justify']

const supportColors = [
  {
    value: '#fff',
    className: 'text-white',
  },
  {
    value: '#000',
    className: 'text-black',
  }
]
const fontSize = []
supportFontSize.forEach(({value, className}) => {
  fontSize.push({
    key: 'font-size',
    value,
    className,
  })
})

const fontWeight = []
supportFontWeights.forEach(({value, className}) => {
  fontWeight.push({
    key: 'font-weight',
    value,
    className,
  })
})

const textTransform = []
supportTextTransform.forEach(value => {
  textTransform.push({
    key: 'text-transform',
    value,
    className: value,
  })
})

const lineHeight = []
supportLineHeights.forEach(({value, className}) => {
  lineHeight.push({
    key: 'line-height',
    value,
    className,
  })
})

const textAlign = []
supportTextAlign.forEach(value => {
  textAlign.push({
    key: 'text-align',
    value,
    className: `text-${value}`,
  })
})

const color = []
supportColors.forEach(({value, className}) => {
  color.push({
    key: 'color',
    value,
    className,
  })
})

const rules = [
  ...fontSize,
  ...fontWeight,
  ...lineHeight,
  ...textTransform,
  ...textAlign,
  ...color
]

export const dynamicRules = [
  {
    key: 'font-size',
    className: 'text-[{value}]',
  },
  {
    key: 'line-height',
    className: 'leading-[{value}]',
  },
  {
    key: 'color',
    isColor: true,
    className: 'text-[{value}]',
  }
]
export default rules
