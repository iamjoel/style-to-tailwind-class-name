import { StyleType } from '@/config/rules/type'

// short name to full: margin, padding, border, flex, position, display, font, color, background,
const transformStyle = ({key, value}: StyleType) => {
  if(['margin', 'padding'].includes(key)) {
    return transformDirection({key, value})
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

export default transformStyle