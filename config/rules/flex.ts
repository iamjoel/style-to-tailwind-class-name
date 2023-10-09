const flex = [
  {
    key: 'display',
    value: 'flex',
    className: 'flex'
  }
]

const supportAlignItems = [
  {
    value: 'flex-start',
    className: 'items-start'
  },
  {
    value: 'center',
    className: 'items-center'
  },
  {
    value: 'flex-end',
    className: 'items-end'
  },
  {
    value: 'baseline',
    className: 'items-baseline'
  },
  {
    value: 'stretch',
    className: 'items-stretch'
  }
]

const supportJustifyContents = [
  {
    value: 'flex-start',
    className: 'justify-start'
  },
  {
    value: 'center',
    className: 'justify-center'
  },
  {
    value: 'flex-end',
    className: 'justify-end'
  },
  {
    value: 'space-between',
    className: 'justify-between'
  },
  {
    value: 'space-around',
    className: 'justify-around'
  },
  {
    value: 'space-evenly',
    className: 'justify-evenly'
  }
]

const alignItems = []
supportAlignItems.forEach(({value, className}) => {
  alignItems.push({
    key: 'align-items',
    value,
    className,
  })
})


const justifyContent = []
supportJustifyContents.forEach(({value, className}) => {
  justifyContent.push({
    key: 'justify-content',
    value,
    className,
  })
})


const rules = [
  ...flex,
  ...alignItems,
  ...justifyContent
]

export default rules