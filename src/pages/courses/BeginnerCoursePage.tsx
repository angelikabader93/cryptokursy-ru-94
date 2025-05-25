
import React from 'react';
import { Check, Users, Award, BookOpen, Clock, Zap, AlertCircle, Gift, Play, Star, Shield, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';

const BeginnerCoursePage = () => {
  // Course modules data
  const modules = [
    {
      title: "Основы блокчейна",
      description: "Понимание технологии блокчейн, децентрализации и принципов работы.",
      duration: "180 минут",
      color: "bg-blue-500",
      lessons: [
        { title: "Что такое блокчейн", type: "video" as const, duration: "25 мин" },
        { title: "История блокчейн-технологий", type: "video" as const, duration: "20 мин" },
        { title: "Децентрализация vs централизация", type: "video" as const, duration: "30 мин" },
        { title: "Консенсусные алгоритмы", type: "video" as const, duration: "35 мин" },
        { title: "Практическое задание", type: "test" as const },
        { title: "Применение блокчейна", type: "video" as const, duration: "25 мин" },
        { title: "Виды блокчейнов", type: "video" as const, duration: "25 мин" },
        { title: "Финальный тест", type: "test" as const }
      ]
    },
    {
      title: "Криптовалюты и токены",
      description: "Изучение различных типов криптовалют, токенов и их особенностей.",
      duration: "150 минут",
      color: "bg-green-500",
      lessons: [
        { title: "Bitcoin и его роль", type: "video" as const, duration: "20 мин" },
        { title: "Ethereum и смарт-контракты", type: "video" as const, duration: "30 мин" },
        { title: "Альткоины и их особенности", type: "video" as const, duration: "25 мин" },
        { title: "Токены ERC-20 и другие стандарты", type: "video" as const, duration: "30 мин" },
        { title: "DeFi протоколы", type: "video" as const, duration: "25 мин" },
        { title: "NFT и их применение", type: "video" as const, duration: "20 мин" },
        { title: "Тест по криптовалютам", type: "test" as const }
      ]
    },
    {
      title: "Безопасность и кошельки",
      description: "Обеспечение безопасности криптоактивов и работа с различными кошельками.",
      duration: "120 минут",
      color: "bg-red-500",
      lessons: [
        { title: "Типы криптокошельков", type: "video" as const, duration: "20 мин" },
        { title: "Горячие vs холодные кошельки", type: "video" as const, duration: "25 мин" },
        { title: "Приватные ключи и seed-фразы", type: "video" as const, duration: "30 мин" },
        { title: "Безопасность в интернете", type: "video" as const, duration: "20 мин" },
        { title: "Защита от мошенников", type: "video" as const, duration: "25 мин" },
        { title: "Практическое задание", type: "test" as const }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Мария С.",
      position: "Маркетолог",
      content: "Отличный курс для начинающих! Все объяснено просто и понятно. Теперь я уверенно разбираюсь в криптовалютах.",
      rating: 5
    },
    {
      name: "Дмитрий К.",
      position: "IT-специалист",
      content: "Курс помог систематизировать знания о блокчейне. Особенно полезны практические примеры.",
      rating: 5
    },
    {
      name: "Анна М.",
      position: "Студентка",
      content: "Благодаря курсу я смогла разобраться в сложной теме криптовалют. Рекомендую всем новичкам!",
      rating: 4
    }
  ];

  const faqItems = [
    {
      question: "Подходит ли курс для абсолютных новичков?",
      answer: "Да, курс специально разработан для людей без опыта в криптовалютах."
    },
    {
      question: "Сколько времени нужно для изучения курса?",
      answer: "Курс рассчитан на 4-6 недель при изучении 2-3 часа в неделю."
    },
    {
      question: "Нужно ли покупать криптовалюту для прохождения курса?",
      answer: "Нет, для изучения теории покупка криптовалют не требуется."
    },
    {
      question: "Получу ли я сертификат после завершения?",
      answer: "Да, после успешного прохождения всех модулей вы получите сертификат."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Full-width Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032')] bg-cover bg-center opacity-20"></div>
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 relative z-10 mb-8">
          <nav className="text-blue-200 text-sm">
            <span>Главная</span> › <span>Курсы</span> › <span className="text-white">Блокчейн и криптовалюты</span>
          </nav>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/3 mb-12 lg:mb-0 lg:pr-12">
              <div className="inline-flex items-center bg-blue-100/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <BookOpen className="w-5 h-5 mr-2 text-blue-200" />
                <span className="font-semibold text-blue-200">ПОЛНЫЙ КУРС</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                БЛОКЧЕЙН И<br />
                <span className="bg-gradient-to-r from-blue-200 to-white bg-clip-text text-transparent">
                  КРИПТОВАЛЮТЫ
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 font-medium text-blue-100">
                Полное руководство по освоению блокчейн-технологий от опытных практиков!
                <br />
                <span className="text-blue-200">Освойте мир децентрализованных технологий</span>
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-blue-600 hover:bg-blue-50 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all mb-12"
                onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-6 h-6 mr-3" />
                ЗАПИСАТЬСЯ НА КУРС
              </Button>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-sm text-blue-200">Видео уроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-sm text-blue-200">Студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">4.8★</div>
                  <div className="text-sm text-blue-200">Рейтинг курса</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10</div>
                  <div className="text-sm text-blue-200">Недель обучения</div>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="w-full lg:w-1/3">
              <Card className="shadow-2xl border-2 border-blue-200">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      СТАНДАРТ
                    </div>
                    <div className="text-4xl font-bold text-blue-600 mb-2">
                      15 000 ₽ <span className="text-lg text-gray-500 line-through">20 000 ₽</span>
                    </div>
                    <div className="text-orange-500 font-semibold">25% скидка</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">(128 отзывов)</span>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 rounded-lg p-6 mb-6">
                    <p className="text-center text-blue-700 font-medium">
                      Предложение закончится через:
                    </p>
                    <div className="grid grid-cols-4 gap-2 mt-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-blue-600">2</div>
                        <div className="text-xs text-gray-600">ДНЕЙ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">23</div>
                        <div className="text-xs text-gray-600">ЧАСОВ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">59</div>
                        <div className="text-xs text-gray-600">МИНУТ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-600">55</div>
                        <div className="text-xs text-gray-600">СЕКУНД</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Информация о курсе</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Полный доступ на 6 месяцев с поддержкой</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">25+ видео уроков</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Практические задания</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Сертификат о прохождении</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 text-lg">
                    Записаться на курс
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        {/* What You'll Learn */}
        <section className="bg-gradient-to-r from-blue-50 to-white py-16 -mx-4 px-4 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Что вы изучите за 10 недель?
            </h2>
            <p className="text-xl text-gray-600">
              Полная программа изучения блокчейн-технологий и криптовалют
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Основы блокчейна",
                description: "Поймете историю создания и принципы работы блокчейн-технологий"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Криптовалюты",
                description: "Разберетесь в различных типах криптовалют и их особенностях"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Безопасность",
                description: "Научитесь безопасно использовать и хранить криптоактивы"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Смарт-контракты",
                description: "Изучите работу смарт-контрактов и их применение"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "DeFi протоколы",
                description: "Освоите децентрализованные финансовые протоколы"
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Практические навыки",
                description: "Получите реальные навыки работы с блокчейн-приложениями"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all transform hover:scale-105 border-2 border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Course Program */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Программа курса по неделям
            </h2>
            <p className="text-xl text-gray-600">
              Структурированное обучение с практическими заданиями
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                week: "Неделя 1-3",
                title: "Основы блокчейна",
                lessons: ["Технология блокчейн", "Децентрализация", "Консенсусные алгоритмы"],
                color: "bg-blue-500"
              },
              {
                week: "Неделя 4-6", 
                title: "Криптовалюты и токены",
                lessons: ["Bitcoin и Ethereum", "Альткоины", "Токены и стандарты"],
                color: "bg-green-500"
              },
              {
                week: "Неделя 7-8",
                title: "Безопасность",
                lessons: ["Криптокошельки", "Приватные ключи", "Защита от мошенников"],
                color: "bg-red-500"
              },
              {
                week: "Неделя 9-10",
                title: "Продвинутые темы",
                lessons: ["DeFi протоколы", "NFT", "Будущее блокчейна"],
                color: "bg-purple-500"
              }
            ].map((week, index) => (
              <div key={index} className="flex items-start mb-8 group">
                <div className={`${week.color} text-white rounded-full p-4 mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-6 group-hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {week.week}: {week.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {week.lessons.map((lesson, lessonIndex) => (
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
        </section>

        {/* Testimonials */}
        <CourseTestimonials testimonials={testimonials} />

        {/* Interactive Course Modules */}
        <CourseModules modules={modules} />

        {/* Course Instructor */}
        <CourseInstructor instructorId="petrov" />

        {/* FAQ Section */}
        <CourseFAQ faqItems={faqItems} />

        {/* Warning Box */}
        <div className="bg-blue-50 border-l-4 border-blue-600 p-5 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="text-blue-600 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-blue-600">Важная информация</h4>
              <p className="text-sm text-gray-700 mt-1">
                Блокчейн-технологии быстро развиваются. Мы регулярно обновляем материалы курса, 
                чтобы они оставались актуальными.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeginnerCoursePage;
