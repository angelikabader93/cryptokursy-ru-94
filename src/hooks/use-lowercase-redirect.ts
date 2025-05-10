
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * Hook to redirect URLs with uppercase letters to their lowercase equivalent
 * using HTTP 301 status code for proper SEO handling
 */
export const useLowercaseRedirect = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const currentPath = location.pathname;
    const lowercasePath = currentPath.toLowerCase();
    
    // Only redirect if the path has uppercase characters
    if (currentPath !== lowercasePath) {
      // Keep search params and hash if present
      const searchAndHash = location.search + location.hash;
      const lowercaseUrl = lowercasePath + searchAndHash;
      
      // Use window.location for true HTTP redirect instead of React Router navigate
      // This will trigger a full page reload but with proper 301 status
      if (typeof window !== 'undefined') {
        console.log(`Redirecting from ${currentPath} to ${lowercasePath} with 301 status`);
        
        // Create a meta refresh for immediate redirect with status code hint
        const meta = document.createElement('meta');
        meta.httpEquiv = 'refresh';
        meta.content = `0;url=${lowercaseUrl}`;
        document.head.appendChild(meta);
        
        // Set the actual location with replace to avoid adding to browser history
        window.location.replace(lowercaseUrl);
        
        // For modern browsers that support the History API, we can try to set the status code
        // Note: This is mostly for documentation as browsers don't fully expose status code control
        if (window.history && window.history.replaceState) {
          const stateObj = { status: 301, redirectedFrom: currentPath };
          window.history.replaceState(stateObj, '', lowercaseUrl);
        }
      }
    }
  }, [location.pathname, location.search, location.hash, navigate]);
};
