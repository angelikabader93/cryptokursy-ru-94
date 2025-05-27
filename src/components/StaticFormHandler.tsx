
import React, { useEffect } from 'react';

const StaticFormHandler: React.FC = () => {
  useEffect(() => {
    // Handle form submissions for static forms
    const handleFormSubmit = (event: Event) => {
      const form = event.target as HTMLFormElement;
      if (form.action && form.action.includes('/submit-form')) {
        event.preventDefault();
        
        // Extract form data
        const formData = new FormData(form);
        const data = {
          name: formData.get('name'),
          email: formData.get('email'),
          phone: formData.get('phone'),
          course: formData.get('course')
        };
        
        // Log the data (in a real app, this would be sent to a server)
        console.log('Form submission:', data);
        
        // Show success message
        alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.');
        
        // Reset form
        form.reset();
      }
    };

    // Add event listener to all forms
    document.addEventListener('submit', handleFormSubmit);
    
    return () => {
      document.removeEventListener('submit', handleFormSubmit);
    };
  }, []);

  return null; // This component doesn't render anything
};

export default StaticFormHandler;
