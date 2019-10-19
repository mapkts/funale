/* global describe, expect, it */

import reduceWhile from './reduceWhile'

describe('reduceWhile', () => {
  const isOdd = (acc, x) => x % 2 === 1
  const add = (a, b) => a + b

  it('reduces until its predicate fails', () => {
    expect( reduceWhile(isOdd, add, 0, [1, 3, 5, 2, 4, 6]) ).toBe(9)
  })

  it('returns the seed value when performing on an empty array', () => {
    expect( reduceWhile(isOdd, add, 111, []) ).toBe(111)
  })
})
