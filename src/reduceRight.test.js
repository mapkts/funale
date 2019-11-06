/* global describe, it, expect */

import reduceRight from './reduceRight'

describe('reduceRigth', () => {
  it('folds a list in the right order', () => {
    expect( reduceRight((a, b) => a + b, '', ['a', 'b', 'c', 'd']) ).toBe('abcd')
    expect( reduceRight((a, b) => a - b, 0, [1, 2, 3, 4]) ).toBe(-2)
  })

  it('returns the accumulator for an empty array', () => {
    expect( reduceRight((a, b) => a + b, 0, []) ).toBe(0)
  })
})
