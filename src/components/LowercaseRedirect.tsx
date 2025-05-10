
import React from 'react';
import { useLowercaseRedirect } from '@/hooks/use-lowercase-redirect';

interface LowercaseRedirectProps {
  children: React.ReactNode;
}

const LowercaseRedirect: React.FC<LowercaseRedirectProps> = ({ children }) => {
  // Apply the redirect hook
  useLowercaseRedirect();
  
  // Render children components
  return <>{children}</>;
};

export default LowercaseRedirect;
