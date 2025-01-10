const songs = [
  { title: 'Bohemian Rhapsody', genre: 'Rock', duration: 354 },
  { title: 'Stairway to Heaven', genre: 'Rock', duration: 482 },
  { title: 'Shape of You', genre: 'Pop', duration: 263 },
  { title: 'Hotel California', genre: 'Rock', duration: 391 },
  { title: 'Blinding Lights', genre: 'Pop', duration: 200 },
  { title: 'November Rain', genre: 'Rock', duration: 537 },
  { title: 'Lose Yourself', genre: 'Hip Hop', duration: 326 }
]

const rockPlaylist = []

for (let i = 0; i < songs.length; i++) {
  if (songs[i].genre === 'Rock' && songs[i].duration > 300) {
    rockPlaylist.push(songs[i])
  }
}

console.log('Rock Playlist (más de 5 minutos):', rockPlaylist)
