
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Users, Award, BookOpen, Clock, Star, Gift, Zap, Play, Download, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';
import LeadCaptureModal from '@/components/LeadCaptureModal';
import SEOHead from '@/components/SEOHead';
import CourseSchema from '@/components/CourseSchema';
import CourseBreadcrumbs from '@/components/CourseBreadcrumbs';

const CryptoForBeginnersLandingPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Криптовалюта для чайников - Бесплатный курс"
        description="Освойте мир криптовалют за 7 дней с нуля до уверенного пользователя! Абсолютно бесплатно и без скрытых платежей."
        canonical="https://cryptokursy.ru/courses/crypto-for-beginners"
        ogImage="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069"
      />
      <CourseSchema 
        name="Криптовалюта для чайников"
        description="Базовый курс для тех, кто только начинает свой путь в мире криптовалют"
        price="0"
        currency="RUB"
        level="Начинающий"
        isFree={true}
        duration="7 дней"
        url="https://cryptokursy.ru/courses/crypto-for-beginners"
      />
      <Header />
      <CourseBreadcrumbs courseName="Криптовалюта для чайников" />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-crypto-orange via-amber-500 to-yellow-500 text-white py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069')] bg-cover bg-center mix-blend-overlay opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Gift className="w-5 h-5 mr-2" />
              <span className="font-semibold">100% БЕСПЛАТНЫЙ КУРС</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
              КРИПТОВАЛЮТА
              <span className="block text-6xl md:text-8xl bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">
                ДЛЯ ЧАЙНИКОВ
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-8 font-medium">
              Освойте мир криптовалют за 7 дней с нуля до уверенного пользователя!
              <br />
              <span className="text-yellow-200">Абсолютно бесплатно и без скрытых платежей</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button 
                size="lg"
                className="bg-white text-crypto-orange hover:bg-gray-100 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all"
                onClick={() => setShowModal(true)}
              >
                <Play className="w-6 h-6 mr-3" />
                НАЧАТЬ ОБУЧЕНИЕ БЕСПЛАТНО
              </Button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm opacity-90">Видео уроков</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm opacity-90">Студентов</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-sm opacity-90">Рейтинг курса</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-3xl font-bold">7</div>
                <div className="text-sm opacity-90">Дней обучения</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-crypto-blue mb-4">
              Что вы изучите за 7 дней?
            </h2>
            <p className="text-xl text-gray-600">
              Полная программа для новичков - от базовых понятий до практического использования
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Основы блокчейна",
                description: "Поймете, как работает технология блокчейн простыми словами"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Безопасность",
                description: "Научитесь безопасно хранить и использовать криптовалюты"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Первая покупка",
                description: "Купите свою первую криптовалюту и создадите кошелек"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Практические навыки",
                description: "Получите реальные навыки работы с криптовалютами"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Сообщество",
                description: "Присоединитесь к закрытому чату учеников курса"
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Материалы",
                description: "Получите доступ к эксклюзивным материалам и чек-листам"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all transform hover:scale-105 border-2 border-orange-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-crypto-orange/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-crypto-orange">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-crypto-blue">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Program */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-crypto-blue mb-4">
              Программа курса по дням
            </h2>
            <p className="text-xl text-gray-600">
              Структурированное обучение с практическими заданиями
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                day: "День 1",
                title: "Знакомство с криптовалютами",
                lessons: ["Что такое криптовалюта?", "История Bitcoin", "Основные термины"],
                color: "bg-red-500"
              },
              {
                day: "День 2", 
                title: "Блокчейн технология",
                lessons: ["Как работает блокчейн", "Майнинг и валидация", "Децентрализация"],
                color: "bg-orange-500"
              },
              {
                day: "День 3",
                title: "Криптокошельки",
                lessons: ["Типы кошельков", "Создание первого кошелька", "Безопасность ключей"],
                color: "bg-yellow-500"
              },
              {
                day: "День 4",
                title: "Биржи и обмен",
                lessons: ["Выбор биржи", "Регистрация и верификация", "Первая покупка"],
                color: "bg-green-500"
              },
              {
                day: "День 5",
                title: "Безопасность",
                lessons: ["Защита от мошенников", "Резервные копии", "Двухфакторная аутентификация"],
                color: "bg-blue-500"
              },
              {
                day: "День 6",
                title: "Практическое использование",
                lessons: ["Отправка и получение", "Комиссии сети", "Смарт-контракты"],
                color: "bg-indigo-500"
              },
              {
                day: "День 7",
                title: "Дальнейшее развитие",
                lessons: ["Альткоины и токены", "DeFi экосистема", "Планы на будущее"],
                color: "bg-purple-500"
              }
            ].map((day, index) => (
              <div key={index} className="flex items-start mb-8 group">
                <div className={`${day.color} text-white rounded-full p-4 mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-6 group-hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-crypto-blue mb-2">
                      {day.day}: {day.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {day.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{lesson}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gradient-to-r from-orange-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-crypto-blue mb-4">
              Отзывы наших студентов
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Анна К.",
                role: "Домохозяйка",
                text: "Курс просто супер! Никогда не думала, что смогу разобраться в криптовалютах. Теперь уверенно покупаю Bitcoin!",
                rating: 5
              },
              {
                name: "Михаил П.",
                role: "Программист",
                text: "Отличное объяснение сложных вещей простым языком. Даже для технического специалиста было много нового.",
                rating: 5
              },
              {
                name: "Елена В.",
                role: "Учительница",
                text: "Спасибо за бесплатный курс! Теперь понимаю, что такое блокчейн и как работают криптовалюты.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                  <div>
                    <div className="font-semibold text-crypto-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-crypto-orange via-amber-500 to-yellow-500 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-bold mb-6">
              Начните изучать криптовалюты уже сегодня!
            </h2>
            <p className="text-xl mb-8">
              Присоединяйтесь к 5000+ студентов, которые уже освоили основы криптовалют
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <SignupForm formType="landing" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>100% бесплатно</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Без спама</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Мгновенный доступ</span>
              </div>
              <div className="flex items-center">
                <Check className="w-5 h-5 mr-2" />
                <span>Поддержка 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <LeadCaptureModal open={showModal} onOpenChange={setShowModal} />
    </div>
  );
};

export default CryptoForBeginnersLandingPage;
