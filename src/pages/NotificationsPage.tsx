import NotificationCard from "../components/NotificationCard";
import notifications from '../data/notifications';

const NotificationsPage = () => {
  return (
    <main className="bg-gray-50 min-h-screen py-12 px-4 sm:px-8 lg:px-16">
      <div className="max-w-4xl mx-auto">
        <div className="mb-10 text-center">
          <h1 className="text-4xl font-bold text-green-700 mb-2">
            Latest Notifications
          </h1>
          <p className="text-gray-600 text-base">
            Stay updated with the latest recruitment, exam dates, results, and more.
          </p>
        </div>

        <div className="space-y-4">
          {notifications.map((n) => (
            <NotificationCard key={n.id} {...n} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default NotificationsPage;
