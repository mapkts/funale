/* global describe, it, expect */

import assoc from './assoc'

describe('assoc', () => {
  it('makes a shallow clone of an object, setting or overriding the specific property if firstArg is a string', () => {
    const obj1 = { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 }
    const obj2 = assoc('e', { x: 42 }, obj1)
    const obj3 = assoc('x', { x: 42 }, obj1)
    expect( obj2 ).toStrictEqual({ a: 1, b: { c: 2, d: 3 }, e: { x: 42 }, f: 5 })
    expect( obj3 ).toStrictEqual({ a: 1, b: { c: 2, d: 3 }, e: 4, f: 5, x: { x: 42 } })
  })

  it('makes a shallow clone of an object, setting or overriding the specific node if firstArg is a path array', () => {
    const obj1 = { a: { b: 1, c: 2, d: { e: 3 } }, f: { g: { h: 4, i: [5, 6, 7], j: { k: 6, l: 7 } } }, m: 8 }
    const obj2 = { a: 1, b: { c: 2, d: 3 }, e: 4, f: 5 }
    const obj3 = assoc(['f', 'g', 'i', 1], 42, obj1)
    const obj4 = assoc(['x', 0, 'y'], 42, obj2)
    expect( obj3.f.g.i ).toStrictEqual([5, 42, 7])
    expect( obj4 ).toStrictEqual({ a: 1, b: { c: 2, d: 3 }, e: 4, f: 5, x: [{ y: 42 }] })
  })

  it('replaces the whole object when given an empty path', () => {
    expect( assoc([], 3, { a: 1, b: 2 }) ).toBe(3)
  })

  it('replaces `undefined` with a new object', () => {
    expect( assoc(['foo', 'bar', 'baz'], 42, { foo: undefined }) ).toStrictEqual({ foo: { bar: { baz: 42 } } })
  })

  it('replaces `null` with a new object', () => {
    expect( assoc(['foo', 'bar', 'baz'], 42, { foo: null }) ).toStrictEqual({ foo: { bar: { baz: 42 } } })
  })
})
