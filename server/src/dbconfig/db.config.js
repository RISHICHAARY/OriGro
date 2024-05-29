const { Pool } = require('pg');
require("dotenv").config();

const pool = new Pool({
    connectionString: process.env.DB_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

pool.connect((err)=>{
    if(err){
        console.log(process.env.DB_URL);
        console.log(err);
        throw err;
    }
    else{
        console.log("Database connected successfully...")
    }
});

module.exports = pool;