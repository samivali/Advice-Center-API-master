const express = require('express');
const fs =require('fs');
const bodyParser = require(`body-parser`);
const app = express();
const sqlite3 = require(`sqlite3`).verbose();
const multer = require(`multer`);
const dbModule = require(`./Server/dbModule.js`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + `/Public`))

//dbModule.initializeDatabase();




const homeSite = '/Users/samanthavaliente/Desktop/Advice-Center-API-master/Public/HomeSite.html'
//PORT
const port = process.env.PORT || 3000;

app.use(express.static('Public', {
   
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

const db = new sqlite3.Database('./Comments.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create comments table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            comment STRING,
            email STRING,
            response STRING
            )`, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            } else {
                console.log('Table "comments" created successfully.');
            }
        });
    }
});




//POST REQUEST
app.post("/comment", (req, res) => {
    fs.readFile(`/Users/samanthavaliente/Desktop/Advice-Center-API-master/Public/comments.html`, function(error, data){
        if(error){
            res.writeHead(404, 'Error: File Not Found')
        }else{
            res.write(data)
        }
        res.end()
    });

    console.log(req.body);
    console.log("Content-Type:", req.get('Content-Type'));
    const comment = req.body.comment;
    const email = req.body.email;
    console.log(`${comment} ${email}`);
    

    db.run(`INSERT INTO comments (comment, email) VALUES (?,?)`, [comment, email], (err) => {
        if (err) {
            console.error(`Error inserting comment`, err);
            res.status(500).send(`Internal server error`);
        } 
    });
});
////



// //why is it infinetly restarting the server due to changes
// db.all(`SELECT comment, response FROM comments`, [], (err, rows) => {
//     const jsonData = JSON.stringify(rows, null, 2);
//     fs.writeFile( `/Data/data.json`, jsonData, (err) => {
//         if(err){
//             console.log(`error writing JSON file:`, err.message)
//         } else{
    
//             console.log(`JSON data written to data.json`);
//         }
//     });
// });


//forms initial website address, writes the html file to the website if no errors
app.get('/', (req,res) => {
    fs.readFile(homeSite, function(error, data) {
        if(error){
            res.writeHead(404, 'Error: File Not Found')
        }
        else{
            res.write(data)
        }
        res.end()
    })
});

//startes the server, logs to console to tell where its being run on computer
const  server = app.listen(port, () => console.log(`its alive on http://localhost:${port}`));

//closes database when server is ended
server.on('close', () => {
    db.close((err)=>{
        if(err){
            console.error('Error closeing database:', err.message);
        } else{
            console.log('Database closed');
        }
    })
})