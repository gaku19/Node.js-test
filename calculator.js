const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");


const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {

    let number1 = Number(req.body.num1);
    let number2 = Number(req.body.num2);

    let result= number1 + number2;

    console.log(req.body.email);
    console.log(req.body.fullname);

    res.send("The addition of the two numbers are " + result);
})



//database 
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '?',
    database: 'test'
  });

connection.connect((err) => {
    if (err) {
    console.log('error connecting: ' + err.stack);
    return;
}
console.log('success');
});


app.listen(3000, (req, res) => {
    console.log("Server is running on port 3000");
});