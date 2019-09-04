/* global describe, it, expect */

import sort from './sort'
import comparator from './comparator'

describe('comparator', () => {
  it('builds a comparator function from a predicate', () => {
    expect(  [2, 1, 6, 3, 1].sort( comparator((a, b) => a < b) )  ).toStrictEqual([1, 1, 2, 3, 6])

    const byFirstName = comparator((a, b) => a.firstName.toUpperCase() < b.firstName.toUpperCase())
    const people = [
      { name: 'Haskell Curry', firstName: 'Haskell', secondName: 'Curry' },
      { name: 'Alan Turing', firstName: 'Alan', secondName: 'Turing' },
      { name: 'Gottlob Frege', firstName: 'Gottlob', secondName: 'Frege' },
    ]

    expect( sort(byFirstName, people) ).toStrictEqual(
      [
        { name: 'Alan Turing', firstName: 'Alan', secondName: 'Turing' },
        { name: 'Gottlob Frege', firstName: 'Gottlob', secondName: 'Frege' },
        { name: 'Haskell Curry', firstName: 'Haskell', secondName: 'Curry' },
      ]
    )
  })
})
