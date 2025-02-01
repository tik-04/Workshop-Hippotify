import db from "../config/database.js"
 
export const getOwnPlaylist = async(userID) => {
    const [res] = await db.promise().query(
        `select id,title from playlists where user_id = ?;`,[userID] // ? แทนเป็น ตัวแปรพารามิตเตอร์ ?(คือตัวแปร),[ค่าของตัวแปร]
    )
    console.log('model : ',res);
    return res
}