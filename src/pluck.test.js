/* global describe, it, expect */

import pluck from './pluck'

describe('pluck', () => {
  const people = [
    { name: 'Alex', age: 23 },
    { name: 'Chris', age: 21 },
    { name: 'Fred', age: 22 },
  ]

  it('returns a functions that maps the appropriate property over a list', () => {
    const getAge = pluck('age')
    expect( getAge(people) ).toStrictEqual([23, 21, 22])
  })
})
