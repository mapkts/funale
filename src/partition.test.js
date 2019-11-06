/* global describe, it, expect */

import partition from './partition'

describe('partition', () => {
  const pred = n => n % 2

  it('splits a list into two lists according to a predicate', () => {
    expect( partition(pred, []) ).toStrictEqual([[], []])
    expect( partition(pred, [0, 2, 4, 6]) ).toStrictEqual([[], [0, 2, 4, 6]])
    expect( partition(pred, [1, 3, 5, 7]) ).toStrictEqual([[1, 3, 5, 7], []])
    expect( partition(pred, [0, 1, 2, 3]) ).toStrictEqual([[1, 3], [0, 2]])
  })

  it('works with objects', () => {
    expect( partition(pred, {}) ).toStrictEqual([{}, {}])
    expect( partition(pred, { a: 0, b: 2, c: 4, d: 6 }) ).toStrictEqual([{}, { a: 0, b: 2, c: 4, d: 6 }])
    expect( partition(pred, { a: 1, b: 3, c: 5, d: 7 }) ).toStrictEqual([{ a: 1, b: 3, c: 5, d: 7 }, {}])
    expect( partition(pred, { a: 0, b: 1, c: 2, d: 3 }) ).toStrictEqual([{ b: 1, d: 3 }, { a: 0, c: 2 }])
  })
})
