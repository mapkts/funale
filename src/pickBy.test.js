/* global describe, it, expect */

import pickBy from './pickBy'
import always from './always'

describe('pickBy', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

  it('creates a copy of the object', () => {
    expect( pickBy( always(true), obj) ).not.toBe(obj)
  })

  it('keeps the key when satisfied the predicate', () => {
    expect( pickBy( always(true), obj) ).toStrictEqual(obj)
    expect( pickBy( always({}), obj) ).toStrictEqual(obj)
    expect( pickBy( always(1), obj) ).toStrictEqual(obj)
  })

  it('drops the key when predicate returns false', () => {
    expect( pickBy( always(false), obj) ).toStrictEqual({})
    expect( pickBy( always(0), obj) ).toStrictEqual({})
    expect( pickBy( always(null), obj) ).toStrictEqual({})
  })

  it('is called with (val,key,obj)', () => {
    expect( pickBy((val, key, _obj) => {
      expect(_obj).toBe(obj)
      return key === 'd' && val === 4
    }, obj) ).toStrictEqual({ d: 4 })
  })

  it('retrieves prototype properties', () => {
    const F = function(param) {this.x = param}
    F.prototype.y = 40; F.prototype.z = 50
    const obj = new F(30)
    obj.v = 10; obj.w = 20
    expect( pickBy(val => val < 45, obj) ).toStrictEqual({ v: 10, w: 20, x: 30, y: 40 })
  })
})
