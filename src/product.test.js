/* global describe, it, expect */

import product from './product'

describe('product', () => {
  it('mutiplies together all the elements of a list', () => {
    expect( product([1, 2, 3, 7]) ).toBe(42)
  })
})
