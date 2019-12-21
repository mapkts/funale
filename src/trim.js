import _curry1 from './internal/_curry1'

/**
 * Removes whitespace from both ends of the string.
 *
 * @sig String -> String
 * @param {String} str The string to trim
 * @return {String} Trimmed version of `str`
 * @example
 *
 * import { trim } from 'funale'
 *
 * trim('  xy z ') // 'xy z'
 */
const trim = _curry1(str => str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ''))
export default trim
