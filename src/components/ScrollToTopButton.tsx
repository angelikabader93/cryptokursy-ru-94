
import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const ScrollToTopButton: React.FC = () => {
  // State to track when to show the button
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      // Show button when scrolled down 300px or more
      setShowButton(window.scrollY > 300);
    };

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll);
    
    // Check initial position
    handleScroll();
    
    // Clean up event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className={cn(
      "fixed bottom-6 left-6 z-50 transition-all duration-300",
      showButton ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
    )}>
      <Button 
        onClick={scrollToTop} 
        size="icon" 
        className="bg-crypto-purple hover:bg-crypto-lightPurple text-white rounded-full shadow-md"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </Button>
    </div>
  );
};

export default ScrollToTopButton;
