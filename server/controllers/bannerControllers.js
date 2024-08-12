const db = require('../config/db');

const createBanner = (req, res) => {
    const { description, timer, link, isActive } = req.body;
    const query = 'INSERT INTO banners (description, timer, link, isActive) VALUES (?, ?, ?, ?)';
    db.query(query, [description, timer, link, isActive], (err, result) => {
        if (err) {
            res.status(500).json({ error: 'Error creating banner' });
        } else {
            res.status(201).json({ message: 'Banner created successfully', bannerId: result.insertId });
        }
    });
};

const getBanner = (req, res) => {
    const query = 'SELECT * FROM banners LIMIT 1';
    db.query(query, (err, result) => {
        if (err) {
            res.status(500).send('Error fetching banner data');
        } else {
            res.json(result[0]);
        }
    });
};

module.exports = { getBanner, createBanner };
