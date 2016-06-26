var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
var Assignment = require( '../models/assignments');
var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/assignments";
// connects to db and a document store & returns object that gives us access to the client
var MongoDB = mongoose.connect(mongoURI).connection;

app.use( bodyParser.json() );

// allows us to see a console log when we can't connect
MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

// lets us know when it's connected!
MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

// spin up server
app.listen( 3000, 'localhost', function( req, res ){
  console.log( 'listening on 3000' );
});

// set static folder to public
app.use(express.static('public'));

// base url to show path resolved index.html
app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});

// get route to read assignments from database
app.get( '/getPath', function( req, res ){
  Assignment.find()
  .then( function( data ){
    res.send( data );
    console.log(data);
  });
}); // end getPath

// post route to create assignments and send info to db
app.post( '/postPath', function( req, res ){
  var assignToAdd = {
    title: req.body.title,
    assignment_number: req.body.number,
    student_name: req.body.name,
    score: req.body.score,
    date_completed: new Date()
  };
  console.log( 'Server received: ' + assignToAdd.title + ', ' + assignToAdd.score + ', ' + assignToAdd.assignment_number + ', ' + assignToAdd.date_completed + '.');
  var serverPackage = Assignment( assignToAdd );
  serverPackage.save();
}); // end postPath
