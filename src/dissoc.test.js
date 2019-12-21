/* global describe, it, expect */

import dissoc from './dissoc'

describe('dissoc', () => {
  it('copies an object omitting the specified property, if firstArg is a string', () => {
    expect( dissoc('b', { a: 1, b: 2, c: 3 }) ).toStrictEqual({ a: 1, c: 3 })
    expect( dissoc('d', { a: 1, b: 2, c: 3 }) ).toStrictEqual({ a: 1, b: 2, c: 3 })
  })

  it('makes a shallow clone of an object, omitting only what is necessary for the path, if firstArg is an array', () => {
    const obj1 = { a: { b: 1, c: 2, d: { e: 3 } }, f: [{ g: 4 }, { h: 5, i: 6, j: { k: 7, l: 8 } }], m: 9 }
    const obj2 = dissoc(['f', 1, 'i'], obj1)
    expect(obj2).toStrictEqual({ a: { b: 1, c: 2, d: { e: 3 } }, f: [{ g: 4 }, { h: 5, j: { k: 7, l: 8 } }], m: 9 })
  })

  it('leaves an empty object when all properties omitted', () => {
    const obj1 = { a: 1, b: { c: 2 }, d: 3 }
    const obj2 = dissoc(['b', 'c'], obj1)
    expect( obj2 ).toStrictEqual({ a: 1, b: {}, d: 3 })
  })

  it('leaves an empty array when all indexes are omitted', () => {
    const obj1 = { a: 1, b: [2], d: 3 }
    const obj2 = dissoc(['b', 0], obj1)
    expect( obj2 ).toStrictEqual({ a: 1, b: [], d: 3 })
  })

  it('includes prototype properties', () => {
    function Rectangle(width, height) {
      this.width = width
      this.height = height
    }
    Rectangle.prototype.area = function() {
      return this.width * this.height
    }
    const area = Rectangle.prototype.area
    const rect = new Rectangle(7, 6)

    expect( dissoc('area', rect) ).toStrictEqual({ width: 7, height: 6 })
    expect( dissoc('width', rect) ).toStrictEqual({ height: 6, area })
    expect( dissoc('depth', rect) ).toStrictEqual( { width: 7, height: 6, area })
  })

  it('flattens properties from prototype', () => {
    const F = function() {}
    F.prototype.a = 1
    const obj1 = new F()
    obj1.b = { c: 2, d: 3 }
    const obj2 = dissoc(['b', 'c'], obj1)
    expect( obj2 ).toStrictEqual({ a: 1, b: { d: 3 } })
  })
})
