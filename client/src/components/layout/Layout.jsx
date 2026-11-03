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
    <div className="min-h-screen flex flex-col bg-[#FAF7F2] dark:bg-[#141210] text-[#1F1D1A] dark:text-[#FAF7F2] font-sans selection:bg-[#FEF3C7] selection:text-[#6E1423] dark:selection:bg-[#6E1423] dark:selection:text-[#FDE68A] transition-colors duration-200">
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
