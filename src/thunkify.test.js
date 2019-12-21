/* global describe, it, expect */

import thunkify from './thunkify'

describe('thunkify', () => {
  it('returns a function with the same arity as the given function', () => {
    const input = function input(a0, a1) { }
    const thunk = thunkify(input)
    expect(typeof thunk).toBe('function')
    expect(thunk.length).toBe(input.length)
  })

  it('returns a function that expects arguments and returns a new invoker function', () => {
    const input = function input(a0, a1) { }
    const thunk = thunkify(input)
    expect(typeof thunk(42, 'xyz')).toBe('function')
  })

  it('calls the original function with the provided arguments when all were supplied', () => {
    const thunk = thunkify(x => x + 2)
    expect(thunk(40)()).toBe(42)
  })
})
