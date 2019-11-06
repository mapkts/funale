import juxt from './juxt'
import filter from './filter'
import reject from './reject'

/**
 * Takes a predicate and a list or other `Filterable` object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively.
 *
 * @sig Fiterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} predicate A predicate to determine which side the element belongs to
 * @param {Array} Filterable The list to partition
 * @return {Array} A array containing first the subset of elements that satisfy the predicate, and
 *         second the subset of elements that do not satisfy
 *
 * @example
 *
 * import { partition, includes } from 'funale'
 *
 * partition(includes('s'), ['sss', 'ttt', 'foo', 'bars']) // [['sss', 'bars'], ['ttt', 'foo']]
 * partition(includes('s'), {a: 'sss', b: 'ttt', c: 'foo', d: 'bars'}) // [{a: 'sss', d: 'bars'}, {b: 'ttt', c: 'foo'}]
 */
const partition = juxt([filter, reject])
export default partition
