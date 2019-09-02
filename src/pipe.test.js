import pipe from './pipe'

describe('pipe', () => {
  it('performs left-to-right function composition', () => {
    const sum = (a, b) => a + b
    const inc = x => x + 1
    const double = x => x * 2
    const f = pipe(sum, inc, double)
    expect(f(1, 2)).toBe(8)
  })

  it('can be applied to one argument', () => {
    const f = (a, b, c) => [a, b, c]
    expect(pipe(f)(1, 2, 3)).toEqual([1, 2, 3])
  })
})
