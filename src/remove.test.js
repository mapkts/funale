/* global describe, it, expect */

import remove from './remove'

describe('remove', () => {
  it('splices out a sub-list of the given list', () => {
    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    expect( remove(2, 5, list) ).toStrictEqual(['a', 'b', 'h', 'i', 'j'])
  })

  it('returns the appropriate sublist when start == 0', () => {
    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    expect( remove(0, 5, list) ).toStrictEqual(['f', 'g', 'h', 'i', 'j'])
    expect( remove(0, 1, list) ).toStrictEqual(['b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])
    expect( remove(0, list.length, list) ).toStrictEqual([])
  })

  it('removes the end of the list if the count is too large', () => {
    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    expect( remove(2, 20, list) ).toStrictEqual(['a', 'b'])
  })

  it('retains the entire list if the start is too large', () => {
    const list = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']
    expect( remove(13, 3, list) ).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'])
  })
})
