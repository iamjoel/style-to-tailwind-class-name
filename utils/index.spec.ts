import { mapToClassName, sortStyles, getClassNames } from ".";

describe('get class name', () => {
  test('find class name', () => {
    expect(mapToClassName({key: 'display', value: 'flex'})).toEqual('flex')
  })

  test('not find class name', () => {
    expect(mapToClassName({key: 'display', value: 'abc'})).toEqual({
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

  test('position', () => {
    ['static', 'fixed', 'absolute', 'relative', 'sticky'].forEach(value => {
      expect(getClassNames(`
        position: ${value};
      `)).toEqual({
        classNames: [
          value
        ],
        unMatchedStyles: []
      })
    })

    expect(getClassNames(`
      z-index: 10;
    `)).toEqual({
      classNames: [
        'z-10'
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      top: 4px; bottom: 6px; left: 8px;right: 10px;
    `)).toEqual({
      classNames: [
        'top-1', 'bottom-1.5', 'left-2', 'right-2.5'
      ],
      unMatchedStyles: []
    })
  })

  test('margin', () => {
    expect(getClassNames(`
      margin: 8px;
    `)).toEqual({
      classNames: [
        'm-2',
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      margin: 8px 4px;
    `)).toEqual({
      classNames: [
        'my-2', 'mx-1'
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      margin-top: 8px;
      margin-bottom: 16px;
      margin-left: 6px;
      margin-right: 4px;
    `)).toEqual({
      classNames: [
        'mt-2', 'mb-4', 'ml-1.5', 'mr-1'
      ],
      unMatchedStyles: []
    })
  })

  test('padding', () => {
    expect(getClassNames(`
      padding: 8px;
    `)).toEqual({
      classNames: [
        'p-2',
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      padding: 8px 4px;
    `)).toEqual({
      classNames: [
        'py-2', 'px-1'
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      padding-top: 8px;
      padding-bottom: 16px;
      padding-left: 6px;
      padding-right: 4px;
    `)).toEqual({
      classNames: [
        'pt-2', 'pb-4', 'pl-1.5', 'pr-1'
      ],
      unMatchedStyles: []
    })
  })
})
