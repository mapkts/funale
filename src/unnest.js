import chain from './chain'

/**
 * Removes one level of nesting from any Chain.
 *
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @example
 *
 * import { unnest } from 'funale
 *
 * unnest([1, [2], [[3]]]) // [1, 2, [3]]
 */
const unnest = chain(x => x)
export default unnest
