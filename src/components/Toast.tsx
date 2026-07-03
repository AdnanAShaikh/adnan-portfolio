import React, { createContext, useContext, useState, useCallback } from 'react';
import { Check } from 'lucide-react';

interface ToastContextType {
  showToast: (message: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [toast, setToast] = useState<{ message: string; visible: boolean } | null>(null);
  const [timeoutId, setTimeoutId] = useState<any>(null);

  const showToast = useCallback((message: string) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    
    setToast({ message, visible: true });
    
    const id = setTimeout(() => {
      setToast(prev => prev ? { ...prev, visible: false } : null);
    }, 2500);
    
    setTimeoutId(id);
  }, [timeoutId]);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      {toast && (
        <div
          className={`fixed bottom-6 right-6 z-[100] flex items-center gap-3 bg-brand-dark/95 backdrop-blur-md text-white px-5 py-4 rounded-2xl shadow-2xl border border-white/10 transition-all duration-300 transform ${
            toast.visible
              ? 'translate-y-0 opacity-100 scale-100'
              : 'translate-y-4 opacity-0 scale-95 pointer-events-none'
          }`}
        >
          <div className="w-6 h-6 bg-brand-red-600 rounded-full flex items-center justify-center text-white shrink-0 shadow-md">
            <Check size={14} strokeWidth={3} />
          </div>
          <p className="font-sans font-semibold text-[14px] tracking-wide">
            {toast.message}
          </p>
        </div>
      )}
    </ToastContext.Provider>
  );
};

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useToast must be used within a ToastProvider');
  }
  return context;
};
