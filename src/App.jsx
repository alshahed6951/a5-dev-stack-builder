import React from "react";

export default function App() {
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
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-lg font-semibold transition">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}