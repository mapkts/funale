/* global describe, it, expect */

import liftN from './liftN'

describe('liftN', () => {
  const sum = (...args) => args.reduce((a, b) => a + b, 0)
  const addN3 = liftN(3, sum)
  const addN4 = liftN(4, sum)
  const addN5 = liftN(5, sum)

  it('returns a function', () => {
    expect( typeof liftN(3, (a, b, c) => a + b + c) ).toBe('function')
  })

  it('limits a variadic function to the specific arity', () => {
    expect( addN3([1, 10], [2], [3]) ).toStrictEqual([6, 15])
  })

  it('can lift function of any arity', () => {
    expect(addN3([1, 10], [2], [3])).toStrictEqual([6, 15])
    expect(addN4([1, 10], [2], [3], [40])).toStrictEqual([46, 55])
    expect(addN5([1, 10], [2], [3], [40], [500, 1000])).toStrictEqual([546, 1046, 555, 1055])
  })
})
