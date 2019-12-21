import _arity from './internal/_arity'
import _curry1 from './internal/_curry1'

/**
 * Accepts a function `fn` and returns a function that can only be called once.
 * The first value calculated is returned in subsequent invocations.
 *
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper
 * @return {Function} The wrapped function
 * @example
 *
 * import { once } from 'funale'
 *
 * const addOneOnce = once(x => x + 1)
 * addOneOnce(10) // 11
 * addOneOnce(addOneOnce(50)) // 11
 */
const once = _curry1(fn => {
  let rv
  let called = false
  return _arity(fn.length, function() {
    if (called) return rv
    called = true
    rv = fn.apply(this, arguments)
    return rv
  })
})
export default once
