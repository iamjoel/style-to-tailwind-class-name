import rules, { dynamicRules } from '@/config/rules'
import parseStyle from './parse-style'
import { StyleType, DynamicRule } from '@/config/rules/type'
import { getStyleRank } from './style-rank'
import { ignoreStyles } from '@/config/ignore-style-config'
import transformStyle from './transform-style'
import { getColorClassName } from './color'

export const sortStyles = (styles: StyleType[]) => {
  const res = [...styles]
  res.sort((a, b) => {
    const rankA = getStyleRank(a.key)
    const rankB = getStyleRank(b.key)
    return rankA - rankB
  })
  return res
}

export const mapToClassName = ({key, value}: StyleType) => {
  const rule = rules.find(rule => rule.key === key && rule.value === value)
  if(rule) 
    return rule.className
  // match dynamic rules. eg: margin: 100px => m-[100px]
  const dynamicRule:DynamicRule = dynamicRules.find(rule => rule.key === key)
  if(dynamicRule) {
    if(dynamicRule.isColor) {
      const colorClassNameInfo = getColorClassName(value)
      if(colorClassNameInfo.isMatched) {
        const className = dynamicRule
          .className
          .replace('{value}', colorClassNameInfo.value)
          .replace(/[\[\]]/g, '')

        return className
      }
    }
    return dynamicRule.className.replace('{value}', value)
  }
  
  return {
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
export const getClassNames = (styles: string, whiteList?: string[]) => {
  const styleObj = parseStyle(styles)
  let styleArr = Object.keys(styleObj).map(key => ({
    key,
    value: styleObj[key]
  })).filter(({key}) => !ignoreStyles.includes(key))
  if(whiteList?.length > 0) {
    styleArr = styleArr.filter(({key}) => whiteList.includes(key))
    // console.log(styleArr)
  }
  const transformedStyles = styleArr.map(style => transformStyle(style)).flat(1)
  const sortedStyles = sortStyles(transformedStyles)
  const mappedClassNames = sortedStyles.map(item => mapToClassName(item))
  const classNames = []
  const unMatchedStyles = []

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