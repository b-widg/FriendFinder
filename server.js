// https://www.youtube.com/watch?v=kWu9stxD6m0

var express = require(`express`);
var bodyParser = require(`body-parser`);
var path = require(`path`);

var app = express();
var port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyparser.text());
app.use(bodyParser.json({type: `application/vnd.api+json`}));

app.listen(port, () => console.log(`Listening on port ${port}`));



