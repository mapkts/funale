import _curry3 from './internal/_curry3'

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
