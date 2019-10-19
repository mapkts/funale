import _curry2 from './internal/_curry2'

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
