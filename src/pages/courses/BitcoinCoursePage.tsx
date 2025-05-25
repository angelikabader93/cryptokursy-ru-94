
import React from 'react';
import { Check, Users, Award, BookOpen, Clock, Zap, AlertCircle, Gift, Play, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';

const BitcoinCoursePage = () => {
  // Course modules data
  const modules = [
    {
      title: "Основы Bitcoin",
      description: "История создания, принципы работы, техническая архитектура.",
      duration: "90 минут",
      color: "bg-orange-500",
      lessons: [
        { title: "История создания Bitcoin", type: "video" as const, duration: "18 мин" },
        { title: "Белая книга Сатоши Накамото", type: "video" as const, duration: "22 мин" },
        { title: "Архитектура сети Bitcoin", type: "video" as const, duration: "25 мин" },
        { title: "Как работают транзакции", type: "video" as const, duration: "25 мин" },
        { title: "Проверочный тест", type: "test" as const }
      ]
    },
    {
      title: "Майнинг и консенсус",
      description: "Процесс майнинга, алгоритмы консенсуса Proof-of-Work, сложность сети.",
      duration: "120 минут",
      color: "bg-yellow-500",
      lessons: [
        { title: "Что такое майнинг", type: "video" as const, duration: "20 мин" },
        { title: "Алгоритм Proof-of-Work", type: "video" as const, duration: "25 мин" },
        { title: "Сложность сети и хешрейт", type: "video" as const, duration: "20 мин" },
        { title: "Энергопотребление Bitcoin", type: "video" as const, duration: "25 мин" },
        { title: "Альтернативные алгоритмы", type: "video" as const, duration: "30 мин" },
        { title: "Тест по майнингу", type: "test" as const }
      ]
    },
    {
      title: "Безопасность и анонимность",
      description: "Криптография, приватные и публичные ключи, защита от атак.",
      duration: "90 минут",
      color: "bg-red-500",
      lessons: [
        { title: "Основы криптографии", type: "video" as const, duration: "15 мин" },
        { title: "Приватные и публичные ключи", type: "video" as const, duration: "20 мин" },
        { title: "Адреса Bitcoin", type: "video" as const, duration: "15 мин" },
        { title: "Анонимность в Bitcoin", type: "video" as const, duration: "20 мин" },
        { title: "Защита от атак", type: "video" as const, duration: "20 мин" },
        { title: "Практическое задание", type: "test" as const }
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Иван П.",
      position: "Инженер",
      content: "Курс помог разобраться в технических деталях Bitcoin. Особенно полезны модули про майнинг и безопасность.",
      rating: 5
    },
    {
      name: "Светлана М.",
      position: "Финансист",
      content: "Отличный курс для понимания основ Bitcoin. Рекомендую всем, кто хочет разобраться в криптовалютах.",
      rating: 4
    },
    {
      name: "Алексей К.",
      position: "Предприниматель",
      content: "Курс дал понимание, как работает Bitcoin изнутри. Теперь я увереннее принимаю решения об инвестициях.",
      rating: 5
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "Нужны ли специальные знания для прохождения курса?",
      answer: "Нет, курс предназначен для начинающих и не требует специальных знаний."
    },
    {
      question: "Сколько времени занимает прохождение курса?",
      answer: "Курс рассчитан на 3-4 недели, в зависимости от вашего темпа обучения."
    },
    {
      question: "Будет ли поддержка от преподавателей?",
      answer: "Да, вы можете задавать вопросы преподавателям в течение всего курса."
    },
    {
      question: "Предоставляется ли сертификат по окончании курса?",
      answer: "Да, после успешного завершения курса вы получите сертификат."
    },
    {
      question: "Можно ли скачать материалы курса?",
      answer: "Да, все материалы курса доступны для скачивания."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Full-width Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-amber-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606143509433-949c317f3905?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 relative z-10 mb-8">
          <nav className="text-orange-200 text-sm">
            <span>Главная</span> › <span>Курсы</span> › <span className="text-white">Bitcoin для начинающих</span>
          </nav>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/3 mb-12 lg:mb-0 lg:pr-12">
              <div className="inline-flex items-center bg-orange-100/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Gift className="w-5 h-5 mr-2 text-orange-200" />
                <span className="font-semibold text-orange-200">100% БЕСПЛАТНЫЙ КУРС</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                КРИПТОВАЛЮТА<br />
                <span className="bg-gradient-to-r from-orange-200 to-white bg-clip-text text-transparent">
                  ДЛЯ ЧАЙНИКОВ
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 font-medium text-orange-100">
                Освойте мир криптовалют за 7 дней с нуля до уверенного пользователя!
                <br />
                <span className="text-orange-200">Абсолютно бесплатно и без скрытых платежей</span>
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all mb-12"
                onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-6 h-6 mr-3" />
                НАЧАТЬ ОБУЧЕНИЕ БЕСПЛАТНО
              </Button>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-orange-200">Видео уроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5000+</div>
                  <div className="text-sm text-orange-200">Студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">4.9★</div>
                  <div className="text-sm text-orange-200">Рейтинг курса</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">7</div>
                  <div className="text-sm text-orange-200">Дней обучения</div>
                </div>
              </div>
            </div>
            
            {/* Form Card - free course doesn't need pricing card, show simple signup */}
            <div className="w-full lg:w-1/3">
              <Card className="shadow-2xl border-2 border-orange-200">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      100% БЕСПЛАТНО
                    </div>
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      0 ₽
                    </div>
                    <div className="text-green-600 font-semibold">Навсегда бесплатно</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">(5000+ отзывов)</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Что включено</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">15+ видео уроков</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Практические задания</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Поддержка сообщества</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Сертификат о прохождении</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 text-lg">
                    Начать бесплатно
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
        <section className="bg-gradient-to-r from-orange-50 to-white py-16 -mx-4 px-4 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
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
                title: "Основы Bitcoin",
                description: "Поймете историю создания и принципы работы первой криптовалюты"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Техническая архитектура",
                description: "Разберетесь в устройстве сети Bitcoin и работе транзакций"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Майнинг",
                description: "Узнаете, как работает процесс майнинга и алгоритм Proof-of-Work"
              },
              {
                icon: <AlertCircle className="w-8 h-8" />,
                title: "Безопасность",
                description: "Научитесь безопасно использовать и хранить Bitcoin"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Практические навыки",
                description: "Получите реальные навыки работы с Bitcoin-кошельками"
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Актуальные знания",
                description: "Изучите последние тренды и перспективы Bitcoin"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all transform hover:scale-105 border-2 border-orange-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-orange-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-orange-600">
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
                title: "Введение в Bitcoin",
                lessons: ["История создания", "Белая книга Сатоши", "Основные принципы"],
                color: "bg-red-500"
              },
              {
                day: "День 2", 
                title: "Техническая архитектура",
                lessons: ["Как работает сеть", "Транзакции", "Блоки и цепочка"],
                color: "bg-orange-500"
              },
              {
                day: "День 3",
                title: "Майнинг и консенсус",
                lessons: ["Процесс майнинга", "Proof-of-Work", "Сложность сети"],
                color: "bg-yellow-500"
              },
              {
                day: "День 4",
                title: "Криптография и безопасность",
                lessons: ["Приватные ключи", "Публичные адреса", "Цифровые подписи"],
                color: "bg-green-500"
              },
              {
                day: "День 5",
                title: "Bitcoin кошельки",
                lessons: ["Типы кошельков", "Создание кошелька", "Резервные копии"],
                color: "bg-blue-500"
              },
              {
                day: "День 6",
                title: "Практическое использование",
                lessons: ["Отправка Bitcoin", "Получение платежей", "Комиссии"],
                color: "bg-indigo-500"
              },
              {
                day: "День 7",
                title: "Перспективы Bitcoin",
                lessons: ["Lightning Network", "Масштабируемость", "Будущее Bitcoin"],
                color: "bg-purple-500"
              }
            ].map((day, index) => (
              <div key={index} className="flex items-start mb-8 group">
                <div className={`${day.color} text-white rounded-full p-4 mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Clock className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-6 group-hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
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
        </section>

        {/* Testimonials */}
        <CourseTestimonials testimonials={testimonials} />

        {/* Interactive Course Modules */}
        <CourseModules modules={modules} />

        {/* Course Instructor */}
        <CourseInstructor instructorId="zubkov" />

        {/* FAQ Section */}
        <CourseFAQ faqItems={faqItems} />

        {/* Warning Box */}
        <div className="bg-orange-50 border-l-4 border-orange-500 p-5 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="text-orange-500 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-orange-600">Важно помнить</h4>
              <p className="text-sm text-gray-700 mt-1">
                Инвестиции в криптовалюты сопряжены с риском. Всегда проводите собственное исследование перед
                инвестированием.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BitcoinCoursePage;
