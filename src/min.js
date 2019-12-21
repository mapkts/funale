import _curry2 from './internal/_curry2'

/**
 * Returns the smaller of its two arguments.
 *
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @example
 *
 * import { min } from 'funale'
 *
 * min(1, -1) // 1
 * min('a', 'b') // 'b'
 */
const min = _curry2((a, b) => (a > b ? b : a))
export default min
