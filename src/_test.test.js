/* global describe, it, expect */

import test from './_test'

describe('test', () => {
  it('returns true if string matches the pattern', () => {
    expect( test(/^x/, 'xyz') ).toBe(true)
  })

  it('returns false if string does not match the pattern', () => {
    expect( test(/^y/, 'xyz') ).toBe(false)
  })

  it('is referentially transparent', () => {
    const pattern = /x/g
    expect( pattern.lastIndex ).toBe(0)
    expect( test(pattern, 'xyz') ).toBe(true)
    expect( pattern.lastIndex ).toBe(0)
    expect( test(pattern, 'xyz') ).toBe(true)
  })
})
