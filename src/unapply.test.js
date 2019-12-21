/* global describe, it, expect */

import unapply from './unapply'
import apply from './apply'

describe('unapply', () => {
  it('returns a function which is always passed one argument', () => {
    const fn = unapply(function() { return arguments.length })
    expect(fn()).toBe(1)
    expect(fn('x')).toBe(1)
    expect(fn('x', 'y')).toBe(1)
    expect(fn('x', 'y', 'z')).toBe(1)
  })

  it('forwards arguments to decorated function as an array', () => {
    const fn = unapply((xs) => { return `[${xs}]` })
    expect(fn()).toBe('[]')
    expect(fn(2)).toBe('[2]')
    expect(fn(2, 4)).toBe('[2,4]')
    expect(fn(2, 4, 6)).toBe('[2,4,6]')
  })

  it('returns a function with length 0', () => {
    const fn = unapply(x => x)
    expect(fn.length).toBe(0)
  })

  it('is the inverse of apply', () => {
    let a, b, c, d, e, f, g, n
    const rand = function() {
      return Math.floor(200 * Math.random()) - 100
    }

    f = Math.max
    g = unapply(apply(f))
    n = 1
    while (n <= 100) {
      a = rand(); b = rand(); c = rand(); d = rand(); e = rand()
      expect(f(a, b, c, d, e)).toBe(g(a, b, c, d, e))
      n += 1
    }

    f = function(xs) { return `[${xs}]` }
    g = apply(unapply(f))
    n = 1
    while (n <= 100) {
      a = rand(); b = rand(); c = rand(); d = rand(); e = rand()
      expect(f([a, b, c, d, e])).toBe(g([a, b, c, d, e]))
      n += 1
    }
  })
})
