import _curry2 from './internal/_curry2'

/**
 * Returns the larger of its two arguments.
 *
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @example
 *
 * import { max } from 'funale'
 *
 * max(1, -1) // 1
 * max('a', 'b') // 'b'
 */
const max = _curry2((a, b) => (b > a ? b : a))
export default max
