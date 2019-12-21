/* global describe, it, expect */

import clone from './clone'
import keys from './keys'

describe('clone', () => {
  it('clones primitive values', () => {
    expect( clone(null) ).toBe(null)
    expect( clone(undefined) ).toBe(undefined)
    expect( clone(true) ).toBe(true)
    expect( clone(false) ).toBe(false)
    expect( clone(42) ).toBe(42)
    expect( clone(3.14) ).toBe(3.14)
    expect( clone('foo') ).toBe('foo')
  })

  it('deep clone objects', () => {
    const obj = { a: { b: { c: 42 } }, b: [1, 2, 3], c: new Date(2019, 12, 3) }
    const copy = clone(obj)
    obj.a.b.c = null
    expect( copy ).toStrictEqual({ a: { b: { c: 42 } }, b: [1, 2, 3], c: new Date(2019, 12, 3) })
    expect( copy.b ).toStrictEqual(obj.b)
    expect( copy.c ).toStrictEqual(obj.c)
    expect( copy.d ).toStrictEqual(obj.d)
    expect( copy.e ).toStrictEqual(obj.e)
    expect( copy.e ).toBe(obj.e)
  })

  it('clones object with circular references', () => {
    const x = { c: null }
    const y = { a: x }
    const z = { b: y }
    x.c = z
    const copy = clone(x)
    expect( keys(copy) ).toStrictEqual( keys(x) )
    expect( keys(copy.c) ).toStrictEqual( keys(x.c) )
    expect( keys(copy.c.b) ).toStrictEqual( keys(x.c.b) )
    expect( keys(copy.c.b.a) ).toStrictEqual( keys(x.c.b.a) )
    expect( keys(copy.c.b.a.c) ).toStrictEqual( keys(x.c.b.a.c) )
  })

  it('clones RegExp objects', () => {
    [/x/, /x/g, /x/i, /x/m, /x/gi, /x/gm, /x/im, /x/gim]
      .forEach(pattern => {
        const copy = clone(pattern)
        expect( copy ).not.toBe(pattern)
        expect( copy.constructor ).toBe(RegExp)
        expect( copy.source ).toBe(pattern.source)
        expect( copy.global ).toBe(pattern.global)
        expect( copy.ignoreCase ).toBe(pattern.ignoreCase)
        expect( copy.multiline ).toBe(pattern.multiline)
      })
  })

  it('clones Function by references', () => {
    const fn = () => {}
    const copy = clone(fn)
    expect( copy ).toBe(fn)
  })

  it('dispathes to objects that implement `clone`', () => {
    const obj = { clone: () => 'dispatched' }
    expect( clone(obj) ).toBe('dispatched')
  })
})
