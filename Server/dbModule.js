const sqlite3 = require('splite3').verbose();
const bodyParser = require(`body-parser`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


function initializeDatabase(){


const db = new sqlite3.Database('./Comments.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite3 database.');
        // Create comments table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            comment STRING,
            email STRING,
            response STRING)`, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            } else {
                console.log('Table "comments" created successfully.');
            }
        });
    }
})
};

function parseComments(){
    const db = new splite3.Database('.Comments.db', sqlite3.OPEN_READONLY, (err) => {
        if(err){
            console.error('Error opening database: ', err.message);
        }else{
            console.log(`Connencted to the SQlite3 database`)
        }
    });

    db.all(`SELECT * FROM comments`, [], (rows) => {
        const jsonData = JSON.stringify(rows, null, 2);
        
        Fs.writeFile( `data.json`, jsonData, (err) => {
            if(err){
                console.log(`error writing JSON file:`, err.message)
            } else{
                console.log(`JSON data written to data.json`);
            }
        });
    });

    db.close((err) =>{
        if(err){
            console.error(`Error closing database:`, err.message)
        }else{
            console.log(`database closed`)
        }
    })

}

module.exports = {
    db,
    initializeDatabase
};