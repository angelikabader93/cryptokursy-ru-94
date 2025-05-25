
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
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
    <CourseLayout
      courseTitle="Bitcoin для начинающих"
      courseImage="https://images.unsplash.com/photo-1606143509433-949c317f3905?q=80&w=2070"
      courseSlug="bitcoin-for-beginners"
      level="Новичок"
      price="Бесплатно"
    >
      {/* Hero Content */}
      <div className="space-y-16">
        {/* Main CTA Section */}
        <section className="text-center">
          <div className="inline-flex items-center bg-crypto-orange/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Gift className="w-5 h-5 mr-2 text-crypto-orange" />
            <span className="font-semibold text-crypto-orange">100% БЕСПЛАТНЫЙ КУРС</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-crypto-blue">
            ОСВОЙТЕ BITCOIN
            <span className="block text-4xl md:text-6xl bg-gradient-to-r from-crypto-orange to-amber-500 bg-clip-text text-transparent">
              ЗА 7 ДНЕЙ
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 font-medium text-gray-700">
            От истории создания до практического использования Bitcoin
            <br />
            <span className="text-crypto-orange">Абсолютно бесплатно и без скрытых платежей</span>
          </p>
          
          <Button 
            size="lg"
            className="bg-crypto-orange text-white hover:bg-crypto-orange/90 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all mb-12"
            onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-6 h-6 mr-3" />
            НАЧАТЬ ОБУЧЕНИЕ БЕСПЛАТНО
          </Button>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">15+</div>
              <div className="text-sm text-gray-600">Видео уроков</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">500+</div>
              <div className="text-sm text-gray-600">Студентов</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">4.9★</div>
              <div className="text-sm text-gray-600">Рейтинг курса</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">7</div>
              <div className="text-sm text-gray-600">Дней обучения</div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="bg-gradient-to-r from-orange-50 to-white py-16 -mx-6 px-6 rounded-xl">
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
                  <div className="bg-crypto-orange/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-crypto-orange">
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
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gradient-to-r from-orange-50 to-white -mx-6 px-6 rounded-xl">
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
        <CourseInstructor instructorId="zubkov" />

        {/* FAQ Section */}
        <CourseFAQ faqItems={faqItems} />

        {/* Warning Box */}
        <div className="bg-orange-50 border-l-4 border-crypto-orange p-5 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="text-crypto-orange mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-crypto-orange">Важно помнить</h4>
              <p className="text-sm text-gray-700 mt-1">
                Инвестиции в криптовалюты сопряжены с риском. Всегда проводите собственное исследование перед
                инвестированием.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BitcoinCoursePage;
