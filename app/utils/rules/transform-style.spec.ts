import transformStyle from './transform-style'

describe('transform style', () => {
  test('direction: 1 value', () => {
    expect(transformStyle({
      key: 'margin',
      value: '8px'
    })).toEqual([{
      key: 'margin',
      value: '8px'
    }])
  })

  test('direction: 2 value', () => {
    expect(transformStyle({
      key: 'margin',
      value: '4px 8px'
    })).toEqual([
      {
        key: 'margin-y',
        value: '4px'
      },
      {
        key: 'margin-x',
        value: '8px'
      },
    ])
  })

  test('direction: 3 value', () => {
    expect(transformStyle({
      key: 'margin',
      value: '4px 6px 8px'
    })).toEqual([
      {
        key: 'margin-top',
        value: '4px'
      },
      {
        key: 'margin-bottom',
        value: '8px'
      },
      {
        key: 'margin-x',
        value: '6px'
      },
    ])
  })

  test('direction: 4 value', () => {
    expect(transformStyle({
      key: 'margin',
      value: '4px 6px 8px 12px'
    })).toEqual([
      {
        key: 'margin-top',
        value: '4px'
      },
      {
        key: 'margin-bottom',
        value: '8px'
      },
      {
        key: 'margin-left',
        value: '12px'
      },
      {
        key: 'margin-right',
        value: '6px'
      },
    ])
  })

  test('not find', () => {
    expect(transformStyle({
      key: 'xxx',
      value: '3px 4px'
    })).toEqual([
      {
        key: 'xxx',
        value: '3px 4px'
      }
    ])
  })
})