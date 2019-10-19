/* global describe, it, expect */

import splitAt from './splitAt'

describe('splitAt', () => {
  it('splits an array at a given index', () => {
    expect( splitAt(1, [1, 2, 3]) ).toStrictEqual([[1], [2, 3]])
  })

  it('splits a string at a given index', () => {
    expect( splitAt(1, 'abc') ).toStrictEqual(['a', 'bc'])
  })

  it('supports negative index or index greater than array length', () => {
    expect( splitAt(-1, [1, 2, 3]) ).toStrictEqual([[1, 2], [3]])
    expect( splitAt(-1,  'abc') ).toStrictEqual(['ab', 'c'])

    expect( splitAt(3, [1, 2, 3]) ).toStrictEqual([[1, 2, 3], []])
    expect( splitAt(3, 'abc') ).toStrictEqual(['abc', ''])
  })
})
