import _curry2 from './internal/_curry2'

/**
 * Applies function `fn` to the argument list `args`.
 *
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function to call
 * @param {Array} args The arguments to call `fn` with
 * @return {*} Result of `fn(...args)`
 * @example
 *
 * import { apply } from 'funale'
 *
 * const nums = [1, 2, 3, -99, 42, 6, 7]
 * apply(Math.max, nums) // 42
 */
const apply = _curry2(function apply(fn, args) {
  return fn.apply(this, args)
})
export default apply
