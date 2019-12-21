import _curry2 from './internal/_curry2'

/**
 * Returns `true` if one or both of its arguments are `true`; `false` if both arguments are `false`.
 *
 * @sig a -> b -> a | b
 * @param {*} a
 * @param {*} b
 * @return {*} The first argument if it is truthy, otherwise the second arugment
 * @example
 *
 * import { or } from 'funale'
 *
 * or(true, true) // true
 * or(true, false) // true
 * or(false, true) // true
 * or(false, false) // false
 */
const or = _curry2((a, b) => a || b)
export default or
