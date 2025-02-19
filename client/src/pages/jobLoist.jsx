import React, { useState, useEffect } from "react";
import axios from "axios";

const JobList = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [editJob, setEditJob] = useState(null);
  const [formData, setFormData] = useState({
    title: "",
    jobDescription: "",
    experience: "",
    salary: ""
  });
  
  const token = localStorage.getItem("Token");

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/jobs", {
          headers: { Authorization: token },
        });
        setJobs(response?.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setError("Error fetching jobs. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    if (token) fetchJobs();
  }, [token]);

  const updateJob = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/admin/updateJob/${editJob._id}`, formData, {
        headers: { Authorization: token },
      });
      setJobs(jobs.map((job) => (job._id === editJob._id ? response.data.updatedJob : job)));
      setEditJob(null);
    } catch (error) {
      console.error("Error updating job:", error);
      setError("Failed to update job. Try again later.");
    }
  };

  const deleteJob = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/admin/deleteJob/${id}`, {
        headers: { Authorization: token },
      });
      setJobs(jobs.filter((job) => job._id !== id));
    } catch (error) {
      console.error("Error deleting job:", error);
      setError("Failed to delete job. Try again later.");
    }
  };

  return (
    <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-8 py-16 flex items-center justify-center">
      <div className="max-w-4xl w-full space-y-8">
        {isLoading ? (
          <div className="flex justify-center items-center">
            <div className="w-12 h-12 border-4 border-gray-400 border-t-blue-500 rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : jobs.length > 0 ? (
          <div className="bg-gray-800 bg-opacity-30 backdrop-blur-md p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold border-l-8 border-blue-500 pl-6 mb-4">
              Posted Jobs
            </h2>
            <ul className="space-y-3">
              {jobs.map((job) => (
                <li key={job._id} className="p-3 bg-gray-900 border border-gray-700 rounded-lg">
                  <h3 className="text-lg font-semibold">{job.title}</h3>
                  <p className="text-gray-400"><span className="font-bold text-gray-300">JobDescription : </span>{job.jobDescription}</p>
                  <p className="text-gray-400">
                    <strong className="font-bold text-gray-300">Experience : </strong> {job.experience}
                  </p>
                  <p className="text-gray-400">
                    <strong className="font-bold text-gray-300">Salary : </strong> {job.salary}
                  </p>
                  <button
                    className="bg-blue-600 hover:bg-blue-700 hover:cursor-pointer px-3 py-1 rounded mt-2"
                    onClick={() => {
                      setEditJob(job);
                      setFormData(job);
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className=" bg-red-600 hover:bg-red-700 hover:cursor-pointer px-3 py-1 rounded mt-2 ml-2"
                    onClick={() => deleteJob(job._id)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center text-gray-400">No jobs found.</p>
        )}

        {editJob && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-96">
              <h2 className="text-2xl font-semibold border-l-8 border-blue-500 pl-6 mb-4">Edit Job</h2>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Job Title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
                />
                <textarea
                  placeholder="Job Description"
                  value={formData.jobDescription}
                  onChange={(e) => setFormData({ ...formData, jobDescription: e.target.value })}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
                  rows="3"
                />
                <input
                  type="text"
                  placeholder="Experience (e.g., 2+ years)"
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
                />
                <input
                  type="text"
                  placeholder="Salary (e.g., ₹50,000/month)"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white"
                />
                <button
                  type="button"
                  className="w-full bg-green-500 hover:bg-green-600 px-6 py-3 rounded-lg font-semibold transition duration-300"
                  onClick={updateJob}
                >
                  Update Job
                </button>
                <button
                  type="button"
                  className="w-full bg-gray-500 hover:bg-gray-600 px-6 py-3 rounded-lg font-semibold transition duration-300 mt-2"
                  onClick={() => setEditJob(null)}
                >
                  Cancel
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobList;
