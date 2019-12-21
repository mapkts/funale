/* global describe, it, expect */

import omit from './omit'

describe('omit', () => {
  const obj = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }

  it('copies an object omitting the listed properties', () => {
    expect( omit(['a', 'c', 'f'], obj) ).toStrictEqual({ b: 2, d: 4, e: 5 })
  })

  it('includes prototype properties', () => {
    const F = function (param) { this.x = param }
    F.prototype.y = 40
    F.prototype.z = 50
    const obj = new F(30)
    obj.v = 10
    obj.w = 20
    expect( omit(['w', 'x', 'y'], obj) ).toStrictEqual({ v: 10, z: 50 })
  })
})
