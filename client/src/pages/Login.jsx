import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import * as THREE from "three";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ isLoggedIn, setIsLoggedIn }) => {
  const textRef = useRef(null);
  const formRef = useRef(null);
  const threeContainerRef = useRef(null);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // State to store error message

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );

    gsap.fromTo(
      formRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.5, ease: "power3.out" }
    );
  }, []);

  useEffect(() => {
    let scene, camera, renderer, particles;

    const initThreeJS = () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setClearColor(0x000000, 0);
      threeContainerRef.current.appendChild(renderer.domElement);

      const particleCount = 1000;
      const positions = new Float32Array(particleCount * 3);
      const colors = new Float32Array(particleCount * 3);

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

        colors[i * 3] = Math.random();
        colors[i * 3 + 1] = Math.random();
        colors[i * 3 + 2] = Math.random();
      }

      const particleGeometry = new THREE.BufferGeometry();
      particleGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      particleGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

      const particleMaterial = new THREE.PointsMaterial({
        size: 0.1,
        vertexColors: true,
        transparent: true,
        opacity: 0.8,
      });

      particles = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particles);

      camera.position.z = 15;

      const animate = () => {
        requestAnimationFrame(animate);
        const positions = particles.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          positions[i + 1] += Math.sin(Date.now() * 0.001 + i) * 0.01;
        }
        particles.geometry.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      };
      animate();
    };

    if (threeContainerRef.current) {
      initThreeJS();
    }

    return () => {
      if (threeContainerRef.current && renderer) {
        threeContainerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      const response = await axios.post("http://localhost:5000/admin/login", {
        email,
        password,
      });

      localStorage.setItem("Token", response?.data?.token);
      setIsLoggedIn(true);
      navigate("/admin/dashboard");
    } catch (error) {
      setError(error.response?.data?.message || "Invalid email or password");
    }
  };

  return (
    <div className="overflow-x-hidden">
      <div className="relative max-w-svw min-h-screen flex items-center justify-center bg-black overflow-hidden">
        <div ref={threeContainerRef} className="absolute inset-0 z-0"></div>

        <div className="relative text-center text-white px-6 z-10 w-full max-w-md">
          <h1 ref={textRef} className="text-4xl sm:text-5xl font-bold mb-6">
            Welcome Back to{" "}
            <span className="bg-gradient-to-r from-[#df3482] to-[#4B0082] text-transparent bg-clip-text">
              BUSITRON
            </span>
          </h1>

          <form ref={formRef} onSubmit={handleSubmit} className="bg-gray-900 bg-opacity-70 p-8 rounded-lg shadow-lg">
            
            {/* Error message (only visible if there's an error) */}
            {error && <p className="text-red-500 text-left mb-3">{error}</p>}

            <div className="mb-4">
              <label className="block text-left text-sm font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mt-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-left text-sm font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mt-1 p-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full mt-4 p-3 bg-gradient-to-r from-[#df3482] to-[#4B0082] text-white rounded-lg hover:opacity-90 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
