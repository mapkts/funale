/* global describe, it, expect */

import tail from './tail'

describe('init', () => {
  it('returns all but the first element of an ordered collection', () => {
    expect( tail([1, 2, 3]) ).toStrictEqual([2, 3])
    expect( tail([2, 3]) ).toStrictEqual([3])
    expect( tail([3]) ).toStrictEqual([])
    expect( tail([]) ).toStrictEqual([])

    expect( tail('abc') ).toStrictEqual('bc')
    expect( tail('bc') ).toStrictEqual('c')
    expect( tail('c') ).toStrictEqual('')
    expect( tail('') ).toStrictEqual('')
  })

  it('throws if applied to null or undefined', () => {
    expect( () => tail(null) ).toThrow()
    expect( () => tail(undefined) ).toThrow()
  })

  it('handles array-like object', () => {
    const args = (function() { return arguments })(1, 2, 3, 4, 5)
    expect( tail(args) ).toStrictEqual([2, 3, 4, 5])
  })
})
