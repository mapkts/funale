import _curry2 from './internal/_curry2'
import _dispatch from './internal/_dispatch'

/**
 * Executes a provided function for each list element.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * **Note:** funale `forEach` differs from `Array.prototype.forEach` in the following ways:
 * 1. funale `forEach` does not skip deleted or unassigned indices (sparse arrays)
 * 2. funale `forEach` callback function `fn` receives only one argument `currentValue`
 * 3. funale `forEach` returns the original array
 *
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to execute
 * @param {Array} list The list to iterate over
 * @return {Array} The original list
 * @example
 *
 * import { forEach } from 'funale'
 *
 * forEach(console.log, [1, 2, 3])
 * // 1
 * // 2
 * // 3
 */
const forEach = _curry2(_dispatch('forEach', (fn, list) => {
  let idx = -1
  const len = list.length
  while (++idx < len) {
    fn(list[idx])
  }

  return list
}))
export default forEach
