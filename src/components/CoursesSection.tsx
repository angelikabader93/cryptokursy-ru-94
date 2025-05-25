
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Star, Users, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadCaptureModal from './LeadCaptureModal';

const CoursesSection = () => {
  const [showModal, setShowModal] = useState(false);

  const courses = [
    {
      title: "Криптовалюта для чайников",
      description: "Идеальный курс для новичков. Изучите основы криптовалют, создайте первый кошелек и совершите первую покупку Bitcoin.",
      price: "Бесплатно",
      originalPrice: null,
      duration: "7 дней",
      students: "1,200+",
      rating: 4.8,
      features: [
        "Основы блокчейна",
        "Создание кошелька",
        "Первая покупка крипты",
        "Безопасность"
      ],
      link: "/courses/crypto-for-beginners",
      isFree: true
    },
    {
      title: "Блокчейн и криптовалюты",
      description: "Углубленное изучение технологии блокчейн и различных криптовалют. Для тех, кто хочет понимать технические аспекты.",
      price: "15,000 ₽",
      originalPrice: "20,000 ₽",
      duration: "4 недели",
      students: "800+",
      rating: 4.9,
      features: [
        "Технология блокчейн",
        "Смарт-контракты",
        "DeFi протоколы",
        "Анализ проектов"
      ],
      link: "/courses/blockchain-and-crypto",
      isFree: false
    },
    {
      title: "Биткоин и альткоины",
      description: "Изучите стратегии инвестирования в Bitcoin и альтернативные криптовалюты. Практические навыки трейдинга.",
      price: "29,000 ₽",
      originalPrice: "35,000 ₽",
      duration: "6 недель",
      students: "500+",
      rating: 4.7,
      features: [
        "Анализ рынка",
        "Стратегии торговли",
        "Управление рисками",
        "Портфельное инвестирование"
      ],
      link: "/courses/bitcoin-and-altcoins",
      isFree: false
    },
    {
      title: "Премиальная криптошкола",
      description: "Полный курс для серьезных инвесторов. Индивидуальное сопровождение, закрытые вебинары и эксклюзивные материалы.",
      price: "50,000 ₽",
      originalPrice: "75,000 ₽",
      duration: "3 месяца",
      students: "200+",
      rating: 5.0,
      features: [
        "Индивидуальный ментор",
        "Закрытые сигналы",
        "VIP-поддержка",
        "Эксклюзивные материалы"
      ],
      link: "/courses/premium-crypto-school",
      isFree: false
    }
  ];

  const handleFreeClick = () => {
    setShowModal(true);
  };

  return (
    <section className="py-16 bg-gray-50" id="courses">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-crypto-blue mb-4">
            Какие курсы мы предлагаем?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Выберите программу обучения, которая подходит именно вам
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 h-full flex flex-col">
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  {course.isFree ? (
                    <h3 
                      className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-crypto-blue cursor-pointer hover:text-crypto-orange transition-colors"
                      onClick={handleFreeClick}
                    >
                      {course.title}
                    </h3>
                  ) : (
                    <Link to={course.link}>
                      <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-crypto-blue hover:text-crypto-orange transition-colors cursor-pointer">
                        {course.title}
                      </h3>
                    </Link>
                  )}
                  <p className="text-gray-600 mb-4">{course.description}</p>
                </div>
                
                <div className="mb-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {course.students}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(course.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">({course.rating})</span>
                  </div>
                </div>

                <div className="mb-6 flex-1">
                  <ul className="space-y-2">
                    {course.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-crypto-blue">
                      {course.price}
                    </div>
                    {course.originalPrice && (
                      <div className="text-sm text-gray-500 line-through">
                        {course.originalPrice}
                      </div>
                    )}
                  </div>
                  
                  {course.isFree ? (
                    <Button 
                      className="w-full bg-crypto-orange hover:bg-orange-600 text-white font-bold"
                      onClick={handleFreeClick}
                    >
                      Начать бесплатно
                    </Button>
                  ) : (
                    <Link to={course.link}>
                      <Button className="w-full bg-crypto-purple hover:bg-purple-700 text-white font-bold">
                        Подробнее
                      </Button>
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <LeadCaptureModal open={showModal} onOpenChange={setShowModal} />
    </section>
  );
};

export default CoursesSection;
