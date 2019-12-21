/* global describe, it, expect */

import min from './min'

describe('min', () => {
  it('returns the smaller of its two arguments', () => {
    expect( min(-1, 1) ).toBe(-1)
    expect( min(1, -1) ).toBe(-1)
  })

  it('works for any orderable type', () => {
    const d1 = new Date('2001-01-01')
    const d2 = new Date('2001-01-02')

    expect( min('a', 'b') ).toBe('a')
    expect( min('b', 'a') ).toBe('a')
    expect( min(d1, d2) ).toBe(d1)
    expect( min(d2, d1) ).toBe(d1)
  })
})
