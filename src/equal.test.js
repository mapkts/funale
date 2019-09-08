/* global describe, it, expect */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-new-wrappers */

import equal from './equal'

describe('equal', () => {
  it('considers equal primities equal', () => {
    expect( equal(null, null) ).toBe(true)
    expect( equal(undefined, undefined) ).toBe(true)
    expect( equal(null, undefined) ).toBe(false)

    expect( equal(true, true) ).toBe(true)
    expect( equal(false, false) ).toBe(true)
    expect( equal(true, false) ).toBe(false)
    expect( equal(false, true) ).toBe(false)

    expect( equal(0, 0) ).toBe(true)
    expect( equal(0, -0) ).toBe(false)
    expect( equal(0, 1) ).toBe(false)
    expect( equal(1, 0) ).toBe(false)
    expect( equal(NaN, NaN) ).toBe(true)

    expect( equal('', '') ).toBe(true)
    expect( equal('', 'x') ).toBe(false)
    expect( equal('x', '') ).toBe(false)
    expect( equal('abc', 'abc') ).toBe(true)
    expect( equal('abc', 'xyz') ).toBe(false)
    expect( equal('xyz', 'abc') ).toBe(false)
  })

  it('considers equivalent boolean, number, string objects equal', () => {
    expect( equal(new Boolean(true), new Boolean(true)) ).toBe(true)
    expect( equal(new Boolean(false), new Boolean(false)) ).toBe(true)
    expect( equal(new Boolean(true), new Boolean(false)) ).toBe(false)
    expect( equal(new Boolean(false), new Boolean(true)) ).toBe(false)

    expect( equal(new Number(0), new Number(0)) ).toBe(true)
    expect( equal(new Number(0), new Number(1)) ).toBe(false)
    expect( equal(new Number(1), new Number(0)) ).toBe(false)

    expect( equal(new String(''), new String('')) ).toBe(true)
    expect( equal(new String(''), new String('x')) ).toBe(false)
    expect( equal(new String('x'), new String('')) ).toBe(false)
    expect( equal(new String('abc'), new String('abc')) ).toBe(true)
    expect( equal(new String('abc'), new String('xyz')) ).toBe(false)
    expect( equal(new String('xyz'), new String('abc')) ).toBe(false)
  })

  it('considers primitives not equal to their object counterparts', () => {
    expect( equal(true, new Boolean(true)) ).toBe(false)
    expect( equal(new Boolean(true), true) ).toBe(false)
    expect( equal(false, new Boolean(false)) ).toBe(false)
    expect( equal(new Boolean(false), false) ).toBe(false)

    expect( equal(0, new Number(0)) ).toBe(false)
    expect( equal(new Number(0), 0) ).toBe(false)

    expect( equal('', new String('')) ).toBe(false)
    expect( equal(new String(''), '') ).toBe(false)
    expect( equal('x', new String('x')) ).toBe(false)
    expect( equal(new String('x'), 'x') ).toBe(false)
  })

  it('considers equivalent objects equal', () => {
    expect( equal({}, {}) ).toBe(true)
    expect( equal({ a: 1, b: 2 }, { a: 1, b: 2 }) ).toBe(true)
    expect( equal({ b: 2, a: 1 }, { a: 1, b: 2 }) ).toBe(true)
    expect( equal({ a: 1, b: 2 }, { a: 2, b: 2 }) ).toBe(false)
  })

  it('considers equivalent arrays equal', () => {
    expect( equal([], []) ).toBe(true)
    expect( equal([], {}) ).toBe(false)
    expect( equal([1, 2, 3], [1, 2, 3]) ).toBe(true)
  })

  it('considers equivalent Arguments objects equal', () => {
    const a = (function () { return arguments })()
    const b = (function () { return arguments })()
    const c = (function () { return arguments })(1, 2, 3)
    const d = (function () { return arguments })(1, 2, 3)

    expect( equal(a, b) ).toBe(true)
    expect( equal(b, a) ).toBe(true)
    expect( equal(c, d) ).toBe(true)
    expect( equal(d, c) ).toBe(true)
    expect( equal(a, c) ).toBe(false)
    expect( equal(c, a) ).toBe(false)
  })

  it('considers equivalent Date objects equal', () => {
    expect( equal(new Date(1), new Date(1)) ).toBe(true)
    expect( equal(new Date(0), new Date(1)) ).toBe(false)
    expect( equal(new Date(1), new Date(0)) ).toBe(false)
  })

  it('considers equivalent RegExp objects equal', () => {
    expect( equal(/\s/, /\s/) ).toBe(true)
    expect( equal(/\s/, /\d/) ).toBe(false)
    expect( equal(/a/igu, /a/igu) ).toBe(true)
    expect( equal(/a/igu, /a/uig) ).toBe(true)
    expect( equal(/a/gi, /a/i) ).toBe(false)
  })

  it('considers equivalent Error objects equal', () => {
    expect( equal(new Error('abc'), new Error('abc')) ).toBe(true)
    expect( equal(new Error('abc'), new Error('xyz')) ).toBe(false)
    expect( equal(new Error('xyz'), new Error('abc')) ).toBe(false)
    expect( equal(new Error('abc'), new TypeError('abc')) ).toBe(false)
    expect( equal(new TypeError('abc'), new Error('abc')) ).toBe(false)
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
    expect( equal(a, b) ).toBe(true)
    expect( equal(c, d) ).toBe(true)
    expect( equal(nestA, nestB) ).toBe(true)
    expect( equal(nestA, nestC) ).toBe(false)
  })
})
