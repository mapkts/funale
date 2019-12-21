import slice from './slice'

/**
 * Returns all but the first element of the given list or string.
 *
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @example
 *
 * import { tail } from 'funale'
 *
 * tail([1, 2, 3])  // [2, 3]
 * tail([1, 2])     // [2]
 * tail([1])        // []
 * tail([])         // []
 *
 * tail('abc')  // 'bc'
 * tail('ab')   // 'b'
 * tail('a')    // ''
 * tail('')     // ''
 */
const tail = slice(1, Infinity)
export default tail
