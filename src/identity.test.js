import identity from './identity'

describe('identity', () => {
  it('returns its first argument', () => {
    const obj = {}
    expect( identity(obj) ).toBe(obj)
  })
})
