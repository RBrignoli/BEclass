const { Client } = require('pg')
const client = new Client({
    host: process.env.host,
    port: process.env.port,
    user: process.env.user,
    password: process.env.pwd,
    database: process.env.db_name
})

const connectDB = async () => {
    client
    .connect()
    .then(() => {
        console.log('Connected to PostgreSQL database');
    })
    .catch((err) => {
        console.error('Error connecting to PostgreSQL database', err);
    });
  };
  
module.exports = { client, connectDB };