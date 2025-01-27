import express from 'express';
import connection from './config/database.js';


const app = express();
const PORT = 3000;

app.use(express.json());

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