/* global describe, it, expect */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-new-wrappers */

import equals from './equals'

describe('equal', () => {
  it('considers equal primities equal', () => {
    expect( equals(null, null) ).toBe(true)
    expect( equals(undefined, undefined) ).toBe(true)
    expect( equals(null, undefined) ).toBe(false)

    expect( equals(true, true) ).toBe(true)
    expect( equals(false, false) ).toBe(true)
    expect( equals(true, false) ).toBe(false)
    expect( equals(false, true) ).toBe(false)

    expect( equals(0, 0) ).toBe(true)
    expect( equals(0, -0) ).toBe(false)
    expect( equals(0, 1) ).toBe(false)
    expect( equals(1, 0) ).toBe(false)
    expect( equals(NaN, NaN) ).toBe(true)

    expect( equals('', '') ).toBe(true)
    expect( equals('', 'x') ).toBe(false)
    expect( equals('x', '') ).toBe(false)
    expect( equals('abc', 'abc') ).toBe(true)
    expect( equals('abc', 'xyz') ).toBe(false)
    expect( equals('xyz', 'abc') ).toBe(false)
  })

  it('considers equivalent boolean, number, string objects equal', () => {
    expect( equals(new Boolean(true), new Boolean(true)) ).toBe(true)
    expect( equals(new Boolean(false), new Boolean(false)) ).toBe(true)
    expect( equals(new Boolean(true), new Boolean(false)) ).toBe(false)
    expect( equals(new Boolean(false), new Boolean(true)) ).toBe(false)

    expect( equals(new Number(0), new Number(0)) ).toBe(true)
    expect( equals(new Number(0), new Number(1)) ).toBe(false)
    expect( equals(new Number(1), new Number(0)) ).toBe(false)

    expect( equals(new String(''), new String('')) ).toBe(true)
    expect( equals(new String(''), new String('x')) ).toBe(false)
    expect( equals(new String('x'), new String('')) ).toBe(false)
    expect( equals(new String('abc'), new String('abc')) ).toBe(true)
    expect( equals(new String('abc'), new String('xyz')) ).toBe(false)
    expect( equals(new String('xyz'), new String('abc')) ).toBe(false)
  })

  it('considers primitives not equal to their object counterparts', () => {
    expect( equals(true, new Boolean(true)) ).toBe(false)
    expect( equals(new Boolean(true), true) ).toBe(false)
    expect( equals(false, new Boolean(false)) ).toBe(false)
    expect( equals(new Boolean(false), false) ).toBe(false)

    expect( equals(0, new Number(0)) ).toBe(false)
    expect( equals(new Number(0), 0) ).toBe(false)

    expect( equals('', new String('')) ).toBe(false)
    expect( equals(new String(''), '') ).toBe(false)
    expect( equals('x', new String('x')) ).toBe(false)
    expect( equals(new String('x'), 'x') ).toBe(false)
  })

  it('considers equivalent objects equal', () => {
    expect( equals({}, {}) ).toBe(true)
    expect( equals({ a: 1, b: 2 }, { a: 1, b: 2 }) ).toBe(true)
    expect( equals({ b: 2, a: 1 }, { a: 1, b: 2 }) ).toBe(true)
    expect( equals({ a: 1, b: 2 }, { a: 2, b: 2 }) ).toBe(false)
  })

  it('considers equivalent arrays equal', () => {
    expect( equals([], []) ).toBe(true)
    expect( equals([], {}) ).toBe(false)
    expect( equals([1, 2, 3], [1, 2, 3]) ).toBe(true)
  })

  it('considers equivalent Arguments objects equal', () => {
    const a = (function () { return arguments })()
    const b = (function () { return arguments })()
    const c = (function () { return arguments })(1, 2, 3)
    const d = (function () { return arguments })(1, 2, 3)

    expect( equals(a, b) ).toBe(true)
    expect( equals(b, a) ).toBe(true)
    expect( equals(c, d) ).toBe(true)
    expect( equals(d, c) ).toBe(true)
    expect( equals(a, c) ).toBe(false)
    expect( equals(c, a) ).toBe(false)
  })

  it('considers equivalent Date objects equal', () => {
    expect( equals(new Date(1), new Date(1)) ).toBe(true)
    expect( equals(new Date(0), new Date(1)) ).toBe(false)
    expect( equals(new Date(1), new Date(0)) ).toBe(false)
  })

  it('considers equivalent RegExp objects equal', () => {
    expect( equals(/\s/, /\s/) ).toBe(true)
    expect( equals(/\s/, /\d/) ).toBe(false)
    expect( equals(/a/igu, /a/igu) ).toBe(true)
    expect( equals(/a/igu, /a/uig) ).toBe(true)
    expect( equals(/a/gi, /a/i) ).toBe(false)
  })

  it('considers equivalent Error objects equal', () => {
    expect( equals(new Error('abc'), new Error('abc')) ).toBe(true)
    expect( equals(new Error('abc'), new Error('xyz')) ).toBe(false)
    expect( equals(new Error('xyz'), new Error('abc')) ).toBe(false)
    expect( equals(new Error('abc'), new TypeError('abc')) ).toBe(false)
    expect( equals(new TypeError('abc'), new Error('abc')) ).toBe(false)
  })

  it('handles recursive data structures', () => {
    const a = {}
    a.v = a
    const b = {}
    b.v = b
    const c = []
    c.push(c)
    const d = []
    d.push(d)
    const nestA = { a: [1, 2, { c: 1 }], b: 1 }
    const nestB = { a: [1, 2, { c: 1 }], b: 1 }
    const nestC = { a: [1, 2, { c: 2 }], b: 1 }
    expect( equals(a, b) ).toBe(true)
    expect( equals(c, d) ).toBe(true)
    expect( equals(nestA, nestB) ).toBe(true)
    expect( equals(nestA, nestC) ).toBe(false)
  })
})
