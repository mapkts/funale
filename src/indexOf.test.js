/* global describe, it, expect */

import indexOf from './indexOf'

describe('indexOf', () => {
  const xs = [1, NaN, '1', true, undefined, null, 0, -0, 1, '1', [], { a: 'b' }]

  it('returns the index of first element in a list that equals to the passed value', () => {
    expect( indexOf(1, xs) ).toBe(0)
    expect( indexOf(NaN, xs) ).toBe(1)
    expect( indexOf('1', xs) ).toBe(2)
    expect( indexOf(true, xs) ).toBe(3)
    expect( indexOf(undefined, xs) ).toBe(4)
    expect( indexOf(null, xs) ).toBe(5)
    expect( indexOf(0, xs) ).toBe(6)
    expect( indexOf(-0, xs) ).toBe(7)
    expect( indexOf([], xs) ).toBe(10)
    expect( indexOf({ a: 'b' }, xs) ).toBe(11)
  })

  it('returns -1 if the passed value is not in the list or performing on an empty list', () => {
    expect( indexOf(0, [1, 2, 3]) ).toBe(-1)
    expect( indexOf(0, []) ).toBe(-1)
  })

  it('dispatches to `indexOf` method', () => {
    const obj = { indexOf: () => 'dispatched' }

    expect( indexOf('c', 'abc') ).toBe(2)
    expect( indexOf('bc', 'abc') ).toBe(1)
    expect( indexOf('', obj) ).toBe('dispatched')
  })
})
