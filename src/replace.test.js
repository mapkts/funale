/* global describe, it, expect */

import replace from './replace'

describe('replace', () => {
  it('replaces substrings of the input string', () => {
    expect( replace('1', 'one', '1 two three') ).toBe('one two three')
  })

  it('replaces regex matches of the input string', () => {
    expect( replace(/\d+/g, 'num', '1 2 three') ).toBe('num num three')
  })
})
