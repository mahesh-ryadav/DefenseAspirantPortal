import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaBullhorn,
  FaCalendarAlt,
  FaClipboardCheck,
  FaCheckCircle,
  FaFileAlt,
  FaBell,
  FaExternalLinkAlt,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";

const iconMap = {
  recruitment: <FaBullhorn className="text-blue-600 w-5 h-5" />,
  examDate: <FaCalendarAlt className="text-yellow-600 w-5 h-5" />,
  answerKey: <FaClipboardCheck className="text-purple-600 w-5 h-5" />,
  result: <FaCheckCircle className="text-green-600 w-5 h-5" />,
  mockTest: <FaFileAlt className="text-red-500 w-5 h-5" />,
  application: <FaCheckCircle className="text-teal-500 w-5 h-5" />,
  announcement: <FaBell className="text-orange-500 w-5 h-5" />,
};

const NotificationCard = ({ id, type, title, message, time }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const icon = iconMap[type] || <FaBullhorn className="text-gray-500 w-5 h-5" />;

  return (
    <div className="bg-white border rounded-lg shadow-sm hover:shadow-md transition p-4 flex items-start gap-4">
      {/* Icon */}
      <div className="p-3 bg-gray-100 rounded-full shrink-0">{icon}</div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="text-sm font-semibold text-gray-800 truncate">{title}</h3>
          <span className="text-xs text-gray-400 whitespace-nowrap">{time}</span>
        </div>

        {/* Single-line truncated message */}
        <p className="text-sm text-gray-600 truncate">{message}</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-2 mt-1 shrink-0">
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="text-gray-400 hover:text-green-600"
          title="Bookmark"
        >
          {isBookmarked ? <FaBookmark className="w-4 h-4" /> : <FaRegBookmark className="w-4 h-4" />}
        </button>
        <Link
          to={`/notification/${id}`}
          className="text-blue-500 hover:text-blue-700"
          title="View details"
        >
          <FaExternalLinkAlt className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default NotificationCard;
