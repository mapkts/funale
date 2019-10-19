/* global describe, it, expect */

import reduce from './reduce'

describe('reduce', () => {
  const add = (a, b) => a + b
  const mul = (a, b) => a * b
  const iterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator'

  function Iterable(value) {
    this.value = value
  }

  Iterable.prototype[iterator] = function() {
    const arr = this.value

    return {
      pos: -1,
      next () {
        return ++this.pos < arr.length ? { value: arr[this.pos], done: false } : { done: true }
      },
    }
  }

  Iterable.prototype.reduce = function() {
    return 'unreachable'
  }

  it('handles arrays', () => {
    expect( reduce(add, 0, []) ).toBe(0)
    expect( reduce(mul, 1, []) ).toBe(1)
    expect( reduce(add, 0, [1, 2, 3, 4]) ).toBe(10)
    expect( reduce(mul, 1, [1, 2, 3, 4]) ).toBe(24)
  })

  it('handles iterables', () => {
    expect( reduce(add, 0, new Iterable([1, 2, 3, 4])) ).toBe(10)
    expect( reduce(mul, 1, new Iterable([1, 2, 3, 4])) ).toBe(24)
  })

  it('dispatches to objects that implement `reduce`', () => {
    const obj = { reduce: () => 'dispatched' }
    expect( reduce(add, 0, obj) ).toBe('dispatched')
  })

  it('prefers the use of the iterator over `reduce`', () => {
    expect( reduce(add, 0, new Iterable([1, 2, 3, 4])) ).toBe(10)
    expect( new Iterable([1, 2, 3, 4]).reduce() ).toBe('unreachable')
  })
})
