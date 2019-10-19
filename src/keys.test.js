/* global describe, it, expect */

import keys from './keys'

describe('keys', () => {
  const obj = { a: 1, b: [1, 2, 3], c: { x: 1, y: 2 } }
  function C() {this.a = 'b', this.b = 'a'}
  C.prototype.x = 'y'
  C.prototype.y = 'x'
  const c = new C()

  it('returns an array of the given object\'s enumerable property names', () => {
    expect( keys(obj) ).toStrictEqual(['a', 'b', 'c'])
    expect( keys({ hasOwnProperty: false }) ).toStrictEqual(['hasOwnProperty'])
  })

  it('does not include the given object\'s prototype properties', () => {
    expect( keys(c) ).toStrictEqual(['a', 'b'])
  })
})
