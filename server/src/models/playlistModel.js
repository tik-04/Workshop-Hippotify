import db from "../config/database.js"
 
export const getOwnPlaylist = async(userID) => {
    const [res] = await db.promise().query(
        `select id,title from playlists where user_id = ?;`,[userID] // ? แทนเป็น ตัวแปรพารามิตเตอร์ ?(คือตัวแปร),[ค่าของตัวแปร]
    )
    console.log('model : ',res);
    return res
}

export const getUserPlaylist = async (userId) => {
    const [response] = await db.promise().query(
        `SELECT id, title, cover
        FROM playlists
        WHERE user_id = ? OR type = 'Public'`, [userId])
    return response;
}

export const getPlaylistInfoById = async (playlistId, userId) => {
    const [response] = await db.promise().query(
        `SELECT p.id, p.title, p.description, p.cover, p.type, u.id AS author_id, u.image_url AS author_image, u.username AS author_name
        FROM playlists p
        JOIN users u ON p.user_id = u.id
        WHERE p.id = ?
        AND (p.user_id = ? OR p.type = 'Public')`, [playlistId, userId])
    return response[0];
}

export const getPlaylistTracks = async (playlistId) => {
    const [response] = await db.promise().query(
        `SELECT pt.id, t.id track_id, t.title, t.cover, t.artist, t.album, DATE_FORMAT(pt.created_at, '%b %d, %Y') AS date_added, t.duration
        FROM playlist_tracks AS pt
        JOIN tracks t ON pt.track_id = t.id
        WHERE pt.playlist_id = ?;`, [playlistId])
    return response;
}

export const updatePlaylist = async (playlistId, title, description) => {
    await db.promise().query(
      `UPDATE playlists 
       SET title = ?, description = ?
       WHERE id = ?`,
      [title, description, playlistId]
    );
  };
  
  export const addTrackToPlaylist = async (playlistId, trackId) => {
    await db.promise().query(
      `INSERT INTO playlist_tracks (playlist_id, track_id)
       VALUES (?, ?)`,
      [playlistId, trackId]
    );
  };
  
  export const removeTrackFromPlaylist = async (playlistId, playlistTrackId) => {
    await db.promise().query(
      `DELETE FROM playlist_tracks 
       WHERE playlist_id = ? AND id = ?`,
      [playlistId, playlistTrackId]
    );
  };