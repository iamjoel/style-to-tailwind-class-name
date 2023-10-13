import { typographyStyle } from "@/config/whitelist-style-config";
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
      margin: 103px;
    `)).toEqual({
      classNames: [
        'm-[103px]',
        'flex',
        'items-center',
      ],
      unMatchedStyles: []
    })
  })

  test('get whitelist', () => {
    expect(getClassNames(`
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 4px 8px;
      width: 100px;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: #f60;
      font-size: 14px;
      text-align: center;
      line-height: 1.5;
      font-weight: 500;
      color: #FCFCFD;
    `, typographyStyle)).toEqual({
      classNames: [
        'leading-normal',
        'text-sm',
        'font-medium',
        'text-gray-25',
      ],
      unMatchedStyles: []
    })
  })

  test('background', () => {
    expect(getClassNames(`
      background-color: #fff;
    `)).toEqual({
      classNames: [
        'bg-white',
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      background-color: #faa;
    `)).toEqual({
      classNames: [
        'bg-[#faa]',
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

  test('border', () => {
    expect(getClassNames(`
      border: 2px solid;
    `)).toEqual({
      classNames: [
        'border-2',
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      border: 2px dashed;
    `)).toEqual({
      classNames: [
        'border-2', 'border-dashed'
      ],
      unMatchedStyles: []
    })
    expect(getClassNames(`
      border-width: 1px; border-style: solid;
    `)).toEqual({
      classNames: [
        'border', 'border-solid'
      ],
      unMatchedStyles: []
    })
  })

  test('height', () => {
    expect(getClassNames(`
      height: 8px;
    `)).toEqual({
      classNames: [
        'h-2',
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      height: 50%;
    `)).toEqual({
      classNames: [
        'h-1/2',
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      height: 17px;
    `)).toEqual({
      classNames: [
        'h-[17px]',
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      min-height: 4px;
    `)).toEqual({
      classNames: [
        'min-h-[4px]',
      ],
      unMatchedStyles: []
    })
  })

  test('width', () => {
    expect(getClassNames(`
      width: 8px;
    `)).toEqual({
      classNames: [
        'w-2',
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      width: 50%;
    `)).toEqual({
      classNames: [
        'w-1/2',
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      width: 17px;
    `)).toEqual({
      classNames: [
        'w-[17px]',
      ],
      unMatchedStyles: []
    })

    expect(getClassNames(`
      min-width: 4px;
    `)).toEqual({
      classNames: [
        'min-w-[4px]',
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

  test('typography', () => {
    expect(getClassNames(`
      font-size: 12px;
      font-weight: 700;
      line-height: 16px;
      text-align: center;
    `)).toEqual({
      classNames: [
        'leading-4', 'text-center', 'text-xs', 'font-bold', 
      ],
      unMatchedStyles: []
    })
  })

})
