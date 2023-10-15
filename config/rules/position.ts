import { LEN_ITEM_VALUE } from "@/config/unit"

const position = ['static', 'fixed', 'absolute', 'relative', 'sticky']
  .map(value => ({
    key: 'position',
    value,
    className: value,
  }))

const zIndex = [0, 10, 20, 30, 40, 50]
  .map(value => ({
    key: 'z-index',
    value: `${value}`,
    className: `z-${value}`,
  }))

const directions = ['top', 'bottom', 'left', 'right']
const supportValues = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20]
const directionsRules = []
directions.forEach(direction => {
  supportValues.forEach(value => {
    directionsRules.push({
      key: direction,
      value: `${value * LEN_ITEM_VALUE}px`,
      className: `${direction}-${value}`,
    })
    if(value === 0) {
      directionsRules.push({
        key: direction,
        value: `${value}`,
        className: `${direction}-0`,
      })
    }
  })
})

const rules = [
  ...position,
  ...zIndex,
  ...directionsRules
]

export default rules