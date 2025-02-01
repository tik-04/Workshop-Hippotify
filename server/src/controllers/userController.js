import * as userModel from '../models/userModel.js'

const userID = 4

export const getUser = async(req,res) => {
    try {
        const response = await userModel.getUser(userID)
        return res.status(200).json({
            success: true,
            data: response,
            message: "User retrieved successfully",
          });
        } catch (error) {
          console.log("Error: ", error);
          return res.status(500).json({
            success: false,
            data: null,
            message: "Internal server error",
          });
        }
}