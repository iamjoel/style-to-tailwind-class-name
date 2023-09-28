import { getClassName, sortStyles } from ".";

describe('get class name', () => {
  test('find class name', () => {
    expect(getClassName('display', 'flex')).toEqual('flex')
  })

  test('not find class name', () => {
    expect(getClassName('display', 'abc')).toEqual({
      key: 'display',
      value: 'abc'
    })
  })
})

describe('sort styles', () => {
  test('sort styles', () => {
    expect(sortStyles([
      {key: 'padding', value: '12px'},
      {key: 'font-size', value: '13px'},
      {key: 'color', value: '#9CA3AF'},
      {key: 'margin-left', value: '8px'},
      {key: 'display', value: 'flex'},
      {key: 'height', value: '8px'},
      {key: 'align-items', value: 'center'},
      {key: 'margin-right', value: '8px'},
      {key: 'margin-top', value: '4px'}
    ])).toEqual([
      {key: 'margin-top', value: '4px'},
      {key: 'margin-left', value: '8px'},
      {key: 'margin-right', value: '8px'},
      {key: 'display', value: 'flex'},
      {key: 'align-items', value: 'center'},
      {key: 'height', value: '8px'},
      {key: 'padding', value: '12px'},
      {key: 'font-size', value: '13px'},
      {key: 'color', value: '#9CA3AF'},
    ])
  })
})

