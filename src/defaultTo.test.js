/* global describe, it, expect */

import defaultTo from './defaultTo'

describe('defaultTo', () => {
  const defaultTo42 = defaultTo(42)

  it('returns the default value if input is null, undefined or NaN', () => {
    expect(42).toBe(defaultTo42(null))
    expect(42).toBe(defaultTo42(undefined))
    expect(42).toBe(defaultTo42(NaN))
  })

  it('returns the input value if it is not null/undefined', () => {
    expect('a real value').toBe(defaultTo42('a real value'))
  })

  it('returns the input value even if it is considered falsy', () => {
    expect('').toBe(defaultTo42(''))
    expect(0).toBe(defaultTo42(0))
    expect(false).toBe(defaultTo42(false))
    expect([]).toStrictEqual(defaultTo42([]))
  })

  it('can be called with both arguments directly', () => {
    expect(42).toBe(defaultTo(42, null))
    expect('a real value').toBe(defaultTo(42, 'a real value'))
  })
})
