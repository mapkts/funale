/* global describe, it, expect */

import join from './join'

describe('join', () => {
  it('concatenates a list\'s elements to a string with an separator', () => {
    expect( join('-', [2000, 1, 1]) ).toBe('2000-1-1')
  })
})
