import _curry3 from './internal/_curry3'

/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern
 * @param {String} replacement
 * @param {String} str
 * @return {String}
 * @example
 *
 * import { replace } from 'funale'
 *
 * replace('foo', 'bar', 'foo foo foo') // 'bar foo foo'
 * replace(/foo/, 'bar', 'foo foo foo') // 'bar foo foo'
 * replace(/foo/g, 'bar', 'foo foo foo') // 'bar bar bar'
 */
const replace = _curry3((re, replacement, str) => str.replace(re, replacement))
export default replace
