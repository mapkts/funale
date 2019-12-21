import _curry2 from './internal/_curry2'

/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`;
 * otherwise the first argument is returned.
 *
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 * import { defaultTo } from 'funale'
 *
 * const defaultTo42 = defaultTo(42)
 * defaultTo42(null)  // 42
 * defaultTo42(undefined)  // 42
 * defaultTo42(false) // false
 * defaultTo42(parseInt('string')) // 42
 */
const defaultTo = _curry2((d, v) => (v == null || v !== v ? d : v))
export default defaultTo
