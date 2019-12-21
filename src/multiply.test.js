/* global describe, it, expect */

import multiply from './multiply'

describe('multiply', () => {
  it('multiplies two numbers', () => {
    expect( multiply(6, 7) ).toBe(42)
  })
})
