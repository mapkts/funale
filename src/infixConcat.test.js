/* global describe, it, expect */

import infixConcat from './infixConcat'

describe('infixConcat', () => {
  it('combines the elements of the two lists', () => {
    expect( infixConcat(['a', 'b'], ['c', 'd']) ).toStrictEqual(['a', 'b', 'c', 'd'])
    expect( infixConcat([], ['a', 'b']) ).toStrictEqual(['a', 'b'])
  })

  it('concats two strings', () => {
    expect( infixConcat('ab', 'cd') ).toBe('abcd')
    expect( infixConcat('', 'ab') ).toBe('ab')
  })

  it('dispatches to the concat method of the first argument when working with non-string objects', () => {
    const x1 = {
      x: 'first',
      concat (that) { return `${this.x} ${that.x}` },
    }
    const x2 = {
      x: 'second',
    }

    expect( infixConcat(x1, x2) ).toBe('first second')
  })

  it('throws if two passed arguments are not of the same type', () => {
    expect( () => infixConcat(['b'], 'a') ).toThrow()
  })

  it('throws if not concat method was found on the first argument', () => {
    expect( () => infixConcat({}, {}) ).toThrow()
  })
})
