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

    // stored procedure
    let sql = `CALL filterTodo(?)`;

    connection.query(sql, [false], (error, results, fields) => {
        if (error) return console.log(error.message);

        console.log(results);
    });
});