import { getClassName } from ".";

describe('flex', () => {
  test('display: flex', () => {
    expect(getClassName('display', 'flex')).toEqual('flex')
  })
})