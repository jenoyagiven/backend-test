var mysql = require("mysql")

const db = mysql.createConnection({
    user:"root",
    password:"password",
    database:"moviepurwadhika",
    host: "localhost"
})

module.exports = db