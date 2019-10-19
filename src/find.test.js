/* global describe, it, expect */

import find from './find'

describe('find', () => {
  const obj1 = { x: 100 }
  const obj2 = { x: 200 }
  const xs = [1, 2, obj1, 100, obj2, 200]
  const isEven = x => x % 2 === 0
  const gt100 = x => x > 100
  const xGt100 = obj => obj.x > 100

  it('returns the first element that satisfies the predicate', () => {
    expect( find(isEven, xs) ).toBe(2)
    expect( find(gt100, xs) ).toBe(200)
    expect( find(xGt100, xs) ).toBe(obj2)
  })

  it('returns undefined when no element satisfies the predicate or operating on an empty list', () => {
    expect( find(isEven, ['hhh']) ).toBe(undefined)
    expect( find(isEven, []) ).toBe(undefined)
  })

  it('dispatches to non-array object with a `find` method', () => {
    const obj = { find: () => 'dispatched' }
    expect( find(() => {}, obj) ).toBe('dispatched')
  })
})
