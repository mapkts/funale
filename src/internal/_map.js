export default function _map(fn, functor) {
  let idx = -1
  let len = functor.length
  let rv = Array(len)
  while (++idx < len) {
    rv[idx] = fn(functor[idx])
  }

  return rv
}
