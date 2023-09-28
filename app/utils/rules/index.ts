import flex from './flex'
import parseStyle from 'style-to-object'
import { StyleType } from './type'
import { getStyleRank } from './style-rank'
import { ignoreStyles } from './ignore-style-config'

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

export const transformStyles = (styles: StyleType[]) => {
  // TODO: transform styles.
  // short name to full: margin, padding, border, flex, position, display, font, color, background,
  return styles
}

export const getClassName = ({key, value}: StyleType) => {
  const rule = rules.find(rule => rule.key === key && rule.value === value)
  return rule ? rule.className : {
    key,
    value
  }
}


// filter style => sort style => transform style => map to class name
export const getClassNames = (styles: string) => {
  const styleObj = parseStyle(styles)
  const styleArr = Object.keys(styleObj).map(key => ({
    key,
    value: styleObj[key]
  })).filter(({key}) => !ignoreStyles.includes(key))
  const sortedStyles = sortStyles(styleArr)
  const transformedStyles = transformStyles(sortedStyles)
  const mappedClassNames = transformedStyles.map(item => getClassName(item))
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