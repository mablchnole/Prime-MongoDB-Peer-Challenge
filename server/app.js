var express = require('express');
var app=express();
var path = require('path');
var bodyParser = require('body-parser');
var assignments = require( '../models/assignments');

var mongoose = require('mongoose');
var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

app.use( bodyParser.json() );

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});

app.get( '/getAssign', function( req, res ) {
  Assignment.find( {}, function( err, assignments ) {
    if( err ) {
    res.sendStatus( 500 );
  }else{
    res.send( );
    }
  });
});

app.get( 'getPath', function( req, res ){

});

app.post( 'postPath', function( req, res ){

});

// spin up server
app.listen( 1234, 'localhost', function( req, res ){
  console.log( 'listening on 1234' );
});

// set static folder to public
app.use(express.static('public'));

// base url to show path resolved index.html
app.get('/', function(req, res){
  res.sendFile(path.resolve('views/index.html'));
});
