import express from 'express';
import * as playlistController from '../controllers/playlistController.js';
 
const playlistRoute = express.Router();
 
playlistRoute.get('/owned',playlistController.getOwnPlaylist);
playlistRoute.get('/', playlistController.getUserPlaylist); // get all
playlistRoute.get('/:playlistId', playlistController.getPlaylsitsById);
playlistRoute.put("/:playlistId", playlistController.updatePlaylist)
playlistRoute.post("/:playlistId/track/:trackId", playlistController.addTracktoPlaylist)
playlistRoute.delete("/:playlistId/track/:playlistTrackId", playlistController.deleteTrackFromPlaylist)

export default playlistRoute;