/* global describe, it, expect */

import equals from './equals'

describe('equals', () => {
  it('considers equal primities equal (also treats NaN equals NaN)', () => {
    expect( equals(null, null) ).toBe(true)
    expect( equals(undefined, undefined) ).toBe(true)
    expect( equals(true, true)).toBe(true)
    expect( equals(1, 1) ).toBe(true)
    expect( equals(NaN, NaN) ).toBe(true)
    expect( equals('', '') ).toBe(true)
  })

  it('considers objects that have the same reference equal', () => {
    const obj = {}
    expect( equals(obj, obj) ).toBe(true)
    expect( equals(obj, {}) ).toBe(false)
  })
})
