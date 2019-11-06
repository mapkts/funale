import _curry2 from './internal/_curry2'
import _path from './internal/_path'

/**
 * Retrives the value at a given path.
 *
 * @sig [String] -> {a} -> a | Undefined
 * @param {Array} path The path to use
 * @param {Object} obj The object to query
 * @return {*} The value at `path`
 * @example
 *
 * import { path } from 'funale'
 *
 * path(['a', 'b'], {a: {b: 'b'}} // 'b'
 * path(['a', 'c'], {a: {c: 'c'}} // undefined
 */
const path = _curry2(_path)
export default path
