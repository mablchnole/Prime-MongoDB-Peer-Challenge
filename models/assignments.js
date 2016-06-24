var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var newAssignment = new Schema({
  title: { type: String },
  assignment_number: { type: Number, unique: true },
  student_name: { type: String, unique: true },
  score: { type: Number },
  date_completed: { Date }
});

var Assignment = mongoose.model( 'assignments', newAssignment );

module.exports = Assignment;
