import { getClassName } from "..";

describe('flex', () => {
  test('display: flex', () => {
    expect(getClassName({key: 'display', value: 'flex'})).toEqual('flex')
  })
})