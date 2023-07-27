const express = require("express"); // Importing the Express library
const mysql = require("mysql"); // Importing the MySQL library
const cors = require("cors"); // Importing the CORS library

const app = express(); // Creating an instance of the Express application
app.use(express.json()); // Parsing incoming requests with JSON payloads
app.use(cors()); // Enabling Cross-Origin Resource Sharing (CORS)

const db = mysql.createConnection({
    user: "root", // MySQL database username
    host: "localhost", // MySQL database host
    password: "", // MySQL database password
    database: "login_react" // MySQL database name
});

app.post('/register', (req, res) => { // Handling POST request to '/register' endpoint
    const username = req.body.username; // Extracting username from the request body
    const password = req.body.password; // Extracting password from the request body
    const Gid = req.body.Gid; // Extracting Gid from the request body

    db.query("INSERT INTO users (username, pass, Gid) VALUES (?,?,?)", [username, password, Gid], (err, result) => {
        console.log(err); // Logging any error that occurred during the database query
    });
});

app.post('/login', (req, res) => { // Handling POST request to '/login' endpoint
    const username = req.body.username; // Extracting username from the request body
    const password = req.body.password; // Extracting password from the request body
    const Gid = req.body.Gid; // Extracting Gid from the request body

    var isValidLogin = false; // Flag to indicate if the login is valid

    db.query("SELECT * FROM users WHERE username = ? AND pass = ? AND Gid = ?", [username, password, Gid], (err, result) => {
        if (err) {
            console.log(err); // Logging any error that occurred during the database query
        }
        
        if (result.length > 0) {
            isValidLogin = true; // Setting the flag to true if a matching user is found
        }

        if (isValidLogin) {
            // If valid login, set session or generate a token
            // req.session.isAuthenticated = true;
            // req.session.username = username;
            res.json({ success: true, userD: result }); // Sending JSON response with success and user data
        } else {
            res.status(401).json({ success: false, message: 'wrong username/password' }); // Sending JSON response with failure message
        }
    });
});

app.listen(3001, () => { // Starting the server on port 3001
    console.log("running server");
});
