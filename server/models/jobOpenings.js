const mongoose = require('mongoose')

const jobSchema = new mongoose.Schema({
   title : {
    type : String,
    required: true,
   },
   jobDescription : {
    type: String ,
    required : true,
   },
   experience : {
    type : String,
    required :true,
   },
   salary : {
    type: String
   }
})
const JobList = mongoose.model('JobList',jobSchema)
module.exports = JobList