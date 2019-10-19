/* global describe, it, expect */

import nth from './nth'

describe('nth', () => {
  const arr = [1, 2, 3, 4]
  const str = 'abcd'

  it('returns the specific element at the given index', () => {
    expect( nth(0, arr) ).toBe(1)
    expect( nth(3, arr) ).toBe(4)
    expect( nth(-1, arr) ).toBe(4)
    expect( nth(-4, arr) ).toBe(1)

    expect( nth(0, str) ).toBe('a')
    expect( nth(3, str) ).toBe('d')
    expect( nth(-1, str) ).toBe('d')
    expect( nth(-4, str) ).toBe('a')
  })

  it('returns undefined if the given index is out of range', () => {
    expect( nth(4, arr) ).toBe(undefined)
    expect( nth(-5, arr) ).toBe(undefined)

    expect( nth(4, str) ).toBe(undefined)
    expect( nth(-5, str) ).toBe(undefined)
  })

  it('throws if applied to null or undefined', () => {
    expect( () => nth(0, null) ).toThrow()
    expect( () => nth(0, undefined) ).toThrow()
  })
})
