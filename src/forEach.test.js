/* global describe, it, expect */

import forEach from './forEach'

describe('forEach', () => {
  const list = [{ x: 1, y: 100 }, { x: 2, y: 200 }, { x: 3, y: 300 }]
  it('performs the passed in function on each element of the list', () => {
    const sideEffect = {}
    forEach(obj => { sideEffect[obj.x] = obj.y }, list)
    expect( sideEffect ).toStrictEqual({ 1: 100, 2: 200, 3: 300 })
  })

  it('returns the original list', () => {
    let str = ''
    expect( forEach(obj => { str += obj.x }, list) ).toStrictEqual(list)
    expect( str ).toBe('123')
  })

  it('handles empty list', () => {
    expect( forEach(x => x * x, []) ).toStrictEqual([])
  })

  it('dispatches to `forEach` method', () => {
    let dispatched = false
    const fn = () => {}
    function DummyList() {}
    DummyList.prototype.forEach = function () {
      dispatched = true
    }
    forEach(fn, new DummyList())
    expect(dispatched).toBe(true)
  })
})
