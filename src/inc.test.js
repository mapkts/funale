/* global describe, it, expect */

import inc from './inc'

describe('inc', () => {
  it('increments its argument', () => {
    expect( inc(-1) ).toBe(0)
    expect( inc(0) ).toBe(1)
    expect( inc(3.14).toPrecision(3) ).toBe('4.14')
    expect( inc(-Infinity) ).toBe(-Infinity)
    expect( inc(Infinity) ).toBe(Infinity)
  })
})
