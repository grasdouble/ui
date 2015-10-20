// modules =================================================
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// configuration ===========================================
var port = 8081; // set our port
app.use(express.static(__dirname));    // set the static files location /public/img will be /img for users
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
    extended: true
}));

app.use("/js", express.static(__dirname + "/app/js"));
app.use("/dist", express.static(__dirname + "/run/dists"));
app.use("/imgs", express.static(__dirname + "/app/imgs"));
app.use("/css", express.static(__dirname + "/app/css"))
app.use("/fonts", express.static(__dirname + "/app/fonts"));
app.use("/data", express.static(__dirname + "/app/data"));
app.use("/partials", express.static(__dirname + "/app/partials"));

app.get('/*', function (req, res) {
    res.sendFile(__dirname + "/app/index.html");
});

// start app ===============================================
app.listen(port);
console.log('Magic happens on port ' + port);        // shoutout to the user
exports = module.exports = app;                   // expose app