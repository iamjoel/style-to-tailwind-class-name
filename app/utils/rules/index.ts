import flex from './flex'
import { getClassNameRank } from './class-name-rank'

const rules = [...flex]

export const getClassName = (key: string, value: string) => {
  const rule = rules.find(rule => rule.key === key && rule.value === value)
  
  return rule ? rule.className : {
    key,
    value
  }
}

export const sortClassNames = (classNames: string[]) => {
  const res = [...classNames]
  // console.log(classNames.map(className => getClassNameRank(className)))
  res.sort((a, b) => {
    const rankA = getClassNameRank(a)
    const rankB = getClassNameRank(b)
    return rankA - rankB
  })
  return res
}