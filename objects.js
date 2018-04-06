var playlist = { travisScoot: "uber everywhr",
quovo: "best man",
tydolla: "drop top"
}

function updatePlaylist(object, artist, song) {
  object[artist] = song
  return object
}

function removeFromPlaylist(object, artistName) {
 delete object.artistName
}
