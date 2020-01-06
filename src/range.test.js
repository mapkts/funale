/* global describe, it, expect */

import range from './range'

describe('range', () => {
  it('returns a list of numbers', () => {
    expect( range(0, 5, 1) ).toStrictEqual([0, 1, 2, 3, 4])
    expect( range(0, 5, 2) ).toStrictEqual([0, 2, 4])
    expect( range(0, -5, -1) ).toStrictEqual([0, -1, -2, -3, -4])
  })

  it('returns an empty list if from > to', () => {
    expect( range(4, 2, 1) ).toStrictEqual([])
    expect( range(4, 4, 1) ).toStrictEqual([])
  })

  it('throws if given bad input', () => {
    expect( () => range('a', 'z', 1) ).toThrow()
    expect( () => range(1, 4, 0) ).toThrow()
  })
})
