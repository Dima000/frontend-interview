const express = require('express');
const cors = require('cors');
const db = require('./db');
const { generateShape } = require('./generate-shape');

const app = express();
const port = 3003;

// Enable CORS for all routes
app.use(cors());

// Express middleware to parse JSON request body
app.use(express.json());

// Route to create a new shape
app.post('/shapes', (req, res) => {
  const { x, y } = req.body;
  if (!x || !y) {
    return res.status(400).json({ error: 'x and y are required.' });
  }

  const shape = generateShape(x, y);

  db.insertShape(shape, (err, shapeId) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to create shape.' });
    }

    res.status(201).json({...shape, id: shapeId});
  });
});

// Route to get all shapes
app.get('/shapes', (req, res) => {
  const limit = req.query.limit ? parseInt(req.query.limit) : null;

  db.getAllShapes(limit, (err, shapes) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to get shapes.' });
    }

    res.json(shapes.reverse());
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
