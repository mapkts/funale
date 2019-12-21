/* global describe, it, expect */

import init from './init'

describe('init', () => {
  it('returns all but the last element of an ordered collection', () => {
    expect( init([1, 2, 3]) ).toStrictEqual([1, 2])
    expect( init([2, 3]) ).toStrictEqual([2])
    expect( init([3]) ).toStrictEqual([])
    expect( init([]) ).toStrictEqual([])

    expect( init('abc') ).toStrictEqual('ab')
    expect( init('bc') ).toStrictEqual('b')
    expect( init('c') ).toStrictEqual('')
    expect( init('') ).toStrictEqual('')
  })

  it('throws if applied to null or undefined', () => {
    expect( () => init(null) ).toThrow()
    expect( () => init(undefined) ).toThrow()
  })

  it('handles array-like object', () => {
    const args = (function() { return arguments })(1, 2, 3, 4, 5)
    expect( init(args) ).toStrictEqual([1, 2, 3, 4])
  })
})
