import _curry2 from './internal/_curry2'
import slice from './slice'

const splitEvery = _curry2((n, list) => {
  if (n <= 0) throw new Error('First argument to splitEvery must be a positive integer')

  const rv = []
  let idx = 0
  while (idx < list.length) {
    rv.push(slice(idx, idx += n, list))
  }
  return rv
})
export default splitEvery
