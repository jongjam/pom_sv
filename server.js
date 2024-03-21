import express from 'express';
import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 5000;

// Need to move API calls from the Pomodoro to here because CORS is enabled here. 
app.use(cors());

app.use(express.static('public'));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'src', 'app.html'));
});
app.listen(port, () => {
    console.log(`Server is up at port ${port}`);
});