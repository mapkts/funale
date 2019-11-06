/* global describe, it, expect */

import any from './any'

describe('any', () => {
  const isEven = x => x % 2 === 0
  const T = () => true

  it('returns true if any element satisfy the predicate', () => {
    expect( any(isEven, [2, 3, 4]) ).toBe(true)
  })

  it('returns false if all elements fails to satisfy the predicate', () => {
    expect( any(isEven, [1, 3, 5]) ).toBe(false)
  })

  it('returns false for an empty list', () => {
    expect( any(T, []) ).toBe(false)
  })

  it('dispatches to objects that implement `any`', () => {
    const obj = { any: () => 'dispatched' }
    expect( any(() => {}, obj) ).toBe('dispatched')
  })
})
