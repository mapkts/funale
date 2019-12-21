import _type from './_type'
import _isFunction from './_isFunction'

export default function _concat(a, b) {
  const typeA = _type(a)
  const typeB = _type(b)

  if (typeA !== typeB) throw new TypeError('two arguments are not of the same type')
  if (typeA === 'array') return b.concat(a)
  if (typeA === 'string') return b + a
  if (b != null && _isFunction(b.concat)) return b.concat(a)
  throw new TypeError('concat method not found')
}
