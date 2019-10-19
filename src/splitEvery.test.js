/* global describe, it, expect */

import splitEvery from './splitEvery'

describe('splitEvery', () => {
  it('throws if first argument is not a positive integer', () => {
    expect( () => splitEvery(0, []) ).toThrow()
    expect( () => splitEvery(-1, '') ).toThrow()
  })

  it('splits a colletion into slices of the spcified length', () => {
    expect( splitEvery(1, []) ).toStrictEqual([])
    expect( splitEvery(2, [1, 2, 3, 4]) ).toStrictEqual([[1, 2], [3, 4]])
    expect( splitEvery(3, [1, 2, 3, 4]) ).toStrictEqual([[1, 2, 3], [4]])
    expect( splitEvery(4, [1, 2, 3, 4]) ).toStrictEqual([[1, 2, 3, 4]])
    expect( splitEvery(5, [1, 2, 3, 4]) ).toStrictEqual([[1, 2, 3, 4]])
    expect( splitEvery(1, '') ).toStrictEqual([])
    expect( splitEvery(2, 'abcd') ).toStrictEqual(['ab', 'cd'])
    expect( splitEvery(3, 'abcd') ).toStrictEqual(['abc', 'd'])
    expect( splitEvery(4, 'abcd') ).toStrictEqual(['abcd'])
    expect( splitEvery(5, 'abcd') ).toStrictEqual(['abcd'])
  })
})
