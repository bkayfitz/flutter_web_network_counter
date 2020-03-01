var express = require('express');
var cors = require('cors');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.text({
    type: function (req) {
        return 'text';
    }
}));

app.post('/post', function (req, res) {
    let json = JSON.parse(req.body);
    let count = json.count;
    count++;

    res = res.status(200);
    res = res.type('application/json');
    res.send({
        'result': count
    });
});

http.createServer(app).listen(7000);