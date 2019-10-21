import _curry2 from './internal/_curry2'

/**
 * Splits a string into an array of strings based on a specific separator.
 *
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} spliter A string or regexp separator
 * @param {String} string The string to split
 * @return {Array} The array of separated strings
 * @example
 *
 * import { split } from 'funale'
 *
 * split('|', 'a|b|c|d') // ['a', 'b', 'c', 'd']
 * split('/', '/usr/local/bin/node') // ['/', 'usr', 'local', 'bin', 'node']
 */
const split = _curry2((spliter, string) => string.split(spliter))
export default split
