/* global describe, it, expect */

import sortBy from './sortBy'
import prop from './prop'

describe('sortBy', () => {
  const albums = [
    { title: 'Art of the Fugue', artist: 'Glenn Gould', genre: 'Baroque' },
    { title: 'A Farewell to Kings', artist: 'Rush', genre: 'Rock' },
    { title: 'Timeout', artist: 'Dave Brubeck Quartet', genre: 'Jazz' },
    { title: 'Fly By Night', artist: 'Rush', genre: 'Rock' },
    { title: 'Goldberg Variations', artist: 'Daniel Barenboim', genre: 'Baroque' },
    { title: 'New World Symphony', artist: 'Leonard Bernstein', genre: 'Romantic' },
    { title: 'Romance with the Unseen', artist: 'Don Byron', genre: 'Jazz' },
    { title: 'Somewhere In Time', artist: 'Iron Maiden', genre: 'Metal' },
    { title: 'In Times of Desparation', artist: 'Danny Holt', genre: 'Modern' },
    { title: 'Evita', artist: 'Various', genre: 'Broadway' },
    { title: 'Five Leaves Left', artist: 'Nick Drake', genre: 'Folk' },
    { title: 'The Magic Flute', artist: 'John Eliot Gardiner', genre: 'Classical' },
  ]

  it('sorts by a simple property of the objects', () => {
    const sortedAlbums = sortBy(prop('title'), albums)
    expect( sortedAlbums.length ).toBe(albums.length)
    expect( sortedAlbums[0].title ).toBe('A Farewell to Kings')
    expect( sortedAlbums[11].title ).toBe('Timeout')
  })
})
