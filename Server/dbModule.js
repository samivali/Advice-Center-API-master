// const sqlite3 = require('sqlite3').verbose();
// const bodyParser = require(`body-parser`);
// const fs = require(`fs`);
// //rsconst app = express();

// // app.use(bodyParser.urlencoded({ extended: true }));
// // app.use(bodyParser.json());


// function initializeDatabase(){
// const db = new sqlite3.Database('/Users/samanthavaliente/Desktop/Advice-Center-API-master/Comments.db', sqlite3.OPEN_READWRITE , (err) => {
//     if (err) {
//         console.error('Ersrror opening database:', err.message);
//     } else {
//         console.log('Connected to the SQLite3 database.');
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

// function parseComments(){
// //why is it infinetly restarting the server due to changes
// db.all(`SELECT comment, response FROM comments`, [], (err, rows) => {
//     const jsonData = JSON.stringify(rows, null, 2);
//     fs.writeFile( `data.json`, jsonData, (err) => {
//         if(err){
//             console.log(`error writing JSON file:`, err.message)
//         } else{
    
//             console.log(`JSON data written to data.json`);
//         }
//     });
// });
// }

// function addData(){
//     db.run(`INSERT INTO comments (comment, email) VALUES (?,?)`, [comment, email], (err) => {
//         if (err) {
//             console.error(`Error inserting comment`, err);
//             res.status(500).send(`Internal server error`);
//         } 
//     });
// }

// module.exports = {
//     db,
//     initializeDatabase,
//     parseComments,
//     addData
// };