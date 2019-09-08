/* global describe, it, expect */

import is from './is'

describe('is', () => {
  it('considers equal primities equal (also treats NaN is NaN)', () => {
    expect( is(null, null) ).toBe(true)
    expect( is(undefined, undefined) ).toBe(true)
    expect( is(null, undefined) ).toBe(false)

    expect( is(true, true) ).toBe(true)
    expect( is(false, false) ).toBe(true)
    expect( is(true, false) ).toBe(false)
    expect( is(false, true) ).toBe(false)

    expect( is(0, 0) ).toBe(true)
    expect( is(0, -0) ).toBe(false)
    expect( is(0, 1) ).toBe(false)
    expect( is(1, 0) ).toBe(false)
    expect( is(NaN, NaN) ).toBe(true)

    expect( is('', '') ).toBe(true)
    expect( is('', 'x') ).toBe(false)
    expect( is('x', '') ).toBe(false)
    expect( is('abc', 'abc') ).toBe(true)
    expect( is('abc', 'xyz') ).toBe(false)
    expect( is('xyz', 'abc') ).toBe(false)
  })

  it('considers objects that have the same reference equal', () => {
    const obj = {}
    expect( is(obj, obj) ).toBe(true)
    expect( is(obj, {}) ).toBe(false)
  })
})
