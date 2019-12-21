import _curry1 from './internal/_curry1'
import _has from './internal/_has'

/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 *
 * @sig {k: v} -> [[k,v]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties
 * @example
 *
 * import { toPairs } from 'funale'
 *
 * toPairs({a: 1, b: 2, c: 3}) // [['a', 1], ['b', 2], ['c', 3]]
 */
const toPairs = _curry1((obj) => {
  const pairs = []
  for (const prop in obj) {
    if (_has(prop, obj)) pairs[pairs.length] = [prop, obj[prop]]
  }
  return pairs
})
export default toPairs
