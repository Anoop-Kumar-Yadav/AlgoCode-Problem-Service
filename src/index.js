const express = require("express")

const { PORT } = require('./config/server.config')
const apiRouter = require('./routes/index')
const errorHandler = require("./utils/errorHandler")
const connectDB = require("./config/db.config")

const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(express.text())

// If any request comes and route start with /api , we ,map it to apiRouter
app.use("/api",apiRouter)

app.use(errorHandler)
app.listen(PORT , async () => {
    console.log(`SERVER started at : ${PORT}`);
    await connectDB()
})