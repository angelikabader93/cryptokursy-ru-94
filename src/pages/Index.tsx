
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CoursesSection from '@/components/CoursesSection';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CalloutSection from '@/components/CalloutSection';
import Footer from '@/components/Footer';
import PopupForm from '@/components/PopupForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <CoursesSection />
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
