import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBell,
  FaUsers,
  FaBook,
  FaEdit,
  FaCalendarAlt,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

const AdminSidebar: React.FC = () => {
  const navItemClass =
    "flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-200 text-gray-700 transition";

  const activeClass = "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-4">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        Admin Panel
      </h2>

      <nav className="flex flex-col gap-2">
        <NavLink
          to="/admin-panel/dashboard"
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaTachometerAlt /> Dashboard
        </NavLink>

        <NavLink
          to="/admin-panel/notifications"
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaBell /> Notifications
        </NavLink>

        <NavLink
          to="/admin-panel/users"
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaUsers /> Users
        </NavLink>

        <NavLink
          to="/admin-panel/study-material"
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaBook /> Study Material
        </NavLink>

        <NavLink
          to="/admin-panel/mock-tests"
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaEdit /> Mock Tests
        </NavLink>

        <NavLink
          to="/admin-panel/exams"
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaCalendarAlt /> Exam Info
        </NavLink>

        <NavLink
          to="/admin-panel/settings"
          className={({ isActive }) =>
            `${navItemClass} ${isActive ? activeClass : ""}`
          }
        >
          <FaCogs /> Settings
        </NavLink>

        <NavLink
          to="/logout"
          className={`${navItemClass} text-red-600 hover:text-white hover:bg-red-600`}
        >
          <FaSignOutAlt /> Logout
        </NavLink>
      </nav>
    </aside>
  );
};

export default AdminSidebar;
