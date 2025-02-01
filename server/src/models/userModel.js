import db from "../config/database.js"

export const getUser = async(userId) => {
    const [response] = await db.promise().query(
        `SELECT id, image_url, email, username, role
               FROM users 
               WHERE id = ?`, [userId]
    );
    return response[0]
}