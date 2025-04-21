const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    index: true, // Adding index on title for fast search
  },
  jobDescription: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
    index: true, // Adding index on experience for quick filtering
  },
  salary: {
    type: String,
    index: true, // Adding index on salary for efficient range queries
  },
});

// Create a compound index for title and experience if required
jobSchema.index({ title: 1, experience: 1 }); // Compound index for title and experience

const JobList = mongoose.model("JobList", jobSchema);

module.exports = JobList;
