/* global describe, it, expect */

import anyPass from './anyPass'

describe('anyPass', () => {
  const odd = function(n) { return n % 2 !== 0 }
  const gt20 = function(n) { return n > 20 }
  const lt5 = function(n) { return n < 5 }
  const plusEq = function(w, x, y, z) { return w + x === y + z }

  it('reports whether any predicates are satisfied by a given value', () => {
    const ok = anyPass([odd, gt20, lt5])
    expect(ok(7)).toBe(true)
    expect(ok(9)).toBe(true)
    expect(ok(10)).toBe(false)
    expect(ok(18)).toBe(false)
    expect(ok(3)).toBe(true)
    expect(ok(22)).toBe(true)
  })

  it('returns false for an empty predicate list', () => {
    expect(anyPass([])(3)).toBe(false)
  })

  it('returns a curried function whose arity matches that of the highest-arity predicate', () => {
    expect(anyPass([odd, lt5, plusEq]).length).toBe(4)
    expect(anyPass([odd, lt5, plusEq])(6, 7, 8, 9)).toBe(false)
    expect(anyPass([odd, lt5, plusEq])(6)(7)(8)(9)).toBe(false)
  })
})
