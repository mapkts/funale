/* global describe, it, expect */

import reduceBy from './reduceBy'

describe('reduceBy', () => {
  const groupNames = (acc, { name }) => acc.concat(name)
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
    expect( reduceBy(groupNames, [], byGrade, students) ).toStrictEqual({
      A: ['Dianne', 'Gillian'],
      B: ['Abby', 'Chris', 'Irene'],
      C: ['Brad', 'Hannah'],
      D: ['Fred', 'Jack'],
      F: ['Eddy'],
    })
  })

  it('returns an empty object if given an empty array', () => {
    expect( reduceBy(groupNames, [], byGrade, []) ).toStrictEqual({})
  })
})
