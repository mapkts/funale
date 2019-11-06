/* global describe, it, expect */

import converge from './converge'

describe('converge', () => {
  const mult = (a, b) => a * b
  const add = a => b => a + b

  const f2 = converge(mult, [
    a => a,
    (a, b) => b,
  ])

  const f3 = converge(mult, [
    a => a,
    (a, b, c) => c,
  ])

  it('passes the results of applying the arguments individually to two separate functions into a single one', () => {
    expect( converge(mult, [add(1), add(3)])(2) ).toBe(15)
  })

  it('returns a curried function', () => {
    expect( f2(6)(7) ).toBe(42)
    expect( f3(1)(2)(3) ).toBe(3)
  })

  it('works with empty list', () => {
    const fn = converge(function () {return arguments.length}, [])
    expect( fn.length ).toBe(0)
    expect( fn() ).toBe(0)
  })
})
