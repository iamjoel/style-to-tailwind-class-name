const supportColors = [
  {
    value: '#fff',
    className: 'bg-white',
  },
  {
    value: '#000',
    className: 'bg-black',
  }
]

const backgroundColor = []
supportColors.forEach(({value, className}) => {
  backgroundColor.push({
    key: 'background-color',
    value,
    className,
  })
})
const rules = [...backgroundColor]

export const dynamicRules = [
  {
    key: 'background-color',
    isColor: true,
    className: 'bg-[{value}]',
  }
]

export default rules