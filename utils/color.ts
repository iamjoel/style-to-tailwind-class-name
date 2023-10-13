import Color from 'color'
import tailwindColors from '@/config/tailwind-color'

// Color: https://www.npmjs.com/package/color
export const isValidColor = (colorStr) => {
  try {
    Color(colorStr)
    return true
  } catch (e) {
    return false
  }
}

export const toHexColor = (colorStr) => {
  if(!isValidColor(colorStr)) {
    return ''
  }
  return Color(colorStr).hex()
}

const colorsClassName = (() => {
  const colors = {}
  Object.keys(tailwindColors).forEach((colorName) => {
    Object.keys(tailwindColors[colorName]).forEach(value => {
      const colorValue = tailwindColors[colorName][value]
      colors[toHexColor(colorValue)] = `${colorName}-${value}`
    })
  })
  return colors
})()

export const getColorClassName = (color) => {
  if(!isValidColor(color)) {
    return {
      isMatched: false,
      value: ''
    }
  }
  const colorValue = toHexColor(color)
  if(!colorsClassName[colorValue]) {
    return {
      isMatched: false,
      value: colorValue
    }
  }
  return {
    isMatched: true,
    value: colorsClassName[colorValue]
  }
}
