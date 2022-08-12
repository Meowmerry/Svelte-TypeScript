const {Pool} = require('pg');
require('dotenv').config();
const myURL = 'postgres://postgres:meowmerry03@localhost:5432/appTodoList?sslmode=disable'

const url = process.env.PG_URI || myURL;

const pool = new Pool({
  connectionString: url
});

module.exports = {
  query: (text:string, params:string, callback : any)=>{
    return pool.query(text, params, callback)
  }
}