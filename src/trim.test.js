/* global describe, it, expect */

import trim from './trim'

describe('trim', () => {
  it('removes whitespace from both ends of the input string', () => {
    expect( trim('  xy z') ).toBe('xy z')
  })
})
