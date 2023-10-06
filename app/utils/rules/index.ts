import flex from './config/flex'
import parseStyle from 'style-to-object'
import { StyleType } from './type'
import { getStyleRank } from './style-rank'
import { ignoreStyles } from './ignore-style-config'
import transformStyle from './transform-style'
const rules = [...flex]

export const sortStyles = (styles: StyleType[]) => {
  const res = [...styles]
  res.sort((a, b) => {
    const rankA = getStyleRank(a.key)
    const rankB = getStyleRank(b.key)
    return rankA - rankB
  })
  return res
}

export const getClassName = ({key, value}: StyleType) => {
  const rule = rules.find(rule => rule.key === key && rule.value === value)
  return rule ? rule.className : {
    key,
    value
  }
}


/*
* 1. filter style
* 2. transform style
* 3. sort style
* 4. map to class name
*/
export const getClassNames = (styles: string) => {
  const styleObj = parseStyle(styles)
  const styleArr = Object.keys(styleObj).map(key => ({
    key,
    value: styleObj[key]
  })).filter(({key}) => !ignoreStyles.includes(key))
  const transformedStyles = styleArr.map(style => transformStyle(style)).flat(1)
  const sortedStyles = sortStyles(transformedStyles)
  const mappedClassNames = sortedStyles.map(item => getClassName(item))
  const classNames = []
  const unMatchedStyles = []
  // console.log(transformedStyles)
  mappedClassNames.forEach((item) => {
    if(typeof item === 'string') {
      classNames.push(item)
      return
    }
    unMatchedStyles.push(item)
  })
  return {
    classNames,
    unMatchedStyles
  }
}