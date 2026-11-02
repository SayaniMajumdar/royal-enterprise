import React, { createContext, useContext, useState, useCallback } from 'react';

const NotificationContext = createContext(null);

export const NotificationProvider = ({ children }) => {
  const [toast, setToast] = useState(null);

  const showToast = useCallback((message, type = 'success', duration = 5000) => {
    setToast({ message, type, id: Date.now() });

    if (duration > 0) {
      setTimeout(() => {
        setToast((current) => (current && current.id === toast?.id ? null : current));
      }, duration);
    }
  }, [toast?.id]);

  const hideToast = useCallback(() => {
    setToast(null);
  }, []);

  return (
    <NotificationContext.Provider value={{ toast, showToast, hideToast }}>
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotification = () => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error('useNotification must be used within a NotificationProvider');
  }
  return context;
};
