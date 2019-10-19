import _curry2 from './internal/_curry2'

const split = _curry2((spliter, string) => string.split(spliter))
export default split
