/* global describe, it, expect */

import of from './of'

describe('of', () => {
  it('returns its argument as an array', () => {
    expect( of(100) ).toStrictEqual([100])
    expect( of([100]) ).toStrictEqual([[100]])
    expect( of([]) ).toStrictEqual([[]])
    expect( of(null) ).toStrictEqual([null])
  })
})
