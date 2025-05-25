
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check, Users, Award, BookOpen, Clock, Zap, AlertCircle, Crown, Play, Star, TrendingUp, Target, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';

const PremiumCoursePage = () => {
  // Course modules data
  const modules = [
    {
      title: "Продвинутый анализ рынка",
      description: "Глубокий технический и фундаментальный анализ криптовалютного рынка.",
      duration: "240 минут",
      color: "bg-purple-500",
      lessons: [
        { title: "Продвинутый технический анализ", type: "video" as const, duration: "45 мин" },
        { title: "Фундаментальный анализ проектов", type: "video" as const, duration: "40 мин" },
        { title: "Анализ on-chain метрик", type: "video" as const, duration: "35 мин" },
        { title: "Макроэкономические факторы", type: "video" as const, duration: "30 мин" },
        { title: "Циклы рынка криптовалют", type: "video" as const, duration: "40 мин" },
        { title: "Индикаторы настроений рынка", type: "video" as const, duration: "35 мин" },
        { title: "Практический анализ", type: "test" as const },
        { title: "Разбор кейсов", type: "video" as const, duration: "35 мин" }
      ]
    },
    {
      title: "Стратегии инвестирования",
      description: "Профессиональные стратегии и методы управления портфелем.",
      duration: "300 минут",
      color: "bg-indigo-500",
      lessons: [
        { title: "Долгосрочные стратегии HODL", type: "video" as const, duration: "30 мин" },
        { title: "DCA и усреднение позиций", type: "video" as const, duration: "35 мин" },
        { title: "Портфельные стратегии", type: "video" as const, duration: "40 мин" },
        { title: "Ребалансировка портфеля", type: "video" as const, duration: "25 мин" },
        { title: "Управление рисками", type: "video" as const, duration: "45 мин" },
        { title: "Стратегии для разных рынков", type: "video" as const, duration: "35 мин" },
        { title: "Альтернативные инвестиции", type: "video" as const, duration: "30 мин" },
        { title: "Налогообложение криптовалют", type: "video" as const, duration: "25 мин" },
        { title: "Создание инвестплана", type: "test" as const },
        { title: "Психология инвестирования", type: "video" as const, duration: "30 мин" }
      ]
    },
    {
      title: "DeFi и продвинутые инструменты",
      description: "Изучение децентрализованных финансов и сложных криптоинструментов.",
      duration: "180 минут",
      color: "bg-pink-500",
      lessons: [
        { title: "Протоколы кредитования", type: "video" as const, duration: "30 мин" },
        { title: "AMM и пулы ликвидности", type: "video" as const, duration: "35 мин" },
        { title: "Фарминг доходности", type: "video" as const, duration: "30 мин" },
        { title: "Стейкинг и валидация", type: "video" as const, duration: "25 мин" },
        { title: "Деривативы в DeFi", type: "video" as const, duration: "30 мин" },
        { title: "Риски DeFi протоколов", type: "video" as const, duration: "30 мин" },
        { title: "Практическая работа с DeFi", type: "test" as const }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Владимир И.",
      position: "Инвестиционный консультант",
      content: "Курс дал мне глубокие знания для профессиональной работы с криптовалютами. Персональные консультации особенно ценны.",
      rating: 5
    },
    {
      name: "Екатерина Р.",
      position: "Финансовый аналитик",
      content: "Лучший курс по криптоинвестированию! Материал подан на высоком уровне, много практики.",
      rating: 5
    },
    {
      name: "Сергей Т.",
      position: "Предприниматель",
      content: "Благодаря курсу смог значительно улучшить результаты своих инвестиций в криптовалюты.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "Подходит ли курс для новичков?",
      answer: "Курс рассчитан на людей с базовыми знаниями о криптовалютах. Рекомендуем сначала пройти базовый курс."
    },
    {
      question: "Что включает персональное сопровождение?",
      answer: "Индивидуальные консультации с экспертом, разбор вашего портфеля и персональные рекомендации."
    },
    {
      question: "Сколько длится доступ к материалам?",
      answer: "Пожизненный доступ ко всем материалам курса и обновлениям."
    },
    {
      question: "Есть ли гарантия возврата средств?",
      answer: "Да, мы предоставляем 30-дневную гарантию возврата средств без вопросов."
    }
  ];

  return (
    <CourseLayout
      courseTitle="Премиальная криптошкола"
      courseImage="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032"
      courseSlug="premium-crypto-school"
      level="Продвинутый"
      price="Премиум"
      popular={true}
    >
      {/* Hero Content */}
      <div className="space-y-16">
        {/* Main CTA Section */}
        <section className="text-center">
          <div className="inline-flex items-center bg-purple-100 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <Crown className="w-5 h-5 mr-2 text-purple-700" />
            <span className="font-semibold text-purple-700">ПРЕМИАЛЬНЫЙ КУРС</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight text-crypto-blue">
            СТАНЬТЕ ЭКСПЕРТОМ
            <span className="block text-4xl md:text-6xl bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              В КРИПТОИНВЕСТИРОВАНИИ
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-8 font-medium text-gray-700">
            Профессиональное обучение с персональным сопровождением эксперта
            <br />
            <span className="text-purple-600">Для серьезных инвесторов и трейдеров</span>
          </p>
          
          <Button 
            size="lg"
            className="bg-purple-600 text-white hover:bg-purple-700 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all mb-12"
            onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Play className="w-6 h-6 mr-3" />
            ЗАПИСАТЬСЯ НА КУРС
          </Button>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">40+</div>
              <div className="text-sm text-gray-600">Видео уроков</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">50+</div>
              <div className="text-sm text-gray-600">Студентов</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">5.0★</div>
              <div className="text-sm text-gray-600">Рейтинг курса</div>
            </div>
            <div className="bg-white rounded-xl p-4 shadow-md">
              <div className="text-3xl font-bold text-crypto-blue">16</div>
              <div className="text-sm text-gray-600">Недель обучения</div>
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="bg-gradient-to-r from-purple-50 to-white py-16 -mx-6 px-6 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-crypto-blue mb-4">
              Что включает премиальное обучение?
            </h2>
            <p className="text-xl text-gray-600">
              Максимальный уровень подготовки для профессиональных инвесторов
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Продвинутый анализ",
                description: "Глубокий технический и фундаментальный анализ криптовалютного рынка"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Профессиональные стратегии",
                description: "Эксклюзивные методы и стратегии от топовых криптоинвесторов"
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Персональное сопровождение",
                description: "Индивидуальные консультации и разбор вашего портфеля"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "DeFi и продвинутые инструменты",
                description: "Изучение сложных DeFi протоколов и криптоинструментов"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Закрытое сообщество",
                description: "Доступ к элитному сообществу криптоинвесторов"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Пожизненный доступ",
                description: "Неограниченный доступ ко всем материалам и обновлениям"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all transform hover:scale-105 border-2 border-purple-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-purple-600">
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
              Программа премиального курса
            </h2>
            <p className="text-xl text-gray-600">
              Углубленное изучение профессиональных инвестиционных стратегий
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                phase: "Блок 1-5",
                title: "Продвинутый анализ рынка",
                lessons: ["Технический анализ", "Фундаментальный анализ", "On-chain метрики"],
                color: "bg-purple-500"
              },
              {
                phase: "Блок 6-10", 
                title: "Стратегии инвестирования",
                lessons: ["Портфельные стратегии", "Управление рисками", "Психология инвестирования"],
                color: "bg-indigo-500"
              },
              {
                phase: "Блок 11-13",
                title: "DeFi и продвинутые инструменты",
                lessons: ["Протоколы кредитования", "Фарминг доходности", "Деривативы"],
                color: "bg-pink-500"
              },
              {
                phase: "Блок 14-16",
                title: "Персональное сопровождение",
                lessons: ["Индивидуальные консультации", "Разбор портфеля", "Персональные рекомендации"],
                color: "bg-rose-500"
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-start mb-8 group">
                <div className={`${phase.color} text-white rounded-full p-4 mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <Crown className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-6 group-hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-crypto-blue mb-2">
                      {phase.phase}: {phase.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {phase.lessons.map((lesson, lessonIndex) => (
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
        <section className="py-16 bg-gradient-to-r from-purple-50 to-white -mx-6 px-6 rounded-xl">
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
        <div className="bg-purple-50 border-l-4 border-purple-600 p-5 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="text-purple-600 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-purple-600">Важное предупреждение</h4>
              <p className="text-sm text-gray-700 mt-1">
                Криптоинвестирование сопряжено с высокими рисками. Инвестируйте только те средства, 
                потерю которых вы можете себе позволить.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default PremiumCoursePage;
