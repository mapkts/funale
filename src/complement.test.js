/* global describe, it, expect */

import complement from './complement'

describe('complement', () => {
  it('creates boolean-returning function that reverses another', () => {
    const even = x => x % 2 === 0
    const f = complement(even)
    expect( f(8) ).toBe(false)
    expect( f(13) ).toBe(true)
  })
})
