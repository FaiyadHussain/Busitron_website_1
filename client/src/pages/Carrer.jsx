import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Career = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5000/jobs");
        setTimeout(() => {
          setJobs(response.data);
          setLoading(false);
        }, 1000); // Ensures loader is shown for at least 2 seconds
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div>
      <div className="min-h-screen mt-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white px-8 py-16 flex items-center justify-center">
        <div className="max-w-5xl w-full space-y-12">
          
          {/* Career Section Header */}
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold border-l-8 border-blue-500 pl-6 inline-block">
              CAREER OPPORTUNITIES
            </h1>
            <p className="text-lg text-gray-300 mt-4 leading-relaxed">
              Join our team and be a part of an innovative and dynamic workplace. Explore our latest job openings and find the right fit for you.
            </p>
          </div>

          {/* Job Listings with 2s Loader */}
          <div className="space-y-8">
            {loading ? (
              // Loader Skeleton UI (Shimmer Effect)
              <div className="space-y-6">
                {[...Array(3)].map((_, index) => (
                  <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg animate-pulse">
                    <div className="h-6 bg-gray-700 w-3/4 mb-4 rounded"></div>
                    <div className="h-4 bg-gray-700 w-1/2 mb-3 rounded"></div>
                    <div className="h-4 bg-gray-700 w-1/3 mb-3 rounded"></div>
                    <div className="h-16 bg-gray-700 w-full mb-4 rounded"></div>
                    <div className="h-10 bg-blue-600 w-1/4 rounded"></div>
                  </div>
                ))}
              </div>
            ) : jobs.length > 0 ? (
              jobs.map((job) => (
                <div key={job._id} className="bg-gray-900 p-8 rounded-lg shadow-lg border-l-8 border-blue-500">
                  <h3 className="text-2xl font-semibold text-white">{job.title}</h3>
                  <p className="text-gray-400 mt-2">💼 Experience: {job.experience}</p>
                  <p className="text-gray-400">💰 Salary: {job.salary}</p>
                  <p className="text-gray-300 mt-4 leading-relaxed">
                    {job.jobDescription.length > 100 
                      ? `${job.jobDescription.slice(0, 100)}...` 
                      : job.jobDescription}
                  </p>
                  <button
                    className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition"
                    onClick={() => navigate(`/job/${job._id}`)}
                  >
                    Apply Now
                  </button>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-400">No jobs available at the moment.</p>
            )}
          </div>

          {/* Additional Information Section */}
          <div className="text-center">
            <h2 className="text-3xl font-semibold border-l-8 border-blue-500 pl-6 inline-block">
              Why Work With Us?
            </h2>
            <p className="text-gray-300 mt-4 leading-relaxed">
              At <span className="text-blue-400 font-semibold">Busitron</span>, we believe in creating a thriving environment for growth, 
              innovation, and collaboration. Join us and be part of a team that's shaping the future of technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
