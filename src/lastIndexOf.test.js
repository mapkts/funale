/* global describe, it, expect */

import lastIndexOf from './lastIndexOf'

describe('lastIndexOf', () => {
  const xs = [1, NaN, '1', true, undefined, null, 0, -0, 1, '1', [], { a: 'b' }]

  it('returns the index of last element in a list that equals to the passed value', () => {
    expect( lastIndexOf(1, xs) ).toBe(8)
    expect( lastIndexOf(NaN, xs) ).toBe(1)
    expect( lastIndexOf('1', xs) ).toBe(9)
    expect( lastIndexOf(true, xs) ).toBe(3)
    expect( lastIndexOf(undefined, xs) ).toBe(4)
    expect( lastIndexOf(null, xs) ).toBe(5)
    expect( lastIndexOf(0, xs) ).toBe(6)
    expect( lastIndexOf(-0, xs) ).toBe(7)
    expect( lastIndexOf([], xs) ).toBe(10)
    expect( lastIndexOf({ a: 'b' }, xs) ).toBe(11)
  })

  it('returns -1 if the passed value is not in the list or performing on an empty list', () => {
    expect( lastIndexOf(0, [1, 2, 3]) ).toBe(-1)
    expect( lastIndexOf(0, []) ).toBe(-1)
  })

  it('dispatches to `lastIndexOf` method', () => {
    const obj = { lastIndexOf: () => 'dispatched' }

    expect( lastIndexOf('c', 'abcabc') ).toBe(5)
    expect( lastIndexOf('bc', 'abcabc') ).toBe(4)
    expect( lastIndexOf('', obj) ).toBe('dispatched')
  })
})
