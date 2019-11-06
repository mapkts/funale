/* global describe, it, expect */

import prepend from './prepend'

describe('prepend', () => {
  it('adds the element to the beginning of the list', () => {
    expect( prepend('a', ['b', 'c']) ).toStrictEqual(['a', 'b', 'c'])
    expect( prepend('a', []) ).toStrictEqual(['a'])
  })
})
