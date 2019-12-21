/* global describe, it, expect */

import bind from './bind'

describe('bind', () => {
  it('returns a function bound to the specified context object', () => {
    const module = { x: 42, getX () { return this.x } }
    const unboundGetX = module.getX
    const boundGetX = bind(unboundGetX, module)
    expect( boundGetX() ).toBe(42)
  })

  it('preserves arity', () => {
    const f0 = function() { return 0 }
    const f1 = function(a) { return a }
    const f2 = function(a, b) { return a + b }
    const f3 = function(a, b, c) { return a + b + c }

    expect(bind(f0, {}).length).toBe(0)
    expect(bind(f1, {}).length).toBe(1)
    expect(bind(f2, {}).length).toBe(2)
    expect(bind(f3, {}).length).toBe(3)
  })
})
