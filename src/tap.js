import _curry2 from './internal/_curry2'

/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`
 * @param {*} x
 * @return {*} `x`
 * @example
 *
 * import { tap } from 'funale'
 *
 * const sayX = x => console.log('x is ' + x)
 * tap(sayX, 100) // 100
 * // logs `x is 100`
 */
const tap = _curry2((fn, x) => {
  fn(x)
  return x
})
export default tap
