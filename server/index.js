const express = require("express")
const mysql = require("mysql")
const cors = require("cors")
const jwt = require('jsonwebtoken')

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
})

app.post('/login', (req, res) => {
    const { username, password } = req.body
    const sql = "SELECT * FROM `admin` WHERE User = ? AND Password = ?";

    db.query(sql, [username, password], (err, data) => {
        if (err) {
            console.log("Error")
            res.status(500).json({ message: "database query error", error: err })

        }
        if (data && data.length > 0) {
            const token = jwt.sign({ username }, '', { expiresIn: '1h' })
            console.log("Successfuly")
            res.json({ success: true, token })
        } else {
            console.log("Unable")
            res.json({ success: false, message: "Invalid user or password" })
        }
    })

})

app.get('/getDataTable', (req, res) => {
    const sql = "SELECT * FROM `hospital` WHERE 1";
    db.query(sql, (err, data) => {
        if (err) {
            console.log("ERROR")
            res.status(500).json({message: "not found data in database"})
        }
        res.json({data})
    })
})
app.listen(5000, () => {
    console.log("Server is running on http://localhost:5000")
})