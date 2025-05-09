
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import SignupForm from './SignupForm';
import LeadCaptureModal from './LeadCaptureModal';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const scrollToCourses = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-gradient-to-r from-crypto-purple/90 to-crypto-lightPurple text-white py-16 md:py-24">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1887')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              БЕСПЛАТНОЕ обучение криптовалюте с нуля – станьте экспертом в крипте!
            </h1>
            <p className="text-lg md:text-xl mb-8">
              Хотите освоить <strong>криптовалюту</strong> и <em>блокчейн</em> с нуля? Наши курсы и школа крипты помогут вам разобраться в мире цифровых активов, даже если вы новичок! Мы предлагаем <strong>онлайн-курсы по криптовалюте</strong>, бесплатные уроки и премиальные программы для всех уровней подготовки.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-crypto-orange hover:bg-orange-600 text-white font-bold text-lg py-6 px-8"
                onClick={() => setShowModal(true)}
              >
                Начать бесплатно
              </Button>
              <Button 
                variant="outline" 
                className="bg-white hover:bg-gray-100 text-crypto-blue font-bold text-lg py-6 px-8"
                onClick={scrollToCourses}
              >
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className="w-full md:w-1/2" id="hero-signup-form">
            <div className="bg-white text-gray-800 rounded-lg shadow-xl p-6 md:p-8">
              <SignupForm formType="hero" />
            </div>
          </div>
        </div>
      </div>
      
      <LeadCaptureModal open={showModal} onOpenChange={setShowModal} />
    </section>
  );
};

export default HeroSection;
