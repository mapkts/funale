import _curry2 from './internal/_curry2'

/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @sig a -> b -> a | b
 * @param {*} a
 * @param {*} b
 * @return {*} The first argument if it is falsy, otherwise the second arugment
 * @example
 *
 * import { and } from 'funale'
 *
 * and(true, true) // true
 * and(true, false) // false
 * and(false, true) // false
 * and(false, false) // false
 */
const and = _curry2((a, b) => a && b)
export default and
