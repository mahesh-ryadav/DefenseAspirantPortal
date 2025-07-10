import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import notifications from '../data/notifications';

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
    return <div className="text-center mt-20 text-gray-500">Notification not found</div>;
  }

  const icon = iconMap[notification.type] || (
    <FaBullhorn className="text-gray-500 w-6 h-6" />
  );

  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-8">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center text-sm text-green-600 hover:underline mb-6"
        >
          <FaArrowLeft className="mr-2" /> Back
        </button>

        <div className="flex items-center gap-4 mb-4">
          <div className="p-3 bg-gray-100 rounded-lg">{icon}</div>
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {notification.title}
            </h1>
            <p className="text-sm text-gray-500">{notification.time}</p>
          </div>
        </div>

        <p className="text-gray-700 leading-relaxed whitespace-pre-line mt-4 mb-6">
          {notification.message}
        </p>

        {notification.eligibility && notification.eligibility.qualification && (
          <div className="mb-4">
            <h2 className="font-semibold text-gray-700 mb-1">Eligibility:</h2>
            <ul className="list-disc list-inside text-sm text-gray-600">
              <li>Age Limit: {notification.eligibility.ageLimit}</li>
              <li>Qualification: {notification.eligibility.qualification}</li>
              <li>Gender: {notification.eligibility.gender}</li>
              <li>Nationality: {notification.eligibility.nationality}</li>
            </ul>
          </div>
        )}

        {notification.vacancyBreakup?.length > 0 && (
          <div className="mb-4">
            <h2 className="font-semibold text-gray-700 mb-1">Vacancy Breakup:</h2>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {notification.vacancyBreakup.map((v, i) => (
                <li key={i}>
                  {v.branch}: {v.seats} seats
                </li>
              ))}
            </ul>
          </div>
        )}

        {notification.selectionProcess?.length > 0 && (
          <div className="mb-6">
            <h2 className="font-semibold text-gray-700 mb-1">Selection Process:</h2>
            <ul className="list-disc list-inside text-sm text-gray-600">
              {notification.selectionProcess.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>
          </div>
        )}

        {notification.applyLink && (
          <a
            href={notification.applyLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-600 text-white px-4 py-2 rounded-full text-sm hover:bg-green-700 transition"
          >
            Visit Official Website
          </a>
        )}
      </div>
    </main>
  );
};

export default NotificationDetailsPage;
