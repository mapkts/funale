import _curry2 from './internal/_curry2'

/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * item from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 *
 * @sig [a] -> [b] -> [[a, b]]
 * @param {Array} list1
 * @param {Array} list2
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`
 * @example
 *
 * import { zip } from 'funale'
 *
 * zip([1, 2, 3], ['a', 'b', 'c']) // [[1, 'a'], [2, 'b'], [3, 'c']]
 */
const zip = _curry2((a, b) => {
  const rv = []
  const len = Math.min(a.length, b.length)
  let idx = -1
  while (++idx < len) {
    rv[idx] = [a[idx], b[idx]]
  }
  return rv
})
export default zip
