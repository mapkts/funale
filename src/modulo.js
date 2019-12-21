import _curry2 from './internal/_curry2'

/**
 * Divides the second argument by the first and returns the remainder.
 *
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number} The result of `b % a`
 * @example
 *
 * import { modulo } from 'funale'
 *
 * modulo(3, 17) // 2
 */
const modulo = _curry2((a, b) => b % a)
export default modulo
