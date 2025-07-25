import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Page imports
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NotificationsPage from './pages/NotificationsPage';
import MockTests from './pages/MockTests';
import NotificationDetailsPage from './pages/NotificationDetailsPage';
import ResourcesPage from './pages/ResourcesPage';
import NoticeBanner from './pages/NoticeBanner';
import AdminPanel from './pages/Admin/AdminPanel';



function App() {
  return (
    <Router>
      <NoticeBanner />
      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/notification/:id" element={<NotificationDetailsPage />} />
            <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/resources" element={<ResourcesPage />} />

            {/* Admin layout with nested routes */}
            <Route path="/admin-panel" element={<AdminPanel />}>
              {/* <Route path="dashboard" element={<Dashboard />} /> */}
              {/* <Route path="notifications" element={<Notifications />} /> */}
              {/* Add more admin routes here */}
            </Route>
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
