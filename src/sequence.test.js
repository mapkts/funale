/* global describe, it, expect */

import sequence from './sequence'
import of from './of'

describe('sequence', () => {
  it('operates on a list of lists', () => {
    expect( sequence(of, []) ).toStrictEqual([[]])
    expect( sequence(of, [[], [1, 2, 3, 4]]) ).toStrictEqual([])
    expect( sequence(of, [[1], [2, 3, 4]]) ).toStrictEqual([[1, 2], [1, 3], [1, 4]])
    expect( sequence(of, [[1, 2], [3, 4]]) ).toStrictEqual([[1, 3], [1, 4], [2, 3], [2, 4]])
    expect( sequence(of, [[1, 2, 3, 4], []]) ).toStrictEqual([])
  })

  it('dispatches to objects that implement `sequence`', () => {
    const obj = { sequence: () => 'dispatched' }
    expect( sequence(() => {}, obj) ).toBe('dispatched')
  })
})
