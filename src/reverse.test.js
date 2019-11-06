/* global describe, it, expect */

import reverse from './reverse'

describe('reverse', () => {
  it('reverses arrays', () => {
    expect( reverse([]) ).toStrictEqual([])
    expect( reverse([1]) ).toStrictEqual([1])
    expect( reverse([1, 2, 3]) ).toStrictEqual([3, 2, 1])
  })

  it('reverses strings', () => {
    expect( reverse('') ).toBe('')
    expect( reverse('a') ).toBe('a')
    expect( reverse('abc') ).toBe('cba')
  })
})
