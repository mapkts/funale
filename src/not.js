import _curry1 from './internal/_curry1'

/**
 * Returns the `!` of its arguments. It will return `true` if when
 * passed a falsy value, and `false` when passed a truthy one.
 *
 * @sig * -> Boolean
 * @param {*} x any value
 * @return {Boolean} The logical inverse of the passed argument
 * @example
 *
 * import { not } from 'funale'
 *
 * not(true) => false
 * not(false) => true
 * not(0) => true
 * not(1) => false
 */
const not = _curry1((a) => {
  return !a
})
export default not

