import React, { useState, useEffect, lazy, Suspense, useMemo, useCallback } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import "./App.css";
import "@fontsource/poppins/latin-300.css"; // Optimize font loading

// ✅ Lazy Load Pages (Prefetch Important Pages)
const Home = lazy(() => import(/* webpackPrefetch: true */ "./pages/Home"));
const About = lazy(() => import(/* webpackPrefetch: true */ "./pages/About"));
const WhatWeDo = lazy(() => import("./pages/Whatwedo"));
const ContactUs = lazy(() => import("./pages/Contact"));
const Career = lazy(() => import("./pages/Carrer"));
const JobDetails = lazy(() => import("./pages/jobDetails"));
const Login = lazy(() => import("./pages/Login"));
const CreateJob = lazy(() => import("./pages/Createjobs"));
const JobList = lazy(() => import("./pages/jobLoist"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const RefundPolicy = lazy(() => import("./pages/Refund-policy"));
const TermsOfService = lazy(() => import("./pages/Terms-of-service"));

// ✅ Memoized Navbar & Footer
const MemoizedNavbar = React.memo(Navbar);
const MemoizedFooter = React.memo(Footer);

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  // ✅ Memoize authentication status
  useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem("Token"));
  }, []);

  // ✅ Memoize Protected Routes
  const protectedRoutes = useMemo(
    () => (
      <>
        <Route path="/admin/CreateJob" element={isLoggedIn ? <CreateJob /> : <Navigate to="/admin" />} />
        <Route path="/admin/ListJobs" element={isLoggedIn ? <JobList /> : <Navigate to="/admin" />} />
      </>
    ),
    [isLoggedIn]
  );

  // ✅ Memoize Route Components
  const renderRoutes = useMemo(
    () => (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-do" element={<WhatWeDo />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/careers" element={<Career />} />
        <Route path="/job/:jobId" element={<JobDetails />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/admin" element={isLoggedIn ? <Navigate to="/admin/CreateJob" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        {protectedRoutes}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    ),
    [isLoggedIn, protectedRoutes]
  );

  if (isLoggedIn === null) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <MemoizedNavbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="flex-grow">
          <Suspense fallback={<div className="flex items-center justify-center h-screen">Loading...</div>}>
            {renderRoutes}
          </Suspense>
        </div>
        <MemoizedFooter />
      </div>
    </Router>
  );
};

export default App;
