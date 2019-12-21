import _curry1 from './internal/_curry1'

/**
 * Negates its argument.
 *
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} -n
 * @example
 *
 * import { negate } from 'funale'
 *
 * negate(42) // -42
 */
const negate = _curry1(n => -n)
export default negate
