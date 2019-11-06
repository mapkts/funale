/* global describe, it, expect */

import append from './append'

describe('append', () => {
  it('adds the element to the end of the list', () => {
    expect( append('c', ['a', 'b']) ).toStrictEqual(['a', 'b', 'c'])
    expect( append('c', []) ).toStrictEqual(['c'])
  })
})
