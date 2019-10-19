/* global describe, it, expect */

import zipWith from './zipWith'

describe('zipWith', () => {
  const a = [1, 2, 3]
  const b = [100, 200, 300]
  const c = [10, 20, 30, 40]
  const add = (a, b) => a + b
  const mul = (a, b) => a * b

  it('returns an array by applying the given function pair-wise on its passed-in lists', () => {
    expect( zipWith(add, a, b) ).toStrictEqual([101, 202, 303])
    expect( zipWith(mul, a, b) ).toStrictEqual([100, 400, 900])
  })

  it('returns an array whose length is equal to the shorter of its input lists', () => {
    expect( zipWith(add, a, c).length ).toBe(a.length)
  })
})
