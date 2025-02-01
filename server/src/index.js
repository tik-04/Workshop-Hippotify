import express from 'express';
import connection from './config/database.js';
import playlistRoute from './routes/playlistRoute.js';
import userRoute from './routes/userRoute.js';

const app = express();
const PORT = 3000;

app.use(express.json());

app.use("/api/playlists" ,playlistRoute)
app.use("/api/users" ,userRoute)


connection.connect((err)=> {
    if(err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    } 
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});