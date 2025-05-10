
import React, { useEffect, useState } from 'react';
import { useLowercaseRedirect } from '@/hooks/use-lowercase-redirect';

interface LowercaseRedirectProps {
  children: React.ReactNode;
}

const LowercaseRedirect: React.FC<LowercaseRedirectProps> = ({ children }) => {
  const [isRedirecting, setIsRedirecting] = useState(false);
  
  // Apply the redirect hook
  useLowercaseRedirect();
  
  // Check if URL has uppercase letters
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      const lowercasePath = currentPath.toLowerCase();
      
      if (currentPath !== lowercasePath) {
        setIsRedirecting(true);
      }
    }
  }, []);
  
  // If redirecting, show a minimal loading state or nothing
  if (isRedirecting) {
    return <div className="w-full h-screen flex items-center justify-center">Redirecting...</div>;
  }
  
  // Render children components
  return <>{children}</>;
};

export default LowercaseRedirect;
