import _curry1 from './internal/_curry1'
import _type from './internal/_type'


/**
 * Returns the empty value of its argument's type.
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 * import { empty } from 'funale'
 *
 * empty(Just(42))      // Nothing()
 * empty([1, 2, 3])     // []
 * empty('unicorns')    // ''
 * empty({x: 1, y: 2})  // {}
 */
var empty = _curry1((x) => {
  return (
    (x != null && typeof x.empty === 'function')
      ? x.empty()
      : (x != null && x.constructor != null && typeof x.constructor.empty === 'function')
        ? x.constructor.empty()
        : _type(x) === 'array'
          ? []
          : _type(x) === 'string'
            ? ''
            : _type(x) === 'object'
              ? {}
              : _type(x) === 'arguments'
                ? (function() { return arguments })()
                : void 0
  )
})
export default empty
