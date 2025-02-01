import * as playlistModel from '../models/playlistModel.js' // เราประกาศเรียกว่า playlistModel เฉยๆเพื่อเก็บโมเดลมาใช้ข้างล่าง
 
const userID = 5;
 
export const getOwnPlaylist = async(req,res) => {
    try{
        const playlist = await playlistModel.getOwnPlaylist(userID)
        return res.status(200).json({
            success : true,
            data: playlist,
            message: 'Playlist retrieved successfully'
        })
    } catch (error){
        console.log(error);
        return res.status(500).json({
            success: false,
            data: null,
            message:'Internal Server error'    
        })
    }
}
 