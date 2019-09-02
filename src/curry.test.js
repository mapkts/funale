import curry from './curry'

describe('curry', () => {
  it('ignores function of zero-arity', () => {
    const f = () => {}
    const g = curry(f)
    expect(g).toBe(f)
  })

  it('curries a unary function', () => {
    const f = x => x
    const g = curry(f)
    expect(g).not.toBe(1)
    expect(g(1)).toBe(1)
  })

  it('allows further currying of a curried function', () => {
    const f = (a, b, c) => a + b * c
    const g = curry(f)
    expect(g(1, 2, 3)).toBe(7)
    expect(g(1)(2, 3)).toBe(7)
    expect(g(1, 2)(3)).toBe(7)
    expect(g(1, 2)()(3)).toBe(7)
  })

  it('allows partially applying arguments when currying', () => {
    const f = (a, b, c) => a + b * c
    const g = curry(f, 1)
    const h = curry(f, 1, 2)
    expect(g(2, 3)).toBe(7)
    expect(h(3)).toBe(7)
  })
})

