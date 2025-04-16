import React, { useEffect, useState } from "react";
import { useParams, useNavigate , useLocation } from "react-router-dom";
import axios from "axios";

const JobDetails = () => {
  const [loading, setLoading] = useState(true); // Initially loading is true
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    resume: null,
    degree: "",
    passoutYear: "",
  });

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`https://busitron-website-1.onrender.com/jobs/${jobId}`);
        setJob(response.data);
      } catch (error) {
        console.error("Error fetching job:", error);
      } finally {
        setLoading(false); // Set loading to false after fetching job
      }
    };
    fetchJob();
  }, [jobId]);

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.name);
    formDataToSend.append("email", formData.email);
    formDataToSend.append("resume", formData.resume);
    formDataToSend.append("degree", formData.degree);
    formDataToSend.append("passoutYear", formData.passoutYear);
    formDataToSend.append("jobTitle", job.title);

    try {
      const response = await axios.post("https://busitron-website-1.onrender.com/send-application", formDataToSend, {
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
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold">Loading job details...</h2>
        </div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <h2 className="text-2xl font-bold">Job Not Found</h2>
      </div>
    );
  }

  return (
    <div className="overflow-hidden">
      <div className="min-h-screen w-full mt-12 bg-black text-white px-6 py-12 flex flex-col items-center">
        <div className="max-w-3xl w-full">
          <h1 className="text-4xl font-bold border-l-4 border-blue-500 pl-4 mb-6">{job.title}</h1>

          <div className="mb-4">
            <h2 className="text-2xl font-semibold border-b border-gray-600 pb-2">Job Details</h2>
            <p className="text-lg text-gray-300 mt-2"><strong>Salary:</strong> {job.salary}</p>
            <p className="text-lg text-gray-300"><strong>Experience:</strong> {job.experience}</p>
          </div>

          <div className="mb-6">
            <h2 className="text-2xl font-bold border-b border-gray-600 pb-2">Job Description</h2>
            <p className="text-lg text-gray-300 mt-2 whitespace-pre-line font-bold">{job.jobDescription}</p>
          </div>

          {submitted ? (
            <p className="text-green-400 text-xl font-semibold">Your application has been submitted successfully!</p>
          ) : (
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-300">Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required
                  className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300">Email:</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600" />
              </div>

              <div className="mb-4">
                <label className="block text-gray-300">Degree Qualification:</label>
                <select name="degree" value={formData.degree} onChange={handleChange} required
                  className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600">
                  <option value="">Select Degree</option>
                  <option value="B.Tech">B.Tech</option>
                  <option value="M.Tech">M.Tech</option>
                  <option value="B.Sc">B.Sc</option>
                  <option value="M.Sc">M.Sc</option>
                  <option value="BCA">BCA</option>
                  <option value="MCA">MCA</option>
                  <option value="MBA">MBA</option>
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-300">Passout Year:</label>
                <select name="passoutYear" value={formData.passoutYear} onChange={handleChange} required
                  className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600">
                  <option value="">Select Year</option>
                  {[...Array(8)].map((_, i) => (
                    <option key={i} value={2020 + i}>{2018 + i}</option>
                  ))}
                </select>
              </div>

              <div className="mb-4">
                <label className="block text-gray-300">Resume (Upload):</label>
                <input type="file" name="resume" onChange={handleChange} required
                  className="w-full p-2 mt-1 rounded bg-gray-700 text-white border border-gray-600" />
              </div>

              <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg w-full flex justify-center items-center"
                disabled={loading}>
                {loading ? <span className="animate-spin border-t-2 border-white rounded-full w-5 h-5 mr-2"></span> : "Apply Now"}
              </button>
            </form>
          )}

          <button className="mt-6 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 px-6 rounded-lg"
            onClick={() => navigate("/careers")}>
            Back to Careers
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
