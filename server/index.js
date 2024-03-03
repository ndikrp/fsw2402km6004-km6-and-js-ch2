const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '../public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

app.get('/cars', (req, res) => {
    res.sendFile(path.join(__dirname, '../public', 'cariMobil.html'));
});


app.listen(PORT, () => {
    console.log(`Server berjalan di port http://localhost:${PORT}`);
});
