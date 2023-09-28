import { getClassName, sortStyles, getClassNames } from ".";

describe('get class name', () => {
  test('find class name', () => {
    expect(getClassName({key: 'display', value: 'flex'})).toEqual('flex')
  })

  test('not find class name', () => {
    expect(getClassName({key: 'display', value: 'abc'})).toEqual({
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

// margin: 8px;
// padding: 12px;
// font-size: 13px;
// color: #9CA3AF;
// height: 8px;
// integrated test
describe('get class names', () => {
  test('get class names', () => {
    expect(getClassNames(`
      display: flex;
      align-items: center;
    `)).toEqual({
      classNames: [
        'flex',
        'items-center',
        // 'm-8',
        // 'p-12',
        // 'text-13',
        // 'text-#9CA3AF',
        // 'h-8'
      ],
      unMatchedStyles: []
    })
  })

})
