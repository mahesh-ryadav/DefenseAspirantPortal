import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import notifications from "../data/notifications";

import {
  FaBullhorn,
  FaCalendarAlt,
  FaClipboardCheck,
  FaCheckCircle,
  FaArrowLeft,
} from "react-icons/fa";

const iconMap = {
  recruitment: <FaBullhorn className="text-blue-600 w-6 h-6" />,
  examDate: <FaCalendarAlt className="text-yellow-600 w-6 h-6" />,
  answerKey: <FaClipboardCheck className="text-purple-600 w-6 h-6" />,
  result: <FaCheckCircle className="text-green-600 w-6 h-6" />,
};

const NotificationDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const notification = notifications.find((n) => n.id === Number(id));

  if (!notification) {
    return (
      <main className="min-h-screen flex items-center justify-center text-gray-500 text-lg">
        Notification not found.
      </main>
    );
  }

  const icon = iconMap[notification.type] || (
    <FaBullhorn className="text-gray-500 w-6 h-6" />
  );

  return (
    <main className="bg-gray-50 min-h-screen py-10 px-4 sm:px-6 lg:px-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6 sm:p-8">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-green-600 hover:underline mb-6"
        >
          <FaArrowLeft className="mr-2" />
          Back
        </button>

        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-gray-100 rounded-full">{icon}</div>
          <div className="flex-1">
            <h1 className="text-2xl font-bold text-gray-800">{notification.title}</h1>
            <p className="text-sm text-gray-500 mt-1">{notification.time}</p>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-700 leading-relaxed mb-6 whitespace-pre-line">
          {notification.message}
        </p>

        {/* Eligibility */}
        {notification.eligibility && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Eligibility</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li><strong>Age Limit:</strong> {notification.eligibility.ageLimit}</li>
              <li><strong>Qualification:</strong> {notification.eligibility.qualification}</li>
              <li><strong>Gender:</strong> {notification.eligibility.gender}</li>
              <li><strong>Nationality:</strong> {notification.eligibility.nationality}</li>
            </ul>
          </section>
        )}

        {/* Vacancy Breakup */}
        {(notification.vacancyBreakup ?? []).length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Vacancy Breakup</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {(notification.vacancyBreakup ?? []).map((v, i) => (
                <li key={i}>
                  <strong>{v.branch}:</strong> {v.seats} seats
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* Selection Process */}
        {(notification.selectionProcess ?? []).length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">Selection Process</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              {(notification.selectionProcess ?? []).map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Apply Link */}
        {notification.applyLink && (
          <div className="mt-6">
            <a
              href={notification.applyLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white text-sm px-5 py-2 rounded-full transition"
            >
              Visit Official Website
            </a>
          </div>
        )}
      </div>
    </main>
  );
};

export default NotificationDetailsPage;
