import React from "react";
import { Link } from "react-router-dom";
import { FaClock, FaClipboardList, FaPlay } from "react-icons/fa";

const mockTests = [
  {
    id: 1,
    title: "NDA General Ability Test",
    duration: "2 hours",
    questions: 120,
    level: "Intermediate",
  },
  {
    id: 2,
    title: "CDS English Practice Test",
    duration: "90 mins",
    questions: 100,
    level: "Beginner",
  },
  {
    id: 3,
    title: "AFCAT Technical Test",
    duration: "1.5 hours",
    questions: 85,
    level: "Advanced",
  },
];

const MockTests: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-green-700 mb-3">Mock Tests</h1>
        <p className="text-gray-600 text-lg">
          Practice with full-length, real-exam style mock tests to boost your preparation and confidence.
        </p>
      </div>

      {/* Mock Test Cards */}
      <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {mockTests.map((test) => (
          <div key={test.id} className="bg-white shadow rounded-lg p-6 hover:shadow-md transition">
            <div className="flex items-center gap-4 mb-4">
              <FaClipboardList className="text-green-600 text-2xl" />
              <h3 className="text-xl font-semibold text-gray-800">{test.title}</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-1 mb-4">
              <p>
                <FaClock className="inline mr-2 text-green-500" />
                Duration: {test.duration}
              </p>
              <p>
                <FaClipboardList className="inline mr-2 text-green-500" />
                Questions: {test.questions}
              </p>
              <p>
                <span className="font-medium text-green-700">Level:</span> {test.level}
              </p>
            </div>
            <Link
              to={`/mock-tests/${test.id}`}
              className="inline-flex items-center px-4 py-2 mt-2 text-sm bg-green-600 text-white rounded-full hover:bg-green-700 transition"
            >
              <FaPlay className="mr-2" /> Start Test
            </Link>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Want More Practice?</h2>
        <p className="text-gray-600 mb-4">
          Stay consistent and take 1 mock test every day. It’s the key to cracking the exam!
        </p>
        <Link
          to="/resources"
          className="px-6 py-3 bg-green-600 text-white rounded-full font-medium hover:bg-green-700 transition"
        >
          Browse Study Resources
        </Link>
      </div>
    </div>
  );
};

export default MockTests;
