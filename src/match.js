import _curry2 from './internal/_curry2'

/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches.
 *
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} regex
 * @param {String} str
 * @return {Array} The list of matches or empty array
 * @example
 *
 * import { match } from 'funale'
 *
 * match(/([a-z]a)/g, 'bananas') // ['ba', 'na', 'na']
 * match(/a/, 'b') // []
 */
const match = _curry2((re, str) => str.match(re) || [])
export default match
