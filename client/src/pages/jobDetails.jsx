import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const [loading, setLoading] = useState(false); // New state for loader
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    degree: "",
    passoutYear: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/jobs/${jobId}`);
        console.log(response)
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job:", error);
      }
    };

    fetchJob();
  }, [jobId]);

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-2xl font-bold">Job Not Found</h2>
      </div>
    );
  }

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  

const handleSubmit = async (e) => {
  e.preventDefault();
  setLoading(true); // Show loader

  const formDataToSend = new FormData();
  formDataToSend.append("name", formData.name);
  formDataToSend.append("email", formData.email);
  formDataToSend.append("resume", formData.resume);
  formDataToSend.append("degree", formData.degree);
  formDataToSend.append("passoutYear", formData.passoutYear);
  formDataToSend.append("jobTitle", job.title);

  try {
    const response = await axios.post("http://localhost:5000/send-application", formDataToSend, {
      headers: { "Content-Type": "multipart/form-data" },
    });

    if (response.data.success) {
      setSubmitted(true);
    } else {
      alert("Failed to send application. Try again.");
    }
  } catch (error) {
    console.error("Error submitting application:", error);
  } finally {
    setLoading(false); // Hide loader
  }
};

  
  return (
    <div className="min-h-screen mt-12 bg-black text-white px-6 py-12 flex flex-col items-center">
      <div className="max-w-3xl w-full">
        <h1 className="text-4xl font-bold border-l-4 border-blue-500 pl-4 mb-6">
          {job.title}
        </h1>
        <p className="text-lg text-gray-300 mb-4">
          <strong>Salary:</strong> {job.salary}
        </p>
        <p className="text-lg text-gray-300 mb-4">
          <strong>Experience:</strong> {job.experience}
        </p>
        <p className="text-lg text-gray-300 mb-6">{job.jobDescription}</p>

        {submitted ? (
          <p className="text-green-400 text-xl font-semibold">
            Your application has been submitted successfully!
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-gray-800 p-6 rounded-lg shadow-lg"
          >
            <div className="mb-4">
              <label className="block text-gray-300" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300" htmlFor="resume">
                Resume (Upload):
              </label>
              <input
                type="file"
                id="resume"
                name="resume"
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300" htmlFor="degree">
                Degree Qualification:
              </label>
              <input
                type="text"
                id="degree"
                name="degree"
                value={formData.degree}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>

            <div className="mb-4">
              <label className="block text-gray-300" htmlFor="passoutYear">
                Passout Year:
              </label>
              <input
                type="number"
                id="passoutYear"
                name="passoutYear"
                value={formData.passoutYear}
                onChange={handleChange}
                required
                className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600"
              />
            </div>

            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition w-full flex justify-center items-center"
            disabled={loading} // Disable while loading
            >
                  {loading ? (
                  <span className="animate-spin border-t-2 border-white rounded-full w-5 h-5 mr-2"></span>
                  ) : (
                           "Apply Now"
                  )}
            </button>

          </form>
        )}

        <button
          className="mt-6 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg transition"
          onClick={() => navigate("/careers")}
        >
          Back to Careers
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
