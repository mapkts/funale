import _curry1 from './internal/_curry1'
import _equals from './internal/_equals'

/*
 * Returns a duplicate-free version of the provided array. Funale
 * equals is used to determine equality.
 *
 * @sig [a] -> [a]
 * @param {Array} list
 * @return {Array} A duplicate-free array
 * @example
 *
 * import uniq from 'funale'
 *
 * uniq([1, 2, 1]) // [1, 2]
 * uniq([NaN, NaN, [1], [1], { x: 1 }, { x: 1 }]) // [NaN, [1], { x: 1 }]
 */

const uniq = _curry1(list => {
  const rv = []
  let item
  let idx = -1
  let skip = false

  while (++idx < list.length) {
    item = list[idx]

    rv.forEach(x => {
      if (_equals(item, x, [], [])) skip = true
    })

    if (!skip) rv.push(item)
    skip = false
  }

  return rv
})
export default uniq
