/* global describe, it, expect */

import empty from './empty'

describe('empty', () => {
  it('dispatches to `empty` method', () => {
    function Nothing() {}
    Nothing.prototype.empty = function() { return new Nothing() }

    function Just(x) { this.value = x }
    Just.prototype.empty = function() { return new Nothing() }

    expect(empty(new Nothing()).constructor).toBe(Nothing)
    expect(empty(new Just(123)).constructor).toBe(Nothing)
  })

  it('dispatches to `empty` function on constructor', () => {
    function Nothing() {}
    Nothing.empty = function() { return new Nothing() }

    function Just(x) { this.value = x }
    Just.empty = function() { return new Nothing() }

    expect(empty(new Nothing()).constructor).toBe(Nothing)
    expect(empty(new Just(123)).constructor).toBe(Nothing)
  })

  it('returns empty array given array', () => {
    expect(empty([1, 2, 3])).toStrictEqual([])
  })

  it('returns empty object given object', () => {
    expect(empty({ x: 1, y: 2 })).toStrictEqual({})
  })

  it('returns empty string given string', () => {
    expect(empty('abc')).toStrictEqual('')
    expect(empty(String('abc'))).toStrictEqual('')
  })

  it('returns empty arguments object given arguments object', () => {
    const x = (function() { return arguments })(1, 2, 3)
    expect(empty(x)).toStrictEqual((function() { return arguments })())
  })
})
