var playlist={eminem:"goat"};
function updatePlaylist(playlist, artistName, songTitle)
{
  return playlist[artistName]="songTitle";
}
function removeFromPlaylist(playlist, artistName)
{
  delete playlist.eminem;
  return playlist;
}
