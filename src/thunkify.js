import curryN from './curryN'
import _curry1 from './internal/_curry1'

/**
 * Creates a thunk out of a function. A thunk delays a calculation until
 * its result is needed, providing lazy evaluation of arguments.
 *
 * @sig ((a, b, ..., j) -> k) -> (a, b, ..., j) -> (() -> k)
 * @param {Function} fn A function to wrap in a thunk
 * @return {Function} Expects arguments for `fn` and returns a new function
 *  that, when called, applies those arguments to `fn`
 * @example
 *
 * import { thunkify } from 'funale'
 *
 * thunkify(x => x)(42)() // 42
 * thunkify((a, b) => a + b)(25, 17)() // 42
 */
const thunkify = _curry1((fn) => curryN(fn.length, (...args) => {
  return function invokeThunk() {
    return fn.apply(this, args)
  }
})
)
export default thunkify
