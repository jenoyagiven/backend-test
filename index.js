var express = require("express")
var app = express()
var cors = require("cors")
var bodyParser = require("body-parser")

app.use(bodyParser())
app.use(cors())
const {authRouter} = require("./2.router")

app.use(express.static('./public'))


app.use("/authRouter", authRouter)


const port = 2004

app.listen(port, () => console.log("listening"))