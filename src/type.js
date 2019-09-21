import _curry1 from './internal/_curry1'
import _type from './internal/_type'

/**
 * Returns the type of the value in lower-case
 *
 * @sig type :: * -> String
 * @param {*} val The value to check
 * @return {String} The type of the value
 * @example
 *
 * import { type } from 'funale'
 *
 * type(null) // 'null'
 * type(undefined) // 'undefined'
 * type(true) // 'boolean'
 * type(1) // 'number'
 * type('s') // 'string'
 * type([]) // 'array'
 * type({}) // 'object'
 * type(() => {}) // 'function'
 * type(/\s/g) // 'regexp'
 * type(new Error('woof')) // 'error'
 */
const type = _curry1(_type)
export default type
