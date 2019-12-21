/* global describe, it, expect */

import lift from './lift'

describe('lift', () => {
  const add3 = (a, b, c) => a + b + c
  const add4 = (a, b, c, d) => a + b + c + d
  const add5 = (a, b, c, d, e) => a + b + c + d + e
  const madd3 = lift(add3)
  const madd4 = lift(add4)
  const madd5 = lift(add5)

  it('returns a function if called with just a function', () => {
    expect(typeof lift(add3)).toBe('function')
  })

  it('produces a cross-product of array values', () => {
    expect(madd3([1, 2, 3], [1, 2], [1, 2, 3])).toStrictEqual([3, 4, 5, 4, 5, 6, 4, 5, 6, 5, 6, 7, 5, 6, 7, 6, 7, 8])
    expect(madd3([1], [2], [3])).toStrictEqual([6])
    expect(madd3([1, 2], [3, 4], [5, 6])).toStrictEqual([9, 10, 10, 11, 10, 11, 11, 12])
  })

  it('can lift functions of any arity', () => {
    expect(madd3([1, 10], [2], [3])).toStrictEqual([6, 15])
    expect(madd4([1, 10], [2], [3], [40])).toStrictEqual([46, 55])
    expect(madd5([1, 10], [2], [3], [40], [500, 1000])).toStrictEqual([546, 1046, 555, 1055])
  })
})
