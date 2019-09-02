import pipe from './pipe'

/**
 * Performs right-to-left function composition. The last argument
 * may have any arity; the remaining arguments must be unary.
 *
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function} A composed function
 * @example
 *
 * import { compose } from 'funale'
 * const sum = (a, b) => a + b
 * const inc = x => x + 1
 * const double = x => x * 2
 * const f = compose(double, inc, sum)
 * f(1, 2) // ((1 + 2) + 1) * 2
 */
const compose = (...fs) => pipe(...fs.reverse())
export default compose
