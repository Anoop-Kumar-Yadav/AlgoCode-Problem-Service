const express = require("express")
const { PORT } = require('./config/server.config')

const app = express()

app.get('/ping', (req, res) => {
    return res.json({
        message : "Problem Service is Alive"
    })
})

app.listen(PORT , () => {
    console.log(`SERVER started at : ${PORT}`);
})