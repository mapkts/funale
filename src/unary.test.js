/* global describe, it, expect */

import unary from './unary'

describe('unary', () => {
  it('turns multiple-argument function into unary one', () => {
    unary(function(x, y, z) {
      expect(arguments.length).toBe(1)
      expect(typeof y).toBe('undefined')
      expect(typeof z).toBe('undefined')
    })(10, 20, 30)
  })

  it('initial argument is passed through normally', () => {
    unary((x, y, z) => {
      expect(x).toBe(10)
      void z
    })(10, 20, 30)
  })
})
