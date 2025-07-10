import { Link } from "react-router-dom";
import { useState, type JSX } from "react";
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

// Icon mapping for notification types
const iconMap: Record<NotificationCardProps["type"], JSX.Element>
 = {
  recruitment: <FaBullhorn className="text-blue-600 w-5 h-5" />,
  examDate: <FaCalendarAlt className="text-yellow-600 w-5 h-5" />,
  answerKey: <FaClipboardCheck className="text-purple-600 w-5 h-5" />,
  result: <FaCheckCircle className="text-green-600 w-5 h-5" />,
  mockTest: <FaFileAlt className="text-red-500 w-5 h-5" />,
  application: <FaCheckCircle className="text-teal-500 w-5 h-5" />,
  announcement: <FaBell className="text-orange-500 w-5 h-5" />,
};

interface NotificationCardProps {
  id: number;
  type: string;
  title: string;
  message: string;
  time: string;
}

const NotificationCard: React.FC<NotificationCardProps> = ({
  id,
  type,
  title,
  message,
  time,
}) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  const icon = iconMap[type] || <FaBullhorn className="text-gray-500 w-5 h-5" />;

  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition p-4 flex items-start gap-4">
      {/* Icon Section */}
      <div className="p-3 bg-gray-100 rounded-full shrink-0">{icon}</div>

      {/* Text Content */}
      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2 mb-1">
          <h3 className="text-sm font-semibold text-gray-800 truncate">{title}</h3>
          <span className="text-xs text-gray-400 whitespace-nowrap">{time}</span>
        </div>
        <p className="text-sm text-gray-600 truncate">{message}</p>
      </div>

      {/* Action Icons */}
      <div className="flex flex-col items-center gap-2 mt-1 shrink-0">
        <button
          onClick={() => setIsBookmarked(!isBookmarked)}
          className="text-gray-400 hover:text-green-600"
          aria-label={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
          title={isBookmarked ? "Remove Bookmark" : "Add Bookmark"}
        >
          {isBookmarked ? <FaBookmark className="w-4 h-4" /> : <FaRegBookmark className="w-4 h-4" />}
        </button>
        <Link
          to={`/notification/${id}`}
          className="text-blue-500 hover:text-blue-700"
          title="View details"
          aria-label="View details"
        >
          <FaExternalLinkAlt className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};

export default NotificationCard;
