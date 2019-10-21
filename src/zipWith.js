import _curry3 from './internal/_curry3'

/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @sig ((a, b) -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine two elements into one value
 * @param {Array} list1 The first array to consider
 * @param {Array} list2 The second array to consider
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2` using `fn`.
 * @example
 *
 * import { zipWith } from 'funale'
 *
 * const add = (a, b) => a + b
 * zipWith(add, [100, 200, 300], [1, 2, 3]) // [101, 202, 303]
 */
const zipWith = _curry3((fn, a, b) => {
  const rv = []
  const len = Math.min(a.length, b.length)
  let idx = -1
  while (++idx < len) {
    rv[idx] = fn(a[idx], b[idx])
  }
  return rv
})
export default zipWith
