import React, { useState, useEffect } from "react";
import techData from "./technologies.json";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);

  useEffect(() => {
    setTechnologies(techData);
  }, []);

  // Stack-এ প্রযুক্তি যোগ করার লজিক
  const handleAddToStack = (tech) => {
    if (!selectedStack.some((item) => item.id === tech.id)) {
      setSelectedStack([...selectedStack, tech]);
    }
  };

  // Stack থেকে সিঙ্গেল আইটেম ডিলিট করার লজিক
  const handleRemoveFromStack = (id) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== id));
  };

  // সব আইটেম একসাথে ক্লিয়ার করার লজিক
  const handleClearAll = () => {
    setSelectedStack([]);
  };

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

      {/* Main Content Section */}
      <section className="max-w-7xl w-full mx-auto px-8 py-8 flex-grow">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Explore the <span className="text-purple-600">Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Card Grid */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {technologies.map((tech) => {
              const isAdded = selectedStack.some((item) => item.id === tech.id);
              return (
                <div key={tech.id} className="bg-white rounded-xl border border-slate-100 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition relative">
                  <div>
                    <div className="flex justify-between items-start mb-3">
                      <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                      <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-500 border border-blue-100">
                        {tech.badge}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-1">{tech.name}</h3>
                    <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">{tech.description}</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3 border-t pt-3">
                      <span>{tech.category}</span>
                      <span>{tech.experienceLevel}</span>
                      <span className="text-amber-500 font-bold">★ {tech.rating}</span>
                    </div>
                    <button
                      onClick={() => handleAddToStack(tech)}
                      disabled={isAdded}
                      className={`w-full py-2 rounded-lg font-medium text-xs transition ${
                        isAdded
                          ? "bg-slate-200 text-slate-400 cursor-not-allowed"
                          : "bg-slate-900 text-white hover:bg-slate-800"
                      }`}
                    >
                      {isAdded ? "Added" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Sidebar: Your Stack */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm sticky top-6">
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-slate-900 text-base">Your Stack</h3>
                {selectedStack.length > 0 && (
                  <button
                    onClick={handleClearAll}
                    className="text-xs text-red-500 hover:underline font-medium"
                  >
                    Clear All
                  </button>
                )}
              </div>
              <p className="text-xs text-slate-400 mb-4">
                {selectedStack.length} Technology Selected
              </p>

              {selectedStack.length === 0 ? (
                <div className="text-center py-8 text-xs text-slate-400 border border-dashed border-slate-200 rounded-lg">
                  No technologies selected yet.
                </div>
              ) : (
                <div className="space-y-2 mb-6">
                  {selectedStack.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-2 rounded-lg border border-slate-100 bg-slate-50 text-xs">
                      <div className="flex items-center gap-2">
                        <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain" />
                        <span className="font-medium text-slate-700">{item.name}</span>
                      </div>
                      <button
                        onClick={() => handleRemoveFromStack(item.id)}
                        className="text-slate-400 hover:text-red-500 font-bold text-sm px-1"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-10 px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <div className="bg-pink-600 text-white font-bold p-1 rounded text-xs">DS</div>
            <span className="font-bold text-slate-900 text-sm">Dev Stack</span>
          </div>
          <p>© Dev Stack Builder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}