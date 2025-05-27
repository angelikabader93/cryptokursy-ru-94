
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import SignupForm from './SignupForm';
import LeadCaptureModal from './LeadCaptureModal';

const HeroSection = () => {
  const [showModal, setShowModal] = useState(false);

  const scrollToCourses = () => {
    const coursesSection = document.getElementById('courses');
    if (coursesSection) {
      coursesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      className="relative bg-gradient-to-r from-crypto-purple/90 to-crypto-lightPurple text-white py-16 md:py-24"
      itemScope 
      itemType="https://schema.org/WebPageElement"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=1887')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <header className="w-full md:w-1/2 mb-8 md:mb-0 md:pr-8" role="banner">
            <h1 
              className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight"
              itemProp="headline"
            >
              БЕСПЛАТНОЕ обучение криптовалюте с нуля – станьте экспертом в крипте!
            </h1>
            <div 
              className="text-lg md:text-xl mb-8"
              itemProp="description"
            >
              <p>
                Хотите освоить <strong>криптовалюту</strong> и <em>блокчейн</em> с нуля? Наши курсы и школа крипты помогут вам разобраться в мире цифровых активов, даже если вы новичок! Мы предлагаем <strong>онлайн-курсы по криптовалюте</strong>, бесплатные уроки и премиальные программы для всех уровней подготовки.
              </p>
            </div>
            <nav className="flex flex-col sm:flex-row gap-4" aria-label="Основные действия">
              <Button 
                className="bg-crypto-orange hover:bg-orange-600 text-white font-bold text-lg py-6 px-8"
                onClick={() => setShowModal(true)}
                aria-describedby="hero-button-description"
              >
                Начать бесплатно
              </Button>
              <span id="hero-button-description" className="sr-only">
                Открыть форму регистрации на бесплатный курс
              </span>
              <Button 
                variant="outline" 
                className="bg-white hover:bg-gray-100 text-crypto-blue font-bold text-lg py-6 px-8"
                onClick={scrollToCourses}
                aria-describedby="learn-more-description"
              >
                Узнать больше
              </Button>
              <span id="learn-more-description" className="sr-only">
                Перейти к разделу с информацией о курсах
              </span>
            </nav>
          </header>
          
          <aside className="w-full md:w-1/2" id="hero-signup-form">
            <Card className="shadow-xl">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-crypto-blue mb-4">
                  Получите бесплатный доступ к курсу
                </h2>
                <SignupForm formType="hero" />
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
      
      <LeadCaptureModal open={showModal} onOpenChange={setShowModal} />
    </section>
  );
};

export default HeroSection;
