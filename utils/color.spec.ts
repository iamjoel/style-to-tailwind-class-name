import { isValidColor, toHexColor, getColorClassName } from './color'

describe('Color', () => {
  test('color class name', () => {
    expect(getColorClassName('#FCFCFD')).toEqual({
      isMatched: true,
      value: 'gray-25'
    })
    expect(getColorClassName('#9CA3AF')).toEqual({
      isMatched: true,
      value: 'gray-400'
    })
    expect(getColorClassName('#fff')).toEqual({
      isMatched: false,
      value: '#FFFFFF'
    })
  })
  test('to hex', () => {
    expect(toHexColor('white')).toBe('#FFFFFF')
    expect(toHexColor('rgb(255, 255, 255)')).toBe('#FFFFFF')
    expect(toHexColor('rgba(255, 255, 255, 1)')).toBe('#FFFFFF')
    expect(toHexColor('#fff')).toBe('#FFFFFF')
    expect(toHexColor('#ffffff')).toBe('#FFFFFF')
  })

  test('invalid color', () => {
    expect(isValidColor('invalid color')).toBe(false)
  })
})