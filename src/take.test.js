/* global describe, it, expect */

import take from './take'

describe('take', () => {
  it('takes the first `n` elements from a list if `n` is positive', () => {
    expect( take(0, [1, 2, 3]) ).toStrictEqual([])
    expect( take(1, [1, 2, 3]) ).toStrictEqual([1])
    expect( take(3, [1, 2, 3]) ).toStrictEqual([1, 2, 3])
    expect( take(4, [1, 2, 3]) ).toStrictEqual([1, 2, 3])
  })

  it('takes the last `n` elements from a list if `n` is negative', () => {
    expect( take(-1, [1, 2, 3]) ).toStrictEqual([3])
    expect( take(-3, [1, 2, 3]) ).toStrictEqual([1, 2, 3])
    expect( take(-4, [1, 2, 3]) ).toStrictEqual([1, 2, 3])
  })

  it('can operate on strings', () => {
    expect( take(0, 'abc') ).toBe('')
    expect( take(1, 'abc') ).toBe('a')
    expect( take(3, 'abc') ).toBe('abc')
    expect( take(4, 'abc') ).toBe('abc')
    expect( take(-1, 'abc') ).toBe('c')
    expect( take(-3, 'abc') ).toBe('abc')
    expect( take(-4, 'abc') ).toBe('abc')
  })

  it('dispatches to objects that implement `take`', () => {
    const obj = { take: () => 'dispatched' }
    expect( take(0, obj) ).toBe('dispatched')
  })
})
