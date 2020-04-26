import { foo } from '../../src/scratch'

describe('foo', () => {
  it('ベーシックケース', async () => {
    const actual = foo('hello')
    expect(actual).toBe('hello')
  })
})
