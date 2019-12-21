import _curry1 from './internal/_curry1'
import curryN from './curryN'
import max from './max'
import pluck from './pluck'
import reduce from './reduce'

/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @example
 *
 * import { propEq, allPass } from 'funale'
 *
 * const isQueen = propEq('rank', 'Q')
 * const isSpade = propEq('suit', '♠︎')
 * const isQueenOfSpades = allPass([isQueen, isSpade])
 *
 * isQueenOfSpades({rank: 'Q', suit: '♣︎'}) // false
 * isQueenOfSpades({rank: 'Q', suit: '♠︎'}) // true
 */
const allPass = _curry1((preds) => {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    const len = preds.length
    let idx = -1
    while (++idx < len) {
      if (!preds[idx].apply(this, arguments)) return false
    }
    return true
  })
})
export default allPass
