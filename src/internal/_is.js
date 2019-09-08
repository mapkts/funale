const _is = (x, y) => ( x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y )
export default _is
