import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import QuickQuoteModal from './QuickQuoteModal';
import Toast from '../common/Toast';
import { useNotification } from '../../context/NotificationContext';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
  }, [pathname]);

  return null;
};

const Layout = ({ children }) => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const { toast, hideToast } = useNotification();

  return (
    <div className="min-h-screen flex flex-col bg-navy-950 text-slate-100 font-sans selection:bg-gold-500 selection:text-navy-950">
      <ScrollToTop />
      <Navbar onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />

      {/* Global Quick Quote Modal */}
      <QuickQuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />

      {/* Global Toast Alert */}
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={hideToast}
        />
      )}
    </div>
  );
};

export default Layout;
