import _curry1 from './internal/_curry1'

/**
 * Returns the upper case wersion of a given string.
 *
 * @sig String -> String
 * @param {String} str
 * @return {String}
 * @example
 *
 * import { toUpper } from 'funale'
 *
 * toLower('xyz') // 'XYZ'
 */
const toUpper = _curry1(str => str.toUpperCase())
export default toUpper
