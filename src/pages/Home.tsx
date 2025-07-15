import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaClipboardList, FaBookOpen, FaArrowRight } from "react-icons/fa";

const Home: React.FC = () => {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 via-white to-white py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 leading-tight mb-4">
              Your Gateway to Defence Success...
            </h1>
            <p className="text-gray-600 mb-6 text-lg">
              Get instant access to notifications, mock tests, and resources. Tailored for serious defence aspirants.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Link
                to="/notifications"
                className="bg-green-600 text-white px-6 py-3 rounded-full font-medium hover:bg-green-700 transition"
              >
                Explore Notifications
              </Link>
              <Link
                to="/mock-tests"
                className="border border-green-600 text-green-700 px-6 py-3 rounded-full font-medium hover:bg-green-100 transition"
              >
                Take a Mock Test
              </Link>
            </div>
          </div>
          <div className="mt-10 md:mt-0 md:w-1/2 flex justify-center items-center">
  <div className="relative w-full max-w-md rounded-xl overflow-hidden shadow-2xl border border-gray-200">
    <img
      src="/images/defence-illusion.jpg"
      alt="Defence Illustration"
      className="w-full h-auto object-cover transition-transform duration-500 hover:scale-105"
    />
    
  </div>
</div>


        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-green-700 mb-12">Everything You Need to Crack Defence Exams</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition">
              <FaBell className="text-green-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Live Notifications</h3>
              <p className="text-gray-600">Get real-time updates on recruitment, exam dates, results, and more.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition">
              <FaClipboardList className="text-green-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Mock Test Engine</h3>
              <p className="text-gray-600">Practice with exam-like mock tests to boost your performance.</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow hover:shadow-md transition">
              <FaBookOpen className="text-green-500 text-3xl mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">Resource Library</h3>
              <p className="text-gray-600">Access study material, previous year papers, and guides in one place.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-green-600 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Defence Journey?</h2>
          <p className="mb-6 text-lg">Join thousands of aspirants using our portal every day.</p>
          <Link
            to="/register"
            className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition"
          >
            Create Free Account <FaArrowRight className="inline ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
