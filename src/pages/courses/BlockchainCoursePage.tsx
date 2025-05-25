
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check, Users, Award, BookOpen, Clock, Zap, AlertCircle, Layers, Play, Star, Code, Globe, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';

const BlockchainCoursePage = () => {
  // Course modules data
  const modules = [
    {
      title: "Техническая архитектура блокчейна",
      description: "Глубокое изучение технических аспектов блокчейн-технологий.",
      duration: "200 минут",
      color: "bg-cyan-500",
      lessons: [
        { title: "Структура блоков и цепочки", type: "video" as const, duration: "30 мин" },
        { title: "Хеширование и криптография", type: "video" as const, duration: "35 мин" },
        { title: "Меркл деревья", type: "video" as const, duration: "25 мин" },
        { title: "Типы блокчейнов", type: "video" as const, duration: "30 мин" },
        { title: "Форки и обновления", type: "video" as const, duration: "25 мин" },
        { title: "Масштабируемость", type: "video" as const, duration: "30 мин" },
        { title: "Практическая работа", type: "test" as const },
        { title: "Анализ существующих блокчейнов", type: "video" as const, duration: "25 мин" }
      ]
    },
    {
      title: "Смарт-контракты и разработка",
      description: "Изучение программирования смарт-контрактов и создания dApps.",
      duration: "250 минут",
      color: "bg-teal-500",
      lessons: [
        { title: "Введение в Solidity", type: "video" as const, duration: "40 мин" },
        { title: "Структура смарт-контракта", type: "video" as const, duration: "35 мин" },
        { title: "Переменные и функции", type: "video" as const, duration: "30 мин" },
        { title: "События и модификаторы", type: "video" as const, duration: "25 мин" },
        { title: "Безопасность контрактов", type: "video" as const, duration: "40 мин" },
        { title: "Тестирование и деплой", type: "video" as const, duration: "35 мин" },
        { title: "Создание dApp", type: "video" as const, duration: "30 мин" },
        { title: "Практический проект", type: "test" as const },
        { title: "Аудит смарт-контрактов", type: "video" as const, duration: "15 мин" }
      ]
    },
    {
      title: "Бизнес-применение блокчейна",
      description: "Практическое применение блокчейна в различных отраслях.",
      duration: "150 минут",
      color: "bg-blue-500",
      lessons: [
        { title: "Блокчейн в финансах", type: "video" as const, duration: "25 мин" },
        { title: "Supply chain и логистика", type: "video" as const, duration: "30 мин" },
        { title: "Здравоохранение и блокчейн", type: "video" as const, duration: "20 мин" },
        { title: "Недвижимость и токенизация", type: "video" as const, duration: "25 мин" },
        { title: "Энергетика и блокчейн", type: "video" as const, duration: "20 мин" },
        { title: "Образование и сертификация", type: "video" as const, duration: "15 мин" },
        { title: "Будущее блокчейна", type: "video" as const, duration: "15 мин" },
        { title: "Итоговый тест", type: "test" as const }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Андрей В.",
      position: "Blockchain разработчик",
      content: "Отличный технический курс! Получил глубокие знания по архитектуре блокчейна и смарт-контрактам.",
      rating: 5
    },
    {
      name: "Ольга Л.",
      position: "IT-директор",
      content: "Курс помог понять, как внедрить блокчейн в нашу компанию. Много практических примеров.",
      rating: 5
    },
    {
      name: "Максим П.",
      position: "Стартап основатель",
      content: "Благодаря курсу смог создать собственный блокчейн-проект. Рекомендую всем техническим специалистам!",
      rating: 4
    }
  ];

  const faqItems = [
    {
      question: "Нужны ли навыки программирования?",
      answer: "Желательны базовые навыки программирования, но мы объясняем все с нуля."
    },
    {
      question: "Какие инструменты понадобятся?",
      answer: "Мы предоставляем список всех необходимых инструментов и помогаем с их установкой."
    },
    {
      question: "Смогу ли я создать свой блокчейн-проект?",
      answer: "Да, в рамках курса вы создадите собственный смарт-контракт и dApp."
    },
    {
      question: "Есть ли практические задания?",
      answer: "Курс на 70% состоит из практических заданий и реальных проектов."
    }
  ];

  return (
    <CourseLayout
      courseTitle="Биткоин и альткоины"
      courseImage="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032"
      courseSlug="bitcoin-and-altcoins"
      level="Средний"
      price="Платно"
    >
      {/* Hero Content */}
      <div className="space-y-16">
        {/* Main CTA Section */}
        <section className="text-center">
          <div className="inline-flex items-center bg-cyan-100 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Layers className="w-5 h-5 mr-2 text-cyan-700" />
            <span className="font-semibold text-cyan-700">ТЕХНИЧЕСКИЙ КУРС</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-crypto-blue">
            ИЗУЧИТЕ БЛОКЧЕЙН
            <span className="block text-4xl md:text-6xl bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
              НА ТЕХНИЧЕСКОМ УРОВНЕ
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 font-medium text-gray-700">
            Глубокое погружение в техническую архитектуру блокчейна
            <br />
            <span className="text-cyan-600">От устройства сети до создания смарт-контрактов</span>
          </p>
          
          <Button 
            size="lg"
            className="bg-cyan-600 text-white hover:bg-cyan-700 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all mb-12"
            onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-6 h-6 mr-3" />
            ЗАПИСАТЬСЯ НА КУРС
          </Button>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">30+</div>
              <div className="text-sm text-gray-600">Видео уроков</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">150+</div>
              <div className="text-sm text-gray-600">Студентов</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">4.7★</div>
              <div className="text-sm text-gray-600">Рейтинг курса</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">12</div>
              <div className="text-sm text-gray-600">Недель обучения</div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="bg-gradient-to-r from-cyan-50 to-white py-16 -mx-6 px-6 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-crypto-blue mb-4">
              Что вы изучите на техническом курсе?
            </h2>
            <p className="text-xl text-gray-600">
              Глубокое понимание технических аспектов блокчейн-технологий
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Архитектура блокчейна",
                description: "Изучение структуры блоков, хеширования и криптографических основ"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Смарт-контракты",
                description: "Программирование на Solidity и создание децентрализованных приложений"
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Консенсусные алгоритмы",
                description: "Глубокое понимание PoW, PoS и других механизмов консенсуса"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Масштабируемость",
                description: "Изучение решений для масштабирования блокчейн-сетей"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Практические проекты",
                description: "Создание собственных блокчейн-приложений и смарт-контрактов"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Бизнес-применение",
                description: "Практическое применение блокчейна в различных отраслях"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all transform hover:scale-105 border-2 border-cyan-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-cyan-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-cyan-600">
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
              Программа технического курса
            </h2>
            <p className="text-xl text-gray-600">
              Последовательное изучение от основ до продвинутых технических концепций
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                module: "Модуль 1-4",
                title: "Техническая архитектура",
                lessons: ["Структура блокчейна", "Криптография", "Типы сетей"],
                color: "bg-cyan-500"
              },
              {
                module: "Модуль 5-8", 
                title: "Смарт-контракты",
                lessons: ["Программирование Solidity", "dApps разработка", "Безопасность"],
                color: "bg-teal-500"
              },
              {
                module: "Модуль 9-12",
                title: "Бизнес-применение",
                lessons: ["Применение в отраслях", "Токенизация", "Будущее блокчейна"],
                color: "bg-blue-500"
              }
            ].map((module, index) => (
              <div key={index} className="flex items-start mb-8 group">
                <div className={`${module.color} text-white rounded-full p-4 mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Code className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-6 group-hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-crypto-blue mb-2">
                      {module.module}: {module.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {module.lessons.map((lesson, lessonIndex) => (
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
        <section className="py-16 bg-gradient-to-r from-cyan-50 to-white -mx-6 px-6 rounded-xl">
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
        <div className="bg-cyan-50 border-l-4 border-cyan-600 p-5 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="text-cyan-600 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-cyan-600">Техническое примечание</h4>
              <p className="text-sm text-gray-700 mt-1">
                Этот курс требует базовых знаний программирования. Мы рекомендуем ознакомиться 
                с основами JavaScript перед началом изучения.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BlockchainCoursePage;
