import _curry3 from './internal/_curry3'
import adjust from './adjust'
import always from './always'

/**
 * Returns a new copy of the list with the element at the provided index
 * replaced with the given value.
 *
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update
 * @param {*} x The value to be replaced with
 * @param {Array} list The source array-like object to be updated
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`
 * @example
 *
 * import { update } from 'funale'
 *
 * update(1, '_', ['a', 'b', 'c']) // ['a', '_', 'c']
 * update(-1, '_', ['a', 'b', 'c']) // ['a', 'b', '_']
 */
const update = _curry3((idx, x, list) => adjust(idx, always(x), list))
export default update
