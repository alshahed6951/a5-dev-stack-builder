import React, { useState, useEffect } from "react";
import techData from "./technologies.json";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);

  useEffect(() => {
    setTechnologies(techData);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-slate-100 max-w-7xl w-full mx-auto">
        <div className="flex items-center gap-2">
          <div className="bg-pink-600 text-white font-bold p-1.5 rounded-lg text-sm">DS</div>
          <span className="font-bold text-lg text-slate-900">Dev Stack</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a href="#" className="hover:text-pink-600">Home</a>
          <a href="#" className="hover:text-pink-600">Technologies</a>
          <a href="#" className="hover:text-pink-600">Projects</a>
          <a href="#" className="hover:text-pink-600">About</a>
          <a href="#" className="hover:text-pink-600">Contact</a>
        </div>
        <div className="flex items-center gap-4 text-sm font-medium">
          <button className="text-slate-700 hover:text-slate-900">Sign In</button>
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition">Sign Up</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl w-full mx-auto px-8 py-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Build Your Ideal <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-600">
              Development Stack
            </span>
          </h1>
          <p className="text-slate-500 mb-8 max-w-md leading-relaxed text-sm">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex items-center gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-pink-500 hover:opacity-90 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition">
              Explore Technologies
            </button>
            <button className="border border-slate-200 hover:bg-slate-100 text-slate-700 px-6 py-2.5 rounded-lg font-medium text-sm transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/banner-stack.png" alt="Dev Stack Illustration" className="w-full max-w-sm object-contain" />
        </div>
      </section>
    </div>
  );
}