/* eslint-disable newline-per-chained-call */

const _type = x => (x === null ? 'null' : x === undefined ? 'undefined' : Object.prototype.toString.call(x).slice(8, -1).toLowerCase())
export default _type
