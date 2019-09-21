import _curry1 from './internal/_curry1'

/**
 * A function does nothing but take one parameter and return the supplied parameter.
 *
 * @sig identity :: x -> x
 * @param {*} x The value to return
 * @return {*} The input value
 * @example
 *
 * import { identity } from 'funale'
 *
 * identity(1) // 1
 *
 * const obj = {}
 * identity(obj) // obj
 */
const identity = _curry1(x => x)
export default identity
