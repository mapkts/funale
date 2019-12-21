/* global describe, it, expect */

import tap from './tap'
import identity from './identity'

describe('tap', () => {
  it('returns a function that always returns its argument', () => {
    const f = tap(identity)
    expect(typeof f).toBe('function')
    expect(f(100)).toBe(100)
    expect(f(undefined)).toBe(undefined)
    expect(f(null)).toBe(null)
  })

  it('may take a function as the first argument that executes with tap\'s argument', () => {
    let sideEffect = 0
    expect(sideEffect).toBe(0)
    const rv = tap((x) => { sideEffect = `string ${x}` }, 200)
    expect(rv).toBe(200)
    expect(sideEffect).toBe('string 200')
  })
})
