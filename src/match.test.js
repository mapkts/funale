/* global describe, it, expect */

import match from './match'

describe('match', () => {
  const re = /[A-Z]\d\d\-[a-zA-Z]+/
  const matching = 'B17-afn'
  const notMatching = 'B1-afn'

  it('determines whether a string matches a regex', () => {
    expect( match(re, matching).length ).toBe(1)
    expect( match(re, notMatching).length ).toBe(0)
  })

  it('defaults to a different empty array each time', () => {
    const first = match(re, notMatching)
    const second = match(re, notMatching)
    expect( first ).not.toBe(second)
  })

  it('throws on null input', () => {
    expect( () => match(re, null) ).toThrow()
  })
})
