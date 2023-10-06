import { mapToClassName } from "@/utils";

describe('flex', () => {
  test('display: flex', () => {
    expect(mapToClassName({key: 'display', value: 'flex'})).toEqual('flex')
  })
})