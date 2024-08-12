require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 4000;
const bannerRoutes = require('./routes/bannerRoutes');
const authRoutes = require('./routes/authRoutes');
const authenticateToken = require('./middleware/authenticateToken'); 

app.use(cors());
app.use(express.json());

app.use('/api/banner', authenticateToken);

app.use('/api', bannerRoutes);
app.use('/api', authRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Dynamic One-Page Website API');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});