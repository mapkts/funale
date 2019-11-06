/* global describe, it, expect */

import groupBy from './groupBy'

describe('groupBy', () => {
  const byGrade = ({ score }) => {
    return (score < 65) ? 'F' : (score < 70) ? 'D' : (score < 80) ? 'C' : (score < 90) ? 'B' : 'A'
  }
  const students = [
    { name: 'Abby', score: 84 },
    { name: 'Brad', score: 73 },
    { name: 'Chris', score: 89 },
    { name: 'Dianne', score: 99 },
    { name: 'Eddy', score: 58 },
    { name: 'Fred', score: 67 },
    { name: 'Gillian', score: 91 },
    { name: 'Hannah', score: 78 },
    { name: 'Irene', score: 85 },
    { name: 'Jack', score: 69 },
  ]

  it('splits the list into groups according to the grouping function', () => {
    expect( groupBy(byGrade, students) ).toStrictEqual({
      A: [{ name: 'Dianne', score: 99 }, { name: 'Gillian', score: 91 }],
      B: [{ name: 'Abby', score: 84 }, { name: 'Chris', score: 89 }, { name: 'Irene', score: 85 }],
      C: [{ name: 'Brad', score: 73 }, { name: 'Hannah', score: 78 }],
      D: [{ name: 'Fred', score: 67 }, { name: 'Jack', score: 69 }],
      F: [{ name: 'Eddy', score: 58 }],
    })
  })

  it('returns an empty object if given an empty array', () => {
    expect( groupBy(byGrade, []) ).toStrictEqual({})
  })

  it('dispatches to objects that implement `groupBy`', () => {
    const obj = { groupBy: () => 'dispatched' }
    expect( groupBy(() => {}, obj) ).toBe('dispatched')
  })
})
