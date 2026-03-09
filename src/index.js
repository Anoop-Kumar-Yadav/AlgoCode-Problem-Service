const express = require("express")
const { PORT } = require('./config/server.config')

const apiRouter = require('./routes/index')

const app = express()


app.use(express.json())
app.use(express.urlencoded())
app.use(express.text())
app.use("/api",apiRouter)


app.get('/ping', (req, res) => {
    return res.json({
        message : "Problem Service is Alive"
    })
})

app.listen(PORT , () => {
    console.log(`SERVER started at : ${PORT}`);
})