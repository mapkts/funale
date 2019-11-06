/* global describe, it, expect */

import max from './max'

describe('max', () => {
  it('returns the larger of its two arguments', () => {
    expect( max(-1, 1) ).toBe(1)
    expect( max(1, -1) ).toBe(1)
  })

  it('works for any orderable type', () => {
    const d1 = new Date('2001-01-01')
    const d2 = new Date('2001-01-02')

    expect( max('a', 'b') ).toBe('b')
    expect( max('b', 'a') ).toBe('b')
    expect( max(d1, d2) ).toBe(d2)
    expect( max(d2, d1) ).toBe(d2)
  })
})
