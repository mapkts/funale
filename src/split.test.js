/* global describe, it, expect */

import split from './split'

describe('split', () => {
  it('splits the string into an array', () => {
    expect( split('/', '/usr/local/bin/node') ).toStrictEqual(['', 'usr', 'local', 'bin', 'node'])
    expect( split('local', '/usr/local/bin/node') ).toStrictEqual(['/usr/', '/bin/node'])
  })
})
