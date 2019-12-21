import _curry1 from './internal/_curry1'

/**
 * Returns the lower case wersion of a given string.
 *
 * @sig String -> String
 * @param {String} str
 * @return {String}
 * @example
 *
 * import { toLower } from 'funale'
 *
 * toLower('XYZ') // 'xyz'
 */
const toLower = _curry1(str => str.toLowerCase())
export default toLower
