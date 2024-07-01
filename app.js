require("dotenv").config();
const express = require('express')
const port = 8000
const db = require('./db')

const app = express()

db.connectDB();

const usersRoute = require("./rotas/user");
app.use("/users", usersRoute);


app.listen(port, () => console.log(`ok funcionando na porta ${port}`))