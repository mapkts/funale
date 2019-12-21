/* global describe, it, expect */

import toLower from './toLower'

describe('toLower', () => {
  it('returns the lower-case equivalent of the input string', () => {
    expect( toLower('XYZ') ).toBe('xyz')
  })
})
