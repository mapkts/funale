import _curry2 from './internal/_curry2'
import slice from './slice'

/**
 * Splits a list into slices of the specific length.
 *
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 * import { splitEvery } from 'funale'
 *
 * splitEvery(3, [1, 2, 3, 4, 5, 6, 7]) // [[1, 2, 3], [4, 5, 6], [7]]
 * splitEvery(3,'abcdefijk') // ['abc', 'def', 'ijk']
 */
const splitEvery = _curry2((n, list) => {
  if (n <= 0) throw new Error('First argument to splitEvery must be a positive integer')

  const rv = []
  let idx = 0
  while (idx < list.length) {
    rv.push(slice(idx, idx += n, list))
  }
  return rv
})
export default splitEvery
