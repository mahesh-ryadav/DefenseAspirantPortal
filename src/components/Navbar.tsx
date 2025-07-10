import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBell, FaSearch } from "react-icons/fa";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6 py-3">
        {/* Logo + Name */}
        <div className="flex items-center gap-2">
          <svg
            className="size-6 text-green-700"
            viewBox="0 0 48 48"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M24 0C10.7 0 0 10.7 0 24s10.7 24 24 24 24-10.7 24-24S37.3 0 24 0zm0 44C12.9 44 4 35.1 4 24S12.9 4 24 4s20 8.9 20 20-8.9 20-20 20zm-4-24h8v4h-8v-4zm0 8h8v4h-8v-4z" />
          </svg>
          <h2 className="text-lg font-bold text-green-800">
            <Link to="/">Defence Aspirant</Link>
          </h2>
        </div>

        {/* Search (hidden on small screens) */}
        <div className="hidden md:flex items-center w-full max-w-md mx-4 relative">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search notifications, exams..."
            className="w-full rounded-full border border-green-300 bg-green-50 py-2 pl-5 pr-10 text-sm text-green-900 placeholder-green-600 shadow-sm focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
          />
          <FaSearch className="absolute right-3 text-green-600" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          <nav className="flex gap-6">
            <Link to="/notifications" className="flex items-center gap-1 text-sm font-medium text-green-900 hover:text-green-600 transition">
              <FaBell className="text-green-700" />
              Notifications
            </Link>
            <Link to="/mock-tests" className="text-sm font-medium text-green-900 hover:text-green-600 transition">Mock Tests</Link>
            <Link to="/resources" className="text-sm font-medium text-green-900 hover:text-green-600 transition">Resources</Link>
          </nav>

          {user ? (
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="size-10 rounded-full bg-cover bg-center border-2 border-green-200"
                  style={{ backgroundImage: `url("https://i.pravatar.cc/100")` }}
                />
                <span className="absolute -top-1 -right-1 size-3 bg-green-500 rounded-full border-2 border-white"></span>
              </div>
            </div>
          ) : (
            <div className="flex gap-3">
              <Link
                to="/login"
                className="px-4 py-2 text-sm rounded-full bg-green-600 text-white hover:bg-green-700 transition"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="px-4 py-2 text-sm rounded-full border border-green-600 text-green-600 hover:bg-green-50 transition"
              >
                Register
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-green-800 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 border-t border-gray-200">
          {/* Mobile Search */}
          <div className="my-4 relative">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search..."
              className="w-full rounded-full border border-green-300 bg-green-50 py-2 pl-5 pr-10 text-sm text-green-900 placeholder-green-600 shadow-sm focus:border-green-500 focus:bg-white focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <FaSearch className="absolute right-3 top-3 text-green-600" />
          </div>

          <nav className="flex flex-col gap-3">
            <Link 
              to="/notifications" 
              className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-green-900 hover:bg-green-50 rounded-lg transition"
              onClick={toggleMenu}
            >
              <FaBell className="text-green-700" />
              Notifications
            </Link>
            <Link 
              to="/mock-tests" 
              className="px-3 py-2 text-sm font-medium text-green-900 hover:bg-green-50 rounded-lg transition"
              onClick={toggleMenu}
            >
              Mock Tests
            </Link>
            <Link 
              to="/resources" 
              className="px-3 py-2 text-sm font-medium text-green-900 hover:bg-green-50 rounded-lg transition"
              onClick={toggleMenu}
            >
              Resources
            </Link>
          </nav>

          <div className="mt-4 pt-4 border-t border-gray-200">
            {user ? (
              <div className="flex items-center gap-3 px-3 py-2">
                <div
                  className="size-10 rounded-full bg-cover bg-center border-2 border-green-200"
                  style={{ backgroundImage: `url("https://i.pravatar.cc/100")` }}
                />
                <div>
                  <p className="text-sm font-medium text-green-900">John Doe</p>
                  <p className="text-xs text-green-600">View Profile</p>
                </div>
              </div>
            ) : (
              <div className="flex gap-3">
                <Link
                  to="/login"
                  className="flex-1 text-center px-4 py-2 text-sm rounded-full bg-green-600 text-white hover:bg-green-700 transition"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="flex-1 text-center px-4 py-2 text-sm rounded-full border border-green-600 text-green-600 hover:bg-green-50 transition"
                  onClick={toggleMenu}
                >
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;