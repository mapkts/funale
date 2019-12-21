/* global describe, it, expect */

import add from './add'

describe('add', () => {
  it('adds two numbers', () => {
    expect( add(2, 3) ).toBe(5)
  })

  it('coerces its arguments to numbers', () => {
    expect( add('1', '2') ).toBe(3)
    expect( add(1, '2') ).toBe(3)
    expect( add(true, false) ).toBe(1)
    expect( add(null, null) ).toBe(0)
    expect( add(undefined, undefined) ).toBe(NaN)
    expect( add(new Date(1), new Date(2)) ).toBe(3)
  })
})
