/* global describe, it, expect */

import once from './once'

describe('once', () => {
  it('returns a function that calls the supplied function only the first time called', () => {
    let ctr = 0
    const fn = once(() => {ctr += 1})
    fn()
    expect(ctr).toBe(1)
    fn()
    expect(ctr).toBe(1)
    fn()
    expect(ctr).toBe(1)
  })

  it('passes along arguments supplied', () => {
    const fn = once((a, b) => {return a + b})
    const result = fn(5, 10)
    expect(result).toBe(15)
  })

  it('retains and returns the first value calculated, even if different arguments are passed later', () => {
    let ctr = 0
    const fn = once((a, b) => {ctr += 1; return a + b})
    let result = fn(5, 10)
    expect(result).toBe(15)
    expect(ctr).toBe(1)
    result = fn(20, 30)
    expect(result).toBe(15)
    expect(ctr).toBe(1)
  })

  it('retains arity', () => {
    const f = once((a, b) => { return a + b })
    expect(f.length).toBe(2)
  })
})
