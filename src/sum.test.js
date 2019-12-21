/* global describe, it, expect */

import sum from './sum'

describe('sum', () => {
  it('adds together the array of numbers supplied', () => {
    expect( sum([1, 2, 3, 4]) ).toBe(10)
  })
})
