
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CoursesSection from '@/components/CoursesSection';
import InstructorsSection from '@/components/InstructorsSection';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CalloutSection from '@/components/CalloutSection';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';

const Index = () => {
  // Прокрутка к якорю при загрузке страницы, если есть хэш в URL
  React.useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
        <InstructorsSection />
        <ComparisonSection />
        <TestimonialsSection />
        <CalloutSection />
      </main>
      <Footer />
      <PopupForm />
    </div>
  );
};

export default Index;
