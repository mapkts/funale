import _curry2 from './internal/_curry2'
import _cloneRegExp from './internal/_cloneRegExp'

/**
 * Determines whether a given string matches a given regular expression.
 *
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @example
 *
 * import { test } from 'funale'
 *
 * test(/^x/, 'xyz') // true
 * test(/^y/, 'xyz') // false
 */
const test = _curry2((pattern, str) => _cloneRegExp(pattern).test(str))
export default test
