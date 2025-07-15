import { useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";

const NoticeBanner = () => {
  const [showNotice, setShowNotice] = useState(false);

  useEffect(() => {
    const hasSeenNotice = localStorage.getItem("dap_notice_dismissed");
    if (!hasSeenNotice) {
      setShowNotice(true);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleClose = () => {
    setShowNotice(false);
    localStorage.setItem("dap_notice_dismissed", "true");
    document.body.style.overflow = "auto";
  };

  if (!showNotice) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white max-w-lg w-[90%] rounded-lg shadow-xl p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-red-600 text-xl"
          aria-label="Close Notice"
        >
          <FaTimes />
        </button>

        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-yellow-600">
            🚧 Website Under Development
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed">
            This portal is currently in progress. Features like login,
            notifications, and mock tests are under construction.
            <br />
            <strong className="text-red-500">Backend integration is not yet connected.</strong>
            <br />
            Some pages may not work as expected.
          </p>
          <p className="text-xs text-gray-500 italic">
            Thank you for your patience and support!
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticeBanner;
