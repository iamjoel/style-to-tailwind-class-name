const supportRadiusValueAndClassNames = [
  {
    value: '0',
    className: 'rounded-none',
  },
  {
    value: '2px',
    className: 'rounded-sm',
  },
  {
    value: '4px',
    className: 'rounded',
  },
  {
    value: '6px',
    className: 'rounded-md',
  },
  {
    value: '8px',
    className: 'rounded-lg',
  },
  {
    value: '12px',
    className: 'rounded-xl',
  },
  {
    value: '16px',
    className: 'rounded-2xl',
  }
]
const borderRadiusRules = supportRadiusValueAndClassNames.map(({value, className}) => ({
  key: 'border-radius',
  value,
  className,
}))

const supportBorderDirections = ['top', 'bottom', 'left', 'right']
const supportBorderWidthValue = [0, 2, 4, 8]
const border = [
  {
    key: 'border-width',
    value: '1px',
    className: 'border',
  },
  ...supportBorderDirections.map(direction => ({
    key: `border-${direction}-width`,
    value: '1px',
    className: `border-${direction.charAt(0)}`,
  })),
  ...supportBorderWidthValue.map(value => ({
    key: `border-width`,
    value: `${value}px`,
    className: `border-${value}`,
  }))
]
supportBorderDirections.forEach(direction => {
  supportBorderWidthValue.forEach(value => {
    border.push({
      key: `border-width-${direction}-width`,
      value: `${value}px`,
      className: `border-${direction.charAt(0)}-${value}`,
    })
  })
})

const supportBorderStyles = ['solid', 'dashed', 'dotted']
const borderStyle = []
supportBorderStyles.forEach(style => {
  borderStyle.push({
    key: 'border-style',
    value: style,
    className: `border-${style}`,
  })
})

const rules = [
  ...borderRadiusRules,
  ...border,
  ...borderStyle
]

export const dynamicRules = [
  {
    key: 'border-color',
    isColor: true,
    className: 'border-[{value}]',
  }
]
export default rules