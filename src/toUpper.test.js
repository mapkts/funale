/* global describe, it, expect */

import toUpper from './toUpper'

describe('toUpper', () => {
  it('returns the upper-case equivalent of the input string', () => {
    expect( toUpper('xyz') ).toBe('XYZ')
  })
})
