const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
const db = new sqlite3.Database('./data.db', (err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
  } else {
    console.log('Connected to the database.');
  }
});

// Create table if not exists
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS shapes (
      id INTEGER PRIMARY KEY,
      data TEXT NOT NULL
    )
  `);
});

// Function to insert a new shape
exports.insertShape = (shape, callback) => {
  db.run('INSERT INTO shapes (data) VALUES (?)', [JSON.stringify(shape)], function(err) {
    if (err) {
      console.error('Error inserting shape:', err.message);
      return callback(err);
    }

    console.log(`Shape added with ID: ${this.lastID}`);
    callback(null, this.lastID);
  });
};

// Function to get all shapes with optional limit
exports.getAllShapes = (limit, callback) => {
  let query = 'SELECT * FROM shapes ORDER BY id DESC';
  const params = [];

  if (limit !== null) {
    query += ' LIMIT ?';
    params.push(limit);
  }

  db.all(query, params, (err, rows) => {
    if (err) {
      console.error('Error getting shapes:', err.message);
      return callback(err);
    }

    const shapes = rows.map(row => JSON.parse(row.data));
    callback(null, shapes);
  });
};
