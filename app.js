const express = require('express')
const port = 8000
const pool = require('./modelos/db')

const app = express()

app.get('', (req, res) => {
    res.status(200)
})

app.listen(port, () => console.log(`ok funcionando na porta ${port}`))asdasdasdasdasd