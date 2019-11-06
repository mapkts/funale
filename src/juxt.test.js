/* global describe, it, expect */

import juxt from './juxt'

describe('juxt', () => {
  const add = (a, b) => a + b
  const mult = (a, b) => a * b
  const hello = () => 'hello'

  it('applies a list of functions to a list of values', () => {
    expect( juxt([add, mult])(2, 3) ).toStrictEqual([5, 6])
    expect( juxt([])(2, 3) ).toStrictEqual([])
    expect( juxt([hello, hello])() ).toStrictEqual(['hello', 'hello'])
  })

  it('returns a curried function', () => {
    expect( juxt([add, mult])(2)(3) ).toStrictEqual([5, 6])
  })
})
