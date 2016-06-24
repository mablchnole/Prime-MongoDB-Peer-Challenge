var mongoose = require('mongoose');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

// spin up server
app.listen(1234, 'localhost', function(req, res){
  console.log('server listening on 1234');
});

// set static folder to public
app.use(express.static('public'));

// base url to show path resolved index.html
app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});
