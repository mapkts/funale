/* global describe, it, expect */

import merge from './merge'

describe('merge', () => {
  it('takes two objects, merges their own properties and returns a new object', () => {
    const a = { w: 1, x: 2 }
    const b = { y: 3, z: 4 }
    expect( merge(a, b) ).toStrictEqual({ w: 1, x: 2, y: 3, z: 4 })
  })

  it('overrides properties in the first object with properties in the second object', () => {
    const a = { w: 1, x: 2 }
    const b = { w: 100, y: 3, z: 4 }
    expect( merge(a, b) ).toStrictEqual({ w: 100, x: 2, y: 3, z: 4 })
  })

  it('reports only own properties', () => {
    const a = { w: 1, x: 2 }
    function Cla() {}
    Cla.prototype.x = 5
    expect( merge(new Cla(), a) ).toStrictEqual({ w: 1, x: 2 })
    expect( merge(a, new Cla()) ).toStrictEqual({ w: 1, x: 2 })
  })
})
