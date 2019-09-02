/**
 * Performs left-to-right function composition. The first argument
 * may have any arity; the remaining arguments must be unary.
 *
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function} A composed function
 * @example
 *
 * import { pipe } from 'funale'
 *
 * const sum = (a, b) => a + b
 * const inc = x => x + 1
 * const double = x => x * 2
 * const f = pipe(sum, inc, double)
 * f(1, 2) // ((1 + 2) + 1) * 2
 */
const pipe = (f, ...fs) => (...args) => fs.reduce((a, c) => c(a), f(...args))
export default pipe
