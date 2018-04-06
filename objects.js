var playlist = { travisScoot: "uber everywhr",
quovo: "best man",
tydolla: "drop top"
}

function updatePlaylist(object, artist, song) {
  object[artist] = song
  return object
}

function removeFromPlaylist(playlist, artistName) {
  Object.assign({}, playlist, { artistName })
return artistName
}
