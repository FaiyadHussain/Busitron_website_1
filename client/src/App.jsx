import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeDo from "./pages/Whatwedo";
import ContactUs from "./pages/Contact";
import Carrer from "./pages/Carrer";
import JobDetails from "./pages/jobDetails";
import Login from "./pages/Login";
import "./App.css";
import "@fontsource/poppins"; // Automatically loads Poppins
// import AdminDashboard from "./pages/AdminDashboard";
import CreateJob from "./pages/Createjobs";
import JobList from "./pages/jobLoist";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/Refund-policy";
import TermsOfService from "./pages/Terms-of-service"

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null); // Start with null to indicate loading

  useEffect(() => {
    const token = localStorage.getItem("Token");
    setIsLoggedIn(!!token); // Convert token existence to boolean
  }, []);

  if (isLoggedIn === null) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>; // Avoid flashbang
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/careers" element={<Carrer />} />
            <Route path="/job/:jobId" element={<JobDetails />} />
            <Route
              path="/admin"
              element={isLoggedIn ? <Navigate to="/admin/CreateJob" /> : <Login setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/admin/CreateJob"
              element={isLoggedIn ? <CreateJob /> : <Navigate to="/admin" />}
            />
            <Route
              path="/admin/ListJobs"
              element={isLoggedIn ? <JobList /> : <Navigate to="/admin" />}
            />
             <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/refund-policy" element={<RefundPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};


export default App;
