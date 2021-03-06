var mongoose = require( 'mongoose' );
var Schema = mongoose.Schema;

var newAssignment = new Schema({
  title: { type: String },
  assignment_number: { type: Number },
  student_name: { type: String },
  score: { type: Number },
  date_completed:  Date
});

var Assignment = mongoose.model( 'Assignment', newAssignment );

module.exports = Assignment;
