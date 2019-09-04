import _curry1 from './internal/_curry1'

/**
 * Makes a comparator function that reports whether
 * the first argument is less than the second.
 *
 * @sig ((a, b) -> Boolean) -> ((a, b) -> number)
 * @param {Function} predicate A two-arity function that returns `true` if firstArg < secondArg, `false` otherwise
 * @return {Function} A two-arity function that returns `-1` if firstArg < secondArg, `1` if firstArg > secondArg, `0` otherwise
 * @example
 *
 * import { comparator, sort } from 'funale'
 *
 * const byFirstName = comparator((a, b) => a.firstName.toUpperCase() < b.firstName.toUpperCase())
 * const people = [
 *   { name: 'Haskell Curry', firstName: 'Haskell', secondName: 'Curry' }
 *   { name: 'Alan Turing', firstName: 'Alan', secondName: 'Turing' }
 *   { name: 'Gottlob Frege', firstName: 'Gottlob', secondName: 'Frege' }
 * ]
 *
 * const peopleByIncreasingFirstName = sort(byFirstName, people)
 * //=> [
 *   { name: 'Alan Turing', firstName: 'Alan', secondName: 'Turing' },
 *   { name: 'Gottlob Frege', firstName: 'Gottlob', secondName: 'Frege' },
 *   { name: 'Haskell Curry', firstName: 'Haskell', secondName: 'Curry' },
 * ]
 */
const comparator = _curry1(predicate => (a, b) => (  predicate(a, b) ? -1 : ( predicate(b, a) ? 1 : 0 )  ))
export default comparator

