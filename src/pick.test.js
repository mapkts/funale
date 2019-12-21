/* global describe, it, expect */

import pick from './pick'

describe('pick', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, 1: 7 }

  it('copies the named properties of an object to the new object', () => {
    expect( pick(['a', 'c', 'f'], obj) ).toStrictEqual({ a: 1, c: 3, f: 6 })
  })

  it('handles numbers as properties', () => {
    expect( pick([1], obj) ).toStrictEqual({ 1: 7 })
  })

  it('ignores properties not included', () => {
    expect( pick(['a', 'c', 'g'], obj) ).toStrictEqual({ a: 1, c: 3 })
  })

  it('retrieves prototype properties', () => {
    const F = function(param) {this.x = param}
    F.prototype.y = 40; F.prototype.z = 50
    const obj = new F(30)
    obj.v = 10; obj.w = 20
    expect( pick(['w', 'x', 'y'], obj) ).toStrictEqual({ w: 20, x: 30, y: 40 })
  })
})
