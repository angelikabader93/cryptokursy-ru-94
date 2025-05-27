
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
    <div 
      className="min-h-screen flex flex-col"
      itemScope 
      itemType="https://schema.org/WebPage"
    >
      <SEOHead 
        title="Курсы по криптовалютам и блокчейну"
        description="Изучите криптовалюты с нуля! Профессиональные курсы по Bitcoin, блокчейну и инвестициям в криптовалюты. Практические знания от экспертов индустрии."
        canonical="https://cryptokursy.ru/"
        ogImage="https://images.unsplash.com/photo-1642790551116-18e150f248e3?q=80&w=2070&auto=format&fit=crop"
      />
      <WebsiteSchema />
      <OrganizationSchema />
      
      <noscript>
        <style>
          {`
            .crypto-card {
              background: white;
              padding: 1.5rem;
              border-radius: 0.5rem;
              box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
              border: 1px solid #e5e7eb;
            }
            .section-title {
              font-size: 2rem;
              font-weight: bold;
              color: #1e40af;
              margin-bottom: 2rem;
              text-align: center;
            }
            .text-gradient {
              background: linear-gradient(to right, #8b5cf6, #a855f7);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              background-clip: text;
            }
          `}
        </style>
      </noscript>
      
      <Header />
      <main role="main" itemProp="mainContentOfPage">
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
