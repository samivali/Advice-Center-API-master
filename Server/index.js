const express = require('express');
const fs =require('fs');
const bodyParser = require(`body-parser`);
const app = express();
const sqlite = require(`sqlite3`).verbose();
const multer = require(`multer`);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());




const homeSite = '/Users/samanthavaliente/Desktop/Advice-Center-API/Public/HomeSite.html'
//PORT
const port = process.env.PORT || 3000;

app.use(express.static('Public', {
   
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
    }
}));

//Test data
// const recs =[
//     {id: 1, name: 'science'},
//     {id: 2, name: 'history'},
//     {id: 3, name: 'art'},
// ];
// //

const db = new sqlite.Database('./Comments.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');
        // Create comments table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS comments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            comment STRING,
            email STRING,
            respondedTo Boolean)`, (err) => {
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
    console.log(req.body);
    console.log("Content-Type:", req.get('Content-Type'));
    const comment = req.body.comment;
    const email = req.body.email;
    console.log(`${comment} ${email}`);
    

    db.run(`INSERT INTO comments (comment, email) VALUES (?,?)`, [comment, email], (err) => {
        if (err) {
            console.error(`Error inserting comment`, err);
            res.status(500).send(`Internal server error`);
        } else {
            
            console.log(`Comment Under Review`);
            res.send('Comment submitted successfully');
        }
    });
});




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




// app.get('/classRecs', (req,res) =>{
//     res.send('hello World!!!')
// })

// app.get('/classRecs/:name',(req,res) =>{
//     let rec = recs.find(c=> c.name === req.params.name);
//     if(!rec) res.status(404).send('this class is not avalible')
//     res.send(rec);
// })

// app.post('/classRecs', (req,res) => {
//     const rec = {
//         id: recs.length +1,
//         name: req.body.name
//     }
//     recs.push(rec);
//     res.send(recs);
// });





app.listen(port,()=> console.log(`listening on port ${port}`))