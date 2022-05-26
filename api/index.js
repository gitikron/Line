const request = require('request');

const TOKEN = '7Tdl91Ev4Fu8gRd5PwLUfVm7ziyLa3fi0XCa8grksaR'
const url_line_notification = "https://notify-api.line.me/api/notify";

const line = request({
    method: 'POST',
    uri: url_line_notification,
    header: {
        'Content-Type': 'multipart/form-data',
    },
    auth: {
        bearer: TOKEN,
    },
    form: {
        message: 'Test Message!'
    },
}, (err, httpResponse, body) => {
    if (err) {
        console.log(err)
    } else {
        console.log(body)
    }
});

module.exports.line = line