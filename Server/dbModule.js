// const sqlite = require('splite3').verbose();
// const bodyParser = require(`body-parser`);

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());


// function initializeDatabase(){


// const db = new sqlite.Database('./Comments.db', (err) => {
//     if (err) {
//         console.error('Error opening database:', err.message);
//     } else {
//         console.log('Connected to the SQLite database.');
//         // Create comments table if it doesn't exist
//         db.run(`CREATE TABLE IF NOT EXISTS comments (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             comment STRING,
//             email STRING,
//             response STRING)`, (err) => {
//             if (err) {
//                 console.error('Error creating table:', err.message);
//             } else {
//                 console.log('Table "comments" created successfully.');
//             }
//         });
//     }
// })
// };

// module.exports = {
//     db,
//     initializeDatabase
// };