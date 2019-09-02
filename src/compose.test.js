import compose from './compose'

describe('compose', () => {
  it('performs right-to-left function composition', () => {
    const sum = (a, b) => a + b
    const inc = x => x + 1
    const double = x => x * 2
    const f = compose(double, inc, sum)
    expect(f(1, 2)).toBe(8)
  })

  it('can be applied to one argument', () => {
    const f = (a, b, c) => [a, b, c]
    expect(compose(f)(1, 2, 3)).toEqual([1, 2, 3])
  })
})
