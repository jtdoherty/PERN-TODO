const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "52Rock*#@39",
    host: "localhost",
    port: "5432",
    database: "perntodo",
});

module.exports = pool;
