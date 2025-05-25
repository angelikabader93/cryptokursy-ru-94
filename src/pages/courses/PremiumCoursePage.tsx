
import React from 'react';
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
    <div className="min-h-screen">
      {/* Full-width Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-purple-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032')] bg-cover bg-center opacity-20"></div>
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 relative z-10 mb-8">
          <nav className="text-purple-200 text-sm">
            <span>Главная</span> › <span>Курсы</span> › <span className="text-white">Премиальная криптошкола</span>
          </nav>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/3 mb-12 lg:mb-0 lg:pr-12">
              <div className="inline-flex items-center bg-purple-100/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Crown className="w-5 h-5 mr-2 text-purple-200" />
                <span className="font-semibold text-purple-200">ПРЕМИАЛЬНЫЙ КУРС</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                ПРЕМИАЛЬНАЯ<br />
                <span className="bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
                  КРИПТОШКОЛА
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 font-medium text-purple-100">
                Профессиональное обучение с персональным сопровождением эксперта!
                <br />
                <span className="text-purple-200">Для серьезных инвесторов и трейдеров</span>
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all mb-12"
                onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Play className="w-6 h-6 mr-3" />
                ЗАПИСАТЬСЯ НА КУРС
              </Button>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">40+</div>
                  <div className="text-sm text-purple-200">Видео уроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-purple-200">Студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5.0★</div>
                  <div className="text-sm text-purple-200">Рейтинг курса</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">16</div>
                  <div className="text-sm text-purple-200">Недель обучения</div>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="w-full lg:w-1/3">
              <Card className="shadow-2xl border-2 border-purple-200">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      ПРЕМИУМ
                    </div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      50 000 ₽ <span className="text-lg text-gray-500 line-through">75 000 ₽</span>
                    </div>
                    <div className="text-orange-500 font-semibold">33% скидка</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">(47 отзывов)</span>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-6 mb-6">
                    <p className="text-center text-purple-700 font-medium">
                      Предложение закончится через:
                    </p>
                    <div className="grid grid-cols-4 gap-2 mt-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-purple-600">2</div>
                        <div className="text-xs text-gray-600">ДНЕЙ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">23</div>
                        <div className="text-xs text-gray-600">ЧАСОВ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">59</div>
                        <div className="text-xs text-gray-600">МИНУТ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-600">55</div>
                        <div className="text-xs text-gray-600">СЕКУНД</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Информация о курсе</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Пожизненный доступ ко всем материалам</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">40+ видео уроков</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Персональное сопровождение</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Закрытое сообщество</span>
                    </div>
                  </div>
                  
                  <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 text-lg">
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
        <section className="bg-gradient-to-r from-purple-50 to-white py-16 -mx-4 px-4 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
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
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
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
        <CourseTestimonials testimonials={testimonials} />

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
    </div>
  );
};

export default PremiumCoursePage;
