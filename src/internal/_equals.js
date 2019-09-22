/* eslint-disable no-fallthrough */
/* eslint-disable prefer-template */

import _is from './_is'
import _type from './_type'

export default function _equals(a, b, aStack, bStack) {
  if ( _is(a, b) ) return true

  const typeA = _type(a)
  if (typeof a !== typeof b || typeA !== _type(b)) return false

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) &&
      typeof b.equals === 'function' && b.equals(a)
  }

  let idx = aStack.length - 1
  while (idx >= 0) {
    if (aStack[idx] === a) {
      return bStack[idx] === b
    }
    idx -= 1
  }
  aStack.push(a)
  bStack.push(b)

  switch (typeA) {
    case 'date':
    case 'boolean':
      return +a === +b
    case 'regexp':
    case 'string':
      return '' + a === '' + b
    case 'number':
      if (+a !== +a) return +b !== +b
      return +a === 0 ? 1 / +a === 1 / +b : +a === +b
    case 'arguments':
    case 'array':
      if (a.length !== b.length) return false
      for (let i = 0; i < a.length; i++) {
        if ( !_equals(a[i], b[i], aStack, bStack) ) return false
      }
      return true
    case 'object':
      for (const i in a) {
        if ( !b.hasOwnProperty(i) ) return false
      }
      for (const j in b) {
        if ( !a.hasOwnProperty(j) ) return false
        if ( !_equals(a[j], b[j], aStack, bStack) ) return false
      }
      return true
    case 'error':
      return a.name === b.name && a.message === b.message
    default:
      return a === b
  }
}

