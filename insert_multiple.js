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
    let sql = `INSERT INTO todos(title, completed) VALUES ?`;

    let todos = [
        ['Master NodeJS MySQL', false],
        ['Build NodeJS / MySQL App', true],
    ];

    // execute the insert statement
    connection.query(sql, [todos], (err, results, fields) => {
        if (err) return console.log(err.message);

        console.log(`Inserted Rows: ${results.affectedRows}`);
    });

    // close the database connection
    connection.end((err) => {
        if (err) return console.log(err.message);
    });
});