/* global describe, it, expect */

import binary from './binary'

describe('binary', () => {
  it('turns multiple-argument function into binary one', () => {
    binary(function(x, y, z) {
      expect(arguments.length).toBe(2)
      expect(typeof z).toBe('undefined')
    })(10, 20, 30)
  })

  it('initial argument is passed through normally', () => {
    binary((x, y, z) => {
      expect(x).toBe(10)
      void z
    })(10, 20, 30)
  })
})
