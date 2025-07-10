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
// import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar isAuthenticated={false} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/notifications" element={<NotificationsPage />} />
            <Route path="/notification/:id" element={<NotificationDetailsPage />} />
            <Route path="/mock-tests" element={<MockTests />} />
            <Route path="/resources" element={<ResourcesPage />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
