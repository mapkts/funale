import _curry2 from './internal/_curry2'

/**
 * Returns the nth element of the given list or string. If index `n` is negative the
 * element at index length + n is returned. If index `n` is out of index range,
 * `undefined` is returned.
 *
 * @sig Number -> [a] -> a | undefined
 * @param {Number} index
 * @param {*} list
 * @return {*} Nth element of the list
 * @example
 *
 * import { nth } from 'funale'
 *
 * const head = nth(0)
 * const last = nth(-1)
 * head([1, 2, 3]) // 1
 * last([1, 2, 3]) // 3
 */
const nth = _curry2((n, as) => {
  const idx = n < 0 ? as.length + n : n
  return as[idx]
})
export default nth
