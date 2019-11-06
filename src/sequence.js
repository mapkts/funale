import _curry2 from './internal/_curry2'
import ap from './ap'
import map from './map'
import prepend from './prepend'
import reduceRight from './reduceRight'

/**
 * Transform a Traversable of Applicative into an Applicative of Traversable.
 *
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @example
 *
 * import { sequence, of } from 'funale'
 *
 * sequence(of, Just([1, 2, 3]) // [Just(1), Just(2), Just(3)]
 * sequence(of, Nothing()) // [Nothing()]
 *
 * sequence(Maybe.of, [Just(1), Just(2), Just(3)]) // Just([1, 2, 3])
 * sequence(Maybe.of, [Just(1), Just(2), Nothing()]) // Nothing()
 */
const sequence = _curry2((of, traversable) => {
  return typeof traversable.sequence === 'function' ?
    traversable.sequence(of) :
    reduceRight(
      (x, acc) => ap(map(prepend, x), acc),
      of([]),
      traversable
    )
})
export default sequence
