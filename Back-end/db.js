
const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'postgres',
    password: 'Sphack!123',
    host: 'localhost',
    port: 5432,
    database: 'mahmoud',
});

module.exports = pool;
