import _curry3 from './internal/_curry3'

/**
 * Inserts the supplied element into the list, at the specified `index`.
 *
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 * import { insert } from 'funale'
 *
 * insert(2, 'x', [1,2,3,4]) //=> [1,2,'x',3,4]
 */
const insert = _curry3((idx, elt, list) => {
  idx = idx < list.length && idx >= 0 ? idx : list.length
  const rv = Array.prototype.slice.call(list, 0)
  rv.splice(idx, 0, elt)
  return rv
})
export default insert
