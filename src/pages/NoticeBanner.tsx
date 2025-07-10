import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const NoticeBanner = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const hasSeenNotice = localStorage.getItem("dap_notice_dismissed");
    if (!hasSeenNotice) {
      setShowNotice(true);
    }
  }, []);

  const handleClose = () => {
    setShowNotice(false);
    localStorage.setItem("dap_notice_dismissed", "true");
  };

  if (!showNotice) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-green-600 text-white px-6 py-4 flex justify-between items-start shadow-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
        <strong className="text-lg font-semibold">📢 Welcome to Defence Aspirant Portal!</strong>
        <p className="text-sm text-white">
          Stay updated with latest notifications, mock tests, and resources. Start your preparation now!
        </p>
      </div>
      <button
        onClick={handleClose}
        className="ml-4 text-white hover:text-gray-300 transition text-xl"
        aria-label="Close Notice"
      >
        <FaTimes />
      </button>
    </div>
  );
};

export default NoticeBanner;
