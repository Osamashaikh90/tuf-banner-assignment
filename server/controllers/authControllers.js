const jwt = require('jsonwebtoken');
const db = require('../config/db');

const login = (req, res) => {
    const { username, password } = req.body;

    // Query to find admin by username
    const query = 'SELECT * FROM admins WHERE username = ? AND password = ?';
    db.query(query, [username, password], (err, results) => {
        if (err) {
            console.error('Database error:', err);
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(401).json({ error: 'Invalid credentials' });
        }

        const admin = results[0];

        // Create JWT token
        const token = jwt.sign({ id: admin.id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: '24h' });

        // Save token to the database
        const insertQuery = 'INSERT INTO tokens (token, user_id) VALUES (?, ?)';
        db.query(insertQuery, [token, admin.id], (err) => {
            if (err) {
                return res.status(500).json({ error: 'Error storing token' });
            }

            res.json({ token });
        });
    });
};

module.exports = { login };
