const sqlite = require(`sqlite3`).verbose();
const db = new sqlite.Database("./Database.db", sqlite.OPEN_READWRITE, (err)=> {
    if(err) return console.error(err);
});

const sql = `CREATE TABLE quote(ID INTEGER PRIMARY KEY, comment, response, email)`;
db.run(sql);