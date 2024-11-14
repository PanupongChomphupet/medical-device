const express = require("express")
const mysql = require("mysql")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "medical_device"
}) // separate database files

db.connect(err => {
    if (err) {
        console.log("Database connection failed")
        return;
    }
    console.log('Connection to database')
})

app.post('/login', (req, res) => {
    const value = [
        req.body.user,
        req.body.pw
    ]
    const sql = "SELECT * FROM `aduser` WHERE email = ? AND password = ?";

    db.query(sql, value, (err, data) => {
        if (err) {
            console.log("Error")
            
        }
        if (data.length > 0) {
            console.log("Login Successfuly")
            res.json({ success: true, data })
        } else {
            console.log("No user found in credentials.")
            res.json({ message: "Invalid user or password" })
        }
    })

})
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000")
})