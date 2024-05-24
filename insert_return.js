let mysql = require('mysql');

let connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) return console.log(err.message);

    // insert statement
    let sql = `INSERT INTO todos(title, completed)
               VALUES(?, ?)`;

    let todo = ['Insert a new row with placeholder', false];

    // execute the insert statement
    connection.query(sql, todo, (err, results, fields) => {
        if (err) return console.log(err.message);

        console.log('Todo id: ', results.insertId);
        console.log('Todo title: ', todo[0]);
    });

    // close the database connection
    connection.end((err) => {
        if (err) return console.log(err.message);
    });
});