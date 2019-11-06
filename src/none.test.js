/* global describe, it, expect */

import none from './none'

describe('none', () => {
  const isEven = x => x % 2 === 0
  const T = () => true

  it('returns true if no elements satisfy the predicate', () => {
    expect( none(isEven, [1, 3, 5]) ).toBe(true)
  })

  it('returns false if any element satisfies the predicate', () => {
    expect( none(isEven, [1, 2, 3]) ).toBe(false)
  })

  it('returns true for an empty list', () => {
    expect( none(T, []) ).toBe(true)
  })

  it('dispatches to objects that implement `all`', () => {
    const obj = { all: () => 'dispatched' }
    expect( none(() => {}, obj) ).toBe('dispatched')
  })
})
