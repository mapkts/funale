/* global describe, it, expect */

import allPass from './allPass'

describe('allPass', () => {
  const odd = n => n % 2 !== 0
  const lt20 = n => n < 20
  const gt5 = n => n > 5
  const plusEq = (w, x, y, z) => w + x === y + z

  it('reports whether all predicates are satisfied by a given value', () => {
    const ok = allPass([odd, lt20, gt5])
    expect(ok(7)).toBe(true)
    expect(ok(9)).toBe(true)
    expect(ok(10)).toBe(false)
    expect(ok(3)).toBe(false)
    expect(ok(21)).toBe(false)
  })

  it('returns true on empty predicate list', () => {
    expect(allPass([])(3)).toBe(true)
  })

  it('returns a curried function whose arity matches that of the highest-arity predicate', () => {
    expect(allPass([odd, gt5, plusEq]).length).toBe(4)
    expect(allPass([odd, gt5, plusEq])(9, 9, 9, 9)).toBe(true)
    expect(allPass([odd, gt5, plusEq])(9)(9)(9)(9)).toBe(true)
  })
})
