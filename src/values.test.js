/* global describe, it, expect */

import values from './values'

describe('values', () => {
  const obj = { a: 1, b: [1, 2, 3], c: { x: 1, y: 2 }, d: 'D', e: null, f: undefined }
  const ts = [1, [1, 2, 3], { x: 1, y: 2 }, 'D', null, undefined]

  function C() { this.a = 1, this.b = 2 }
  C.prototype.x = () => 'x'
  C.prototype.y = 'y'
  const c = new C()

  it('returns an array of the given object\'s values', () => {
    expect( values(obj) ).toStrictEqual(ts)
    expect( values({ hasOwnProperty: false }) ).toStrictEqual([false])
  })

  it('does not include the given object\'s prototype properties', () => {
    expect( values(c) ).toStrictEqual([1, 2])
  })
})
