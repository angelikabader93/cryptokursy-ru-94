
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import SignupForm from './SignupForm';

const PopupForm = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [hasDisplayed, setHasDisplayed] = useState(false);
  
  useEffect(() => {
    // Check if popup was already displayed
    const popupDisplayed = localStorage.getItem('popupDisplayed');
    
    if (!popupDisplayed) {
      // Set timeout to display popup after 30 seconds
      const timer = setTimeout(() => {
        setShowPopup(true);
        setHasDisplayed(true);
        // Set flag in local storage
        localStorage.setItem('popupDisplayed', 'true');
      }, 30000); // 30 seconds
      
      return () => clearTimeout(timer);
    } else {
      setHasDisplayed(true);
    }
  }, []);
  
  // Also add exit intent detection
  useEffect(() => {
    if (hasDisplayed) return;
    
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowPopup(true);
        setHasDisplayed(true);
        localStorage.setItem('popupDisplayed', 'true');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
    
    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasDisplayed]);
  
  return (
    <Dialog open={showPopup} onOpenChange={setShowPopup}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold">Не упустите возможность!</DialogTitle>
          <DialogDescription className="text-center">
            Получите бесплатный доступ к нашему вводному курсу по криптовалюте прямо сейчас!
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <SignupForm formType="popup" onSubmitSuccess={() => setShowPopup(false)} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PopupForm;
