const playlist = { travisScoot: "uber everywhr",
quovo: "best man",
tydolla: "drop top"
}

function updatePlaylist(object, artist, song) {
  object[artist] = song
  return object
}

function removeFromPlaylist(playlist, artistName) {
 playlist = playlist
 return delete playlist.artistName
}
