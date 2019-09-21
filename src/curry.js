/**
 * Returns a curried version of the provided function.
 *
 * @sig curry :: ((a, b, ...) -> c) -> a -> b -> ... -> c
 * @param {Function} func The function to curry
 * @param {...Args=} parameters Parameters to be partially applied
 * @return {Function} A curried function
 * @example
 *
 * import { curry } from 'funale'
 *
 * const sum = (a, b) => a + b
 * const inc = curry(sum, 1)
 * inc(2) // 3
 */
const curry = (f, ...args) => (f.length ? ( args.length >= f.length ? f(...args) : (...rest) => curry(f, ...args, ...rest) ) : f)
export default curry
