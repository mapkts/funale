import slice from './slice'

/**
 * Returns all but the last element of the given list or string.
 *
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @example
 *
 * import { init } from 'funale'
 *
 * init([1, 2, 3])  // [1, 2]
 * init([1, 2])     // [1]
 * init([1])        // []
 * init([])         // []
 *
 * init('abc')  // 'ab'
 * init('ab')   // 'a'
 * init('a')    // ''
 * init('')     // ''
 */
const init = slice(0, -1)
export default init
