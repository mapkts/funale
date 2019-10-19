/* global describe, it, expect */

import concat from './concat'

describe('concat', () => {
  it('combines the elements of the two lists', () => {
    expect( concat(['c', 'd'], ['a', 'b']) ).toStrictEqual(['a', 'b', 'c', 'd'])
    expect( concat([], ['a', 'b']) ).toStrictEqual(['a', 'b'])
  })

  it('concats two strings', () => {
    expect( concat('cd', 'ab') ).toBe('abcd')
    expect( concat('', 'ab') ).toBe('ab')
  })

  it('dispatches to the concat method of the second argument when working with non-string objects', () => {
    const x1 = {
      x: 'first',
    }
    const x2 = {
      x: 'second',
      concat (that) { return `${this.x} ${that.x}` },
    }

    expect( concat(x1, x2) ).toBe('second first')
  })

  it('throws if two passed arguments are not of the same type', () => {
    expect( () => concat(['b'], 'a') ).toThrow()
  })

  it('throws if not concat method was found on the second argument', () => {
    expect( () => concat({}, {}) ).toThrow()
  })
})
