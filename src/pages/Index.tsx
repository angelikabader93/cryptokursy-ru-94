
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
import StudentResultsSection from '@/components/StudentResultsSection';
import PracticalValueSection from '@/components/PracticalValueSection';
import FearsSection from '@/components/FearsSection';
import MarathonSection from '@/components/MarathonSection';
import BonusesSection from '@/components/BonusesSection';
import CourseModulesSection from '@/components/CourseModulesSection';
import SEOHead from '@/components/SEOHead';
import WebsiteSchema from '@/components/WebsiteSchema';
import OrganizationSchema from '@/components/OrganizationSchema';

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
      <SEOHead 
        title="Курсы по криптовалютам и блокчейну"
        description="Изучите криптовалюты с нуля! Профессиональные курсы по Bitcoin, блокчейну и инвестициям в криптовалюты. Практические знания от экспертов индустрии."
        canonical="https://cryptokursy.ru/"
        ogImage="https://images.unsplash.com/photo-1642790551116-18e150f248e3?q=80&w=2070&auto=format&fit=crop"
      />
      <WebsiteSchema />
      <OrganizationSchema />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StudentResultsSection />
        <PracticalValueSection />
        <FearsSection />
        <CoursesSection />
        <CourseModulesSection />
        <BonusesSection />
        <MarathonSection />
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
