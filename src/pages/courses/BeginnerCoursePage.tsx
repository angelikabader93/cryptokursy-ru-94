
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
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
    <CourseLayout
      courseTitle="Блокчейн и криптовалюты"
      courseImage="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032"
      courseSlug="blockchain-and-crypto"
      level="Начинающий"
      price="Платно"
    >
      {/* Hero Content */}
      <div className="space-y-16">
        {/* Main CTA Section */}
        <section className="text-center">
          <div className="inline-flex items-center bg-blue-100 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <BookOpen className="w-5 h-5 mr-2 text-blue-700" />
            <span className="font-semibold text-blue-700">ПОЛНЫЙ КУРС</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-crypto-blue">
            ИЗУЧИТЕ БЛОКЧЕЙН
            <span className="block text-4xl md:text-6xl bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              И КРИПТОВАЛЮТЫ
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 font-medium text-gray-700">
            Полное погружение в мир блокчейн-технологий и криптовалют
            <br />
            <span className="text-blue-600">От основ до продвинутых концепций</span>
          </p>
          
          <Button 
            size="lg"
            className="bg-blue-600 text-white hover:bg-blue-700 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all mb-12"
            onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-6 h-6 mr-3" />
            ЗАПИСАТЬСЯ НА КУРС
          </Button>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">25+</div>
              <div className="text-sm text-gray-600">Видео уроков</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">200+</div>
              <div className="text-sm text-gray-600">Студентов</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">4.8★</div>
              <div className="text-sm text-gray-600">Рейтинг курса</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">10</div>
              <div className="text-sm text-gray-600">Недель обучения</div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="bg-gradient-to-r from-blue-50 to-white py-16 -mx-6 px-6 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-crypto-blue mb-4">
              Что вы изучите на курсе?
            </h2>
            <p className="text-xl text-gray-600">
              Комплексное изучение блокчейн-технологий и криптовалют
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Основы блокчейна",
                description: "Глубокое понимание технологии блокчейн и принципов децентрализации"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Криптовалюты",
                description: "Изучение различных типов криптовалют и их особенностей"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Безопасность",
                description: "Обеспечение безопасности криптоактивов и защита от мошенников"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Смарт-контракты",
                description: "Понимание работы смарт-контрактов и их применения"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "DeFi протоколы",
                description: "Изучение децентрализованных финансовых протоколов"
              },
              {
                icon: <Download className="w-8 h-8" />,
                title: "Практические навыки",
                description: "Получение реальных навыков работы с блокчейн-приложениями"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all transform hover:scale-105 border-2 border-blue-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-blue-600">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-crypto-blue">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Course Program */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-crypto-blue mb-4">
              Программа курса
            </h2>
            <p className="text-xl text-gray-600">
              Структурированное обучение от основ до продвинутых тем
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
                    <h3 className="text-xl font-bold text-crypto-blue mb-2">
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
        <section className="py-16 bg-gradient-to-r from-blue-50 to-white -mx-6 px-6 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-crypto-blue mb-4">
              Отзывы наших студентов
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-crypto-blue">{testimonial.name}</div>
                    <div className="text-sm text-gray-500">{testimonial.position}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

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
    </CourseLayout>
  );
};

export default BeginnerCoursePage;
