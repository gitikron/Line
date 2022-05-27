const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const request = require('request');
const PORT = process.env.PORT || 3000
const axios = require('axios');
const DB_URL = "https://databasedarlene-default-rtdb.asia-southeast1.firebasedatabase.app"
app.get("/", function(req, res) {
    res.send('ss');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(PORT),
    () => {
        console.log("Node app is running on port", PORT);
    };

app.get("/stock/:token/:msg/", function(req, res) {
    const token = req.params.token;
    const msg = req.params.msg;
    request({
            method: "POST",
            uri: "https://notify-api.line.me/api/notify",
            header: {
                "Content-Type": "multipart/form-data",
            },
            auth: {
                bearer: token,
            },
            form: {
                message: msg,
            },
        },
        (err, httpResponse, body) => {
            if (err) {
                console.log(err);
            } else {
                console.log(body);
            }
        }
    );
    res.send({ status: 200, message: msg });
});


app.get("/login/:user", function(req, res) {
    const user = req.params.user;
    axios.get(`${DB_URL}/auth/${user}.json`).then((result) => {
        res.send(result.data);
    }).catch((err) => {
        res.send(null);
    });
})