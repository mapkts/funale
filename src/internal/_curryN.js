import _arity from './_arity'

export default function _curryN(arity, fn, ...args) {
  return function (...rest) {
    const combined = [...args, ...rest]
    const left = arity - combined.length
    return left <= 0 ? fn.apply(this, combined) : _arity(left, _curryN(arity, fn, ...combined))
  }
}
