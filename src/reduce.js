import _curry3 from './internal/_curry3'
import _reduce from './internal/_reduce'

/**
 * Returns a single value by executing the provided reducer function on each element of the list.
 * The reducer function receives two values: (acc, value). Dispatches to the `reduce` method
 * of the third argument, if present.
 *
 * **Note:** `reduce` does not skip deleted or unassigned indices (sparse arrays), unlike
 * `array.prototype.reduce` method.
 *
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} reducer A reducer function that receives the accumulator and the current value
 * @param {*} seed The initial value of the accumulator
 * @param {Array} list The list to iterate over
 * @return {*} The accumulated value
 * @example
 *
 * import { reduce } from 'funale'
 *
 * const add = (a, b) => a + b
 * reduce(add, 0, [1, 2, 3]) // 6
 */
const reduce = _curry3(_reduce)
export default reduce
