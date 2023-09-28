import flex from './flex'
import { StyleType } from './type'
import { getStyleRank } from './style-rank'

// filter style => sort style => transform style => map to class name
const rules = [...flex]

export const getClassName = (key: string, value: string) => {
  const rule = rules.find(rule => rule.key === key && rule.value === value)
  
  return rule ? rule.className : {
    key,
    value
  }
}

export const sortStyles = (styles: StyleType[]) => {
  const res = [...styles]
  res.sort((a, b) => {
    const rankA = getStyleRank(a.key)
    const rankB = getStyleRank(b.key)
    return rankA - rankB
  })
  return res
}