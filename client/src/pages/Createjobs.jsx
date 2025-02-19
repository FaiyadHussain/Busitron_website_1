// CreateJob.js
import React, { useState } from "react";
import axios from "axios";

const CreateJob = () => {
  const [title, setTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const token = localStorage.getItem("Token");

  const handleAddJob = async (e) => {
    e.preventDefault();
    if (!title || !jobDescription || !experience || !salary) return;

    const newJob = { title, jobDescription, experience, salary };

    try {
      const response = await axios.post(
        "http://localhost:5000/admin/createJob",
        newJob,
        { headers: { Authorization: token } }
      );

      if (response.status === 201) {
        setSuccess("Job added successfully!");
        setTitle("");
        setJobDescription("");
        setExperience("");
        setSalary("");
      }
    } catch (error) {
      console.error("Error adding job:", error);
      setError("Error adding job. Please try again later.");
    }
  };

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold border-l-8 border-blue-500 pl-6 mb-4">
            Add a New Job
          </h2>
          <form onSubmit={handleAddJob} className="space-y-4">
            <input type="text" placeholder="Job Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white" />
            <textarea placeholder="Job Description" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)} className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white" rows="3" />
            <input type="text" placeholder="Experience (e.g., 2+ years)" value={experience} onChange={(e) => setExperience(e.target.value)} className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white" />
            <input type="text" placeholder="Salary (e.g., ₹50,000/month)" value={salary} onChange={(e) => setSalary(e.target.value)} className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white" />
            <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-semibold transition duration-300">
              Post Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateJob;