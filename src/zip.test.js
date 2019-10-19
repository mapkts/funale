/* global describe, it, expect */

import zip from './zip'

describe('zip', () => {
  it('returns an array of tuples', () => {
    const a = [1, 2, 3]
    const b = [100, 200, 300]

    expect( zip(a, b) ).toStrictEqual([[1, 100], [2, 200], [3, 300]])
  })

  it('returns an array whose length is equal to the shorter of its input arrays', () => {
    const a = [1, 2, 3]
    const b = [10, 20, 30, 40]

    expect( zip(a, b).length ).toBe(a.length)
  })
})
