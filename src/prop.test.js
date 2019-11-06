/* global describe, it, expect */

import prop from './prop'

describe('prop', () => {
  it('returns a function that fetches the appropriate property', () => {
    const getName = prop('name')
    expect( getName({ name: 'Fred', age: 22 }) ).toBe('Fred')
  })
})
