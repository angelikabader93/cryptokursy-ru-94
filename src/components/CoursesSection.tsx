
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import LeadCaptureModal from './LeadCaptureModal';

const courses = [
  {
    title: "Криптовалюта для чайников",
    level: "Новичок",
    description: "Базовый курс для тех, кто только начинает свой путь в мире криптовалют. Изучите основы блокчейна, как работают криптокошельки, и научитесь безопасно хранить криптовалюту.",
    image: "https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069",
    price: "Бесплатно",
    popular: true
  },
  {
    title: "Блокчейн и криптовалюты",
    level: "Средний",
    description: "Глубокое погружение в технологии блокчейн и их применение. Вы узнаете о разных типах криптовалют, принципах работы смарт-контрактов и основах DeFi.",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032",
    price: "Платно",
    popular: false
  },
  {
    title: "Биткоин и альткоины",
    level: "Средний",
    description: "Курс для тех, кто хочет научиться инвестировать в криптовалюты. Вы изучите основы анализа рынка, стратегии инвестирования и управление портфелем.",
    image: "https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002",
    price: "Платно",
    popular: false
  },
  {
    title: "Премиальная криптошкола",
    level: "Продвинутый",
    description: "Индивидуальное обучение с экспертами. Персональный наставник поможет вам освоить продвинутые стратегии трейдинга, анализ графиков и управление рисками.",
    image: "https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070",
    price: "Премиум",
    popular: false
  }
];

const CoursesSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleCourseClick = (price: string) => {
    if (price === "Бесплатно") {
      setShowModal(true);
    } else {
      document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16" id="courses">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Какие курсы мы предлагаем?</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Наша <strong>крипто академия</strong> предлагает разнообразные программы, чтобы вы могли выбрать подходящий формат обучения:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <div key={index} className="relative flex flex-col rounded-lg overflow-hidden shadow-lg h-full border border-gray-200">
              {course.popular && (
                <div className="absolute top-0 right-0 bg-crypto-orange text-white py-1 px-4 rounded-bl-lg font-bold text-sm z-10">
                  Популярный
                </div>
              )}
              
              <div className="h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title} 
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=2032";
                  }}
                />
              </div>
              
              <div className="flex-1 p-6 flex flex-col">
                <div className="mb-4">
                  <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${
                    course.level === 'Новичок' ? 'bg-green-100 text-green-700' :
                    course.level === 'Средний' ? 'bg-blue-100 text-blue-700' : 
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {course.level}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-crypto-blue">{course.title}</h3>
                <p className="text-gray-600 mb-6 flex-1">{course.description}</p>
                
                <div className="mt-auto flex items-end justify-between">
                  <span className={`font-bold text-lg ${
                    course.price === 'Бесплатно' ? 'text-green-600' : 
                    course.price === 'Премиум' ? 'text-crypto-purple' : 'text-crypto-blue'
                  }`}>
                    {course.price}
                  </span>
                  
                  <Button 
                    className={`${
                      course.price === 'Бесплатно' ? 
                      'bg-crypto-orange hover:bg-orange-600' : 
                      'bg-crypto-purple hover:bg-crypto-lightPurple'
                    } text-white`}
                    onClick={() => handleCourseClick(course.price)}
                  >
                    Подробнее
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button 
            className="bg-crypto-lightPurple hover:bg-crypto-purple text-white font-bold py-6 px-12 text-lg"
            onClick={() => document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Просмотреть все курсы
          </Button>
        </div>
      </div>
      <LeadCaptureModal open={showModal} onOpenChange={setShowModal} />
    </section>
  );
};

export default CoursesSection;
