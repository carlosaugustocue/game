const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

const port = process.env.PORT || 3001;
const apiKey = process.env.GOOGLE_MAPS_API_KEY;

// Configurar CORS
app.use(cors());

app.use(express.static(path.join(__dirname, '/')));

app.get('/config', (req, res) => {
    res.json({ apiKey: apiKey});
});

app.get('/scores', (req, res) => {
    
    res.redirect('http://localhost:3001/scores.html');

});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
