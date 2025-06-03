// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  const uniqueTracks = new Set(playlist);
  return Array.from(uniqueTracks);
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  const uniqueTracks = new Set(playlist);
  return uniqueTracks.has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  const uniqueTracks = new Set(playlist);
  uniqueTracks.add(track);
  return Array.from(uniqueTracks);
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const uniqueTracks = new Set(playlist);
  uniqueTracks.delete(track);
  return Array.from(uniqueTracks);
}

/**
 * Lists the unique artists in a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} list of artists
 */
export function listArtists(playlist) {
  const uniqueTracks = new Set(playlist);
  const artists = new Set();
  for (const track of uniqueTracks) {
    const artist = track.split(" - ")[1];
    artists.add(artist);
  }
  return Array.from(artists);
}
