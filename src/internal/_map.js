export default function _map(fn, functor) {
  let idx = -1
  const len = functor.length
  const rv = Array(len)
  while (++idx < len) {
    rv[idx] = fn(functor[idx])
  }

  return rv
}
