/* global describe, it, expect */

import type from './type'

describe('type', () => {
  it('properly reports the type of the given value', () => {
    expect( type(null) ).toBe('null')
    expect( type(undefined) ).toBe('undefined')
    expect( type(true) ).toBe('boolean')
    expect( type(false) ).toBe('boolean')
    expect( type(0) ).toBe('number')
    expect( type(NaN) ).toBe('number')
    expect( type('') ).toBe('string')
    expect( type([1, 2, 3]) ).toBe('array')
    expect( type({ dog: 'bark' }) ).toBe('object')
  })
})

