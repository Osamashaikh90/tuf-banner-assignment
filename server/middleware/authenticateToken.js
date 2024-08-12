require('dotenv').config();
const jwt = require('jsonwebtoken');
const db = require('../config/db');

const authenticateToken = (req, res, next) => {;
    const token = process.env.TOKEN

    if (!token) {
        return res.status(401).json({ error: 'Access denied' });
    }

    // Retrieve token from database
    const query = 'SELECT * FROM tokens WHERE token = ?';
    db.query(query, [token], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Database error' });
        }

        if (results.length === 0) {
            return res.status(403).json({ error: 'Invalid token' });
        }

        // Verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
            if (err) {
                return res.status(403).json({ error: 'Invalid token' });
            }

            req.user = user;
            next();
        });
    });
};

module.exports = authenticateToken;
