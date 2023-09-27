import { getClassName, sortClassNames } from ".";

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

describe('sort class names', () => {
  test('sort class names', () => {
    expect(sortClassNames('p-3 text-[13px] text-gray-500 space-x-2 flex h-2 items-center mr-2 my-1'.split(' ')).join(' '))
    .toEqual('my-1 mr-2 flex items-center h-2 p-3 text-[13px] text-gray-500 space-x-2')
  })
})

