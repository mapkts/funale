/* global describe, it, expect */

import path from './path'

describe('path', () => {
  const obj = { a: { b: { c: 'c' } }, nullVal: null, undefinedVal: undefined }

  it('returns the value at the path or undefined', () => {
    expect( path(['a', 'b', 'c'], obj) ).toBe('c')
    expect( path(['a'], obj) ).toBe(obj.a)
    expect( path(['nullVal'], obj) ).toBe(null)
    expect( path(['undefinedVal'], obj) ).toBe(undefined)
    expect( path(['x'], obj) ).toBe(undefined)
    expect( path(['x', 'y', 'z'], obj) ).toBe(undefined)
  })
})
