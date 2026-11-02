import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { NotificationProvider } from './context/NotificationContext';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import EventManagement from './pages/EventManagement';
import Catering from './pages/Catering';
import WeddingPlanner from './pages/WeddingPlanner';
import NotFound from './pages/NotFound';

function App() {
  return (
    <NotificationProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events" element={<EventManagement />} />
            <Route path="/catering" element={<Catering />} />
            <Route path="/wedding-planner" element={<WeddingPlanner />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </NotificationProvider>
  );
}

export default App;
