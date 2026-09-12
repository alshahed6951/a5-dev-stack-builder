import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import techData from "./technologies.json";

export default function App() {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Gradient Theme Constant for central control
  const themeGradient = "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600";
  const themeGradientText = "bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent";

  useEffect(() => {
    // Simulate data loading with loading state
    const timer = setTimeout(() => {
      setTechnologies(techData);
      setLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, []);

  // Add item to stack
  const handleAddToStack = (tech) => {
    const isAlreadyAdded = selectedStack.some((item) => item.id === tech.id);

    if (isAlreadyAdded) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: "top-right",
        autoClose: 2000,
      });
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`Added ${tech.name} to your stack!`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Remove single item from stack
  const handleRemoveFromStack = (tech) => {
    setSelectedStack(selectedStack.filter((item) => item.id !== tech.id));
    toast.info(`Removed ${tech.name} from your stack.`, {
      position: "top-right",
      autoClose: 2000,
    });
  };

  // Clear all items from stack
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("Cleared all items from your stack!", {
      position: "top-right",
      autoClose: 2000,
    });
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col font-sans">
      <ToastContainer />

      {/* Sticky Navbar */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Mobile View Left: Hamburger Icon */}
          <div className="flex md:hidden items-center">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-slate-900 focus:outline-none"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Brand Logo & Name */}
          <div className="flex items-center gap-2">
            <div className={`${themeGradient} text-white font-bold p-1.5 rounded-lg text-sm`}>DS</div>
            <span className={`font-bold text-lg ${themeGradientText}`}>Dev Stack</span>
          </div>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-pink-600 transition">Home</a>
            <a href="#" className="hover:text-pink-600 transition">Technologies</a>
            <a href="#" className="hover:text-pink-600 transition">Projects</a>
            <a href="#" className="hover:text-pink-600 transition">About</a>
            <a href="#" className="hover:text-pink-600 transition">Contact</a>
          </div>

          {/* Right Action Buttons */}
          <div className="flex items-center gap-3 text-sm font-medium">
            <button className="text-slate-700 hover:text-slate-900 px-2 py-1">Sign In</button>
            <button className={`${themeGradient} hover:opacity-90 text-white px-4 py-2 rounded-full font-semibold transition shadow-sm`}>
              Sign Up
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3 text-sm font-medium text-slate-600">
            <a href="#" className="hover:text-pink-600">Home</a>
            <a href="#" className="hover:text-pink-600">Technologies</a>
            <a href="#" className="hover:text-pink-600">Projects</a>
            <a href="#" className="hover:text-pink-600">About</a>
            <a href="#" className="hover:text-pink-600">Contact</a>
          </div>
        )}
      </nav>

      {/* Hero / Banner Section */}
      <section className="max-w-7xl w-full mx-auto px-6 py-12 md:py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight mb-4">
            Build Your Ideal <br />
            <span className={themeGradientText}>Development Stack</span>
          </h1>
          <p className="text-slate-500 mb-8 max-w-md leading-relaxed text-sm sm:text-base">
            Explore frontend, backend, database, and tooling options, compare them side by side, and put together the stack that fits your next project.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <button className={`${themeGradient} hover:opacity-90 text-white px-6 py-2.5 rounded-lg font-medium text-sm transition shadow-md`}>
              Explore Technologies
            </button>
            <button className="border border-slate-300 hover:bg-slate-100 text-slate-700 px-6 py-2.5 rounded-lg font-medium text-sm transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <img
            src="/banner-stack.png"
            alt="Dev Stack Illustration"
            className="w-full max-w-sm object-contain"
          />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-7xl w-full mx-auto px-6 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900">
            Explore the <span className={themeGradientText}>Technologies</span>
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Loading State Check */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="w-10 h-10 border-4 border-pink-500 border-t-transparent rounded-full animate-spin mb-4"></div>
            <p className="text-slate-500 font-medium text-sm">Loading technologies...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Left Grid: Cards List (3 Columns on Desktop, 2 on Tablet, 1 on Mobile) */}
            <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
              {technologies.map((tech) => {
                const isAdded = selectedStack.some((item) => item.id === tech.id);

                return (
                  <div
                    key={tech.id}
                    className="bg-white rounded-xl border border-slate-100 p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition relative"
                  >
                    <div>
                      {/* Top Bar: Icon & Badge */}
                      <div className="flex justify-between items-start mb-3">
                        <img src={tech.icon} alt={tech.name} className="w-8 h-8 object-contain" />
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 border border-blue-100">
                          {tech.badge}
                        </span>
                      </div>

                      <h3 className="font-bold text-slate-900 text-base mb-1">{tech.name}</h3>
                      <p className="text-xs text-slate-500 line-clamp-3 mb-4 leading-relaxed">
                        {tech.description}
                      </p>
                    </div>

                    <div>
                      <div className="flex items-center justify-between text-[11px] text-slate-400 mb-3 border-t pt-3">
                        <span className="px-2 py-0.5 rounded bg-slate-100 font-medium text-slate-600">{tech.category}</span>
                        <span>{tech.difficulty}</span>
                        <span className="text-amber-500 font-bold">★ {tech.rating}</span>
                      </div>

                      <button
                        onClick={() => handleAddToStack(tech)}
                        disabled={isAdded}
                        className={`w-full py-2 rounded-lg font-medium text-xs transition ${
                          isAdded
                            ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                            : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                        }`}
                      >
                        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Sidebar: Your Stack */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-slate-100 p-5 shadow-sm sticky top-24">
                <h3 className="font-bold text-slate-900 text-base">Your Stack</h3>
                <p className="text-xs text-slate-400 mb-4">
                  {selectedStack.length} Technology Selected
                </p>

                {/* Conditional Rendering for Empty Stack */}
                {selectedStack.length === 0 ? (
                  <div className="text-center py-8 text-xs text-slate-400 border border-dashed border-slate-200 rounded-lg">
                    No technologies selected yet.
                  </div>
                ) : (
                  <div className="space-y-2 mb-6 max-h-[360px] overflow-y-auto">
                    {selectedStack.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between p-2.5 rounded-lg border border-slate-100 bg-slate-50 text-xs"
                      >
                        <div className="flex items-center gap-2 overflow-hidden">
                          <img src={item.icon} alt={item.name} className="w-5 h-5 object-contain flex-shrink-0" />
                          <div className="truncate">
                            <p className="font-medium text-slate-800 truncate">{item.name}</p>
                            <p className="text-[10px] text-slate-400">{item.category}</p>
                          </div>
                        </div>
                        <button
                          onClick={() => handleRemoveFromStack(item)}
                          className="text-slate-400 hover:text-red-500 font-bold text-base px-1.5 transition"
                          title="Remove item"
                        >
                          ✕
                        </button>
                      </div>
                    ))}
                  </div>
                )}

                {selectedStack.length > 0 && (
                  <button
                    onClick={handleRemoveAll}
                    className="w-full py-2 border border-red-200 text-red-500 hover:bg-red-50 rounded-lg text-xs font-medium transition"
                  >
                    Remove All
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="mt-auto border-t border-slate-200 bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 text-xs">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className={`${themeGradient} text-white font-bold p-1 rounded text-xs`}>DS</div>
              <span className={`font-bold text-sm ${themeGradientText}`}>Dev Stack</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-4">
              Curated tools, technologies, and resources for developers building modern software.
            </p>
            <div className="flex gap-3 text-slate-400 font-medium">
              <a href="#" className="hover:text-slate-600">GitHub</a>
              <a href="#" className="hover:text-slate-600">Twitter</a>
              <a href="#" className="hover:text-slate-600">LinkedIn</a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider">Product</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-slate-800">Home</a></li>
              <li><a href="#" className="hover:text-slate-800">Technologies</a></li>
              <li><a href="#" className="hover:text-slate-800">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider">Company</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-slate-800">About</a></li>
              <li><a href="#" className="hover:text-slate-800">Contact</a></li>
              <li><a href="#" className="hover:text-slate-800">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-3 uppercase tracking-wider">Legal</h4>
            <ul className="space-y-2 text-slate-500">
              <li><a href="#" className="hover:text-slate-800">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-slate-800">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto border-t border-slate-100 pt-6 flex flex-col sm:flex-row justify-between items-center text-[11px] text-slate-400 gap-2">
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-600">Privacy</a>
            <a href="#" className="hover:text-slate-600">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}