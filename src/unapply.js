import _curry1 from './internal/_curry1'

/**
 *
 * Derives a variadic function from a function which takes an array.
 *
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @example
 *
 * import { unapply } from 'funale'
 *
 * unapply(JSON.stringify)(1, 2, 3) // '[1,2,3]'
 */
const unapply = _curry1(fn => function () { return fn(Array.prototype.slice.call(arguments, 0)) })
export default unapply
