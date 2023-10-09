import { StyleType } from '@/config/rules/type'

// short name to full: margin, padding, border, flex, position, display, font, color, background,
const transformStyle = ({key, value}: StyleType) => {
  if(['margin', 'padding'].includes(key)) {
    return transformDirection({key, value})
  }
  if(key === 'border') {
    return parseBorder({key, value})
  }
  if(key === 'background') {
    return parseBackground({key, value})
  }
  return [{key, value}]
}

export const transformDirection = ({key, value}: StyleType) => {
  
  const directions = value.split(' ')
  if(directions.length === 1) {
    return [
      {
        key,
        value
      },
    ]
  }

  if(directions.length === 2) {
    return [
      {
        key: `${key}-y`,
        value: directions[0]
      },
      {
        key: `${key}-x`,
        value: directions[1]
      },
    ]
  }

  if(directions.length === 3) {
    return [
      {
        key: `${key}-top`,
        value: directions[0]
      },
      {
        key: `${key}-bottom`,
        value: directions[2]
      },
      {
        key: `${key}-x`,
        value: directions[1]
      },
    ]
  }

  if(directions.length === 4) {
    return [
      {
        key: `${key}-top`,
        value: directions[0]
      },
      {
        key: `${key}-bottom`,
        value: directions[2]
      },
      {
        key: `${key}-left`,
        value: directions[3]
      },
      {
        key: `${key}-right`,
        value: directions[1]
      },
    ]
  }
}

export const parseBorder = ({key, value}: StyleType) => {
  const values = value.split(' ')
  const res = [
    {
      key: 'border-width',
      value: values[0],
    }
  ]
  if(values[1] && values[1] !== 'solid') {
    res.push({
      key: 'border-style',
      value: values[1],
    })
  }
  const color = values.find(isColor)
  if(color) {
    res.push({
      key: 'border-color',
      value: color,
    })
  }

  return res
}


export const parseBackground = ({key, value}: StyleType) => {
  const values = value.split(' ')
  const res = []
  const color = values.find(isColor)
  if(color) {
    res.push({
      key: 'background-color',
      value: color,
    })
  }
  return res
}

function isColor(value) {
  if(value.startsWith('#') || value.startsWith('rgb') || /^\[a-z]$/) {
    return true
  }
}

export default transformStyle