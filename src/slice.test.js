/* global describe, it, expect */

import slice from './slice'

describe('slice', () => {
  it('retrives the proper sublist of a list', () => {
    const list = [1, 3, 5, 2, 4, 6]
    expect( slice(2, 5, list) ).toStrictEqual([5, 2, 4])
  })

  it('handles array-like objects', () => {
    const args = (function() { return arguments })(1, 2, 3, 4, 5)
    expect( slice(1, 4, args) ).toStrictEqual([2, 3, 4])
  })

  it('works on strings', () => {
    expect( slice(0, 0, 'abc') ).toBe('')
    expect( slice(0, 3, 'abc') ).toBe('abc')
    expect( slice(0, 4, 'abc') ).toBe('abc')
    expect( slice(0, -1, 'abc') ).toBe('ab')
    expect( slice(0, -3, 'abc') ).toBe('')
    expect( slice(0, -4, 'abc') ).toBe('')
    expect( slice(-2, -2, 'abc') ).toBe('')
    expect( slice(-2, -1, 'abc') ).toBe('b')
    expect( slice(-2, -0, 'abc') ).toBe('')
  })
})
