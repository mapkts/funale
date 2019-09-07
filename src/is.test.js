/* global describe, it, expect */

import is from './is'

describe('is', () => {
  it('considers equal primities equal (also treats NaN is NaN)', () => {
    expect( is(null, null) ).toBe(true)
    expect( is(undefined, undefined) ).toBe(true)
    expect( is(true, true)).toBe(true)
    expect( is(1, 1) ).toBe(true)
    expect( is(NaN, NaN) ).toBe(true)
    expect( is('', '') ).toBe(true)
  })

  it('considers objects that have the same reference equal', () => {
    const obj = {}
    expect( is(obj, obj) ).toBe(true)
    expect( is(obj, {}) ).toBe(false)
  })
})
