const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

app.get("/", function(req, res) {
    res.send(res.status);
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.listen(process.env.PORT),
    () => {
        console.log("Node app is running on port", 3000);
    };

app.post("/:token/:msg", function(req, res) {
    const token = req.params.token;
    const msg = req.params.msg;
    request({
            method: "POST",
            uri: url_line_notification,
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
    res.send(token, msg);
});