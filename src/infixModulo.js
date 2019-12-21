import _curry2 from './internal/_curry2'

/**
 * Divides the first argument by the second and returns the remainder.
 *
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number} The result of `b % a`
 * @example
 *
 * import { infixModulo } from 'funale'
 *
 * infixModulo(17, 3) // 2
 */
const infixModulo = _curry2((a, b) => a % b)
export default infixModulo
