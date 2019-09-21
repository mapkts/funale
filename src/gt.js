import _curry2 from './internal/_curry2'

/**
 * Returns `true` if the second argument is greater than the first argument; `false` otherwise.
 *
 * @sig gt :: Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 * import { gt } from 'funale'
 *
 * gt(1, 2) // true
 * gt(2, 1) // false
 * gt(2, 2) // false
 * gt('a', 'b') // true
 * gt('b', 'a') // false
 * gt('b', 'b') // false
 */
const gt = _curry2((a, b) => b > a)
export default gt
