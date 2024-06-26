const express = require('express');
const request = require('request');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Gunakan middleware cors
app.use(cors());


app.get('/', (req, res) => {
    res.send('Hello from Express on Vercel! Server is running');
});

app.get('/stream', (req, res) => {
    const streamUrl = 'http://utradio.ut.ac.id:8000/liv.ogg';

    // Atur header agar browser mengetahui jenis konten
    res.setHeader('Content-Type', 'audio/ogg');

    // Redirect stream dari URL ke client
    request.get(streamUrl).pipe(res);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
