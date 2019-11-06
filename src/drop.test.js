/* global describe, it, expect */

import drop from './drop'

describe('drop', () => {
  it('takes all but the first `n` elements from a list if `n` is positive', () => {
    expect( drop(0, [1, 2, 3]) ).toStrictEqual([1, 2, 3])
    expect( drop(1, [1, 2, 3]) ).toStrictEqual([2, 3])
    expect( drop(3, [1, 2, 3]) ).toStrictEqual([])
    expect( drop(4, [1, 2, 3]) ).toStrictEqual([])
  })

  it('takes all but the last `n` elements from a list if `n` is negative', () => {
    expect( drop(-1, [1, 2, 3]) ).toStrictEqual([1, 2])
    expect( drop(-3, [1, 2, 3]) ).toStrictEqual([])
    expect( drop(-4, [1, 2, 3]) ).toStrictEqual([])
  })

  it('can operate on strings', () => {
    expect( drop(0, 'abc') ).toBe('abc')
    expect( drop(1, 'abc') ).toBe('bc')
    expect( drop(3, 'abc') ).toBe('')
    expect( drop(4, 'abc') ).toBe('')
    expect( drop(-1, 'abc') ).toBe('ab')
    expect( drop(-3, 'abc') ).toBe('')
    expect( drop(-4, 'abc') ).toBe('')
  })

  it('dispatches to objects that implement `drop`', () => {
    const obj = { drop: () => 'dispatched' }
    expect( drop(0, obj) ).toBe('dispatched')
  })
})
