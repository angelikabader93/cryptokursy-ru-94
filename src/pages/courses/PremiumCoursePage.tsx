
import React from 'react';
import { Check, Users, Award, BookOpen, Clock, Zap, AlertCircle, Gift, Play, Star, Crown, Rocket, Target, Trophy, Shield, Headphones } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';
import CourseBreadcrumbs from '@/components/CourseBreadcrumbs';
import LeadCaptureModal from '@/components/LeadCaptureModal';

const PremiumCoursePage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState<'hero' | 'price'>('hero');

  const breadcrumbs = [
    { name: "Главная", href: "/" },
    { name: "Курсы", href: "/#courses" },
    { name: "Премиальная криптошкола" }
  ];

  const handleHeroButtonClick = () => {
    setModalType('hero');
    setModalOpen(true);
  };

  const handlePriceButtonClick = () => {
    setModalType('price');
    setModalOpen(true);
  };

  // Course modules data
  const modules = [
    {
      title: "Продвинутый анализ рынка",
      description: "Профессиональные методы анализа криптовалютного рынка и прогнозирования.",
      duration: "180 минут",
      color: "bg-purple-500",
      lessons: [
        { title: "Фундаментальный анализ", type: "video" as const, duration: "30 мин" },
        { title: "Технический анализ", type: "video" as const, duration: "35 мин" },
        { title: "Ончейн аналитика", type: "video" as const, duration: "40 мин" },
        { title: "Макроэкономические факторы", type: "video" as const, duration: "45 мин" },
        { title: "Практические кейсы", type: "video" as const, duration: "30 мин" },
        { title: "Тест по анализу", type: "test" as const }
      ]
    },
    {
      title: "Управление портфелем",
      description: "Стратегии построения и управления криптовалютным портфелем.",
      duration: "150 минут",
      color: "bg-gold-500",
      lessons: [
        { title: "Диверсификация портфеля", type: "video" as const, duration: "25 мин" },
        { title: "Ребалансировка", type: "video" as const, duration: "30 мин" },
        { title: "Управление рисками", type: "video" as const, duration: "35 мин" },
        { title: "Психология инвестирования", type: "video" as const, duration: "30 мин" },
        { title: "Налоговое планирование", type: "video" as const, duration: "30 мин" },
        { title: "Практический тест", type: "test" as const }
      ]
    },
    {
      title: "Продвинутые стратегии",
      description: "Эксклюзивные торговые стратегии и методы заработка в крипте.",
      duration: "200 минут",
      color: "bg-indigo-500",
      lessons: [
        { title: "DeFi фарминг", type: "video" as const, duration: "35 мин" },
        { title: "Арбитражные стратегии", type: "video" as const, duration: "40 мин" },
        { title: "Стейкинг и валидирование", type: "video" as const, duration: "30 мин" },
        { title: "NFT инвестиции", type: "video" as const, duration: "35 мин" },
        { title: "Институциональные стратегии", type: "video" as const, duration: "40 мин" },
        { title: "Итоговый экзамен", type: "test" as const }
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Александр К.",
      position: "Криптоинвестор",
      content: "Премиальная программа превзошла все ожидания. Индивидуальное сопровождение и эксклюзивные материалы стоят каждого рубля.",
      rating: 5
    },
    {
      name: "Мария Д.",
      position: "Финансовый консультант",
      content: "Благодаря курсу смогла профессионально консультировать клиентов по криптоинвестициям. Очень глубокие знания.",
      rating: 5
    },
    {
      name: "Игорь В.",
      position: "Трейдер",
      content: "Закрытые сигналы и VIP поддержка помогли значительно улучшить результаты торговли. Рекомендую!",
      rating: 5
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "Что включает индивидуальное сопровождение?",
      answer: "Персональный ментор, еженедельные созвоны, анализ вашего портфеля и индивидуальные рекомендации."
    },
    {
      question: "Как работают закрытые сигналы?",
      answer: "Вы получаете эксклюзивные торговые сигналы в закрытом телеграм-канале с подробным анализом."
    },
    {
      question: "Есть ли гарантия результата?",
      answer: "Мы гарантируем качественное обучение, но результат зависит от ваших усилий и следования рекомендациям."
    },
    {
      question: "Можно ли оплачивать частями?",
      answer: "Да, доступна рассрочка на 3 месяца без переплат для премиальной программы."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Full-width Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 relative z-10 mb-8">
          <CourseBreadcrumbs breadcrumbs={breadcrumbs} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/3 mb-12 lg:mb-0 lg:pr-12">
              <div className="inline-flex items-center bg-purple-100/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Crown className="w-5 h-5 mr-2 text-purple-200" />
                <span className="font-semibold text-purple-200">ПРЕМИАЛЬНАЯ ПРОГРАММА</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                ПРЕМИАЛЬНАЯ<br />
                <span className="bg-gradient-to-r from-purple-200 to-white bg-clip-text text-transparent">
                  КРИПТОШКОЛА
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 font-medium text-purple-100">
                Эксклюзивная программа для серьезных инвесторов с индивидуальным сопровождением
                <br />
                <span className="text-purple-200">Станьте профессионалом криптовалютного рынка</span>
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-purple-600 hover:bg-purple-50 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all mb-12"
                onClick={handleHeroButtonClick}
              >
                <Play className="w-6 h-6 mr-3" />
                ПРИСОЕДИНИТЬСЯ К VIP
              </Button>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">30+</div>
                  <div className="text-sm text-purple-200">Видео уроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">200+</div>
                  <div className="text-sm text-purple-200">VIP студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">5.0★</div>
                  <div className="text-sm text-purple-200">Рейтинг курса</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">3</div>
                  <div className="text-sm text-purple-200">Месяца программы</div>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="w-full lg:w-1/3">
              <Card className="shadow-2xl border-2 border-purple-200 bg-gradient-to-b from-white to-purple-50">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      ПРЕМИАЛЬНАЯ ПРОГРАММА
                    </div>
                    <div className="text-4xl font-bold text-purple-600 mb-2">
                      50 000 ₽
                    </div>
                    <div className="text-gray-500 line-through">75 000 ₽</div>
                    <div className="text-green-600 font-semibold">Скидка 33%</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">(200+ отзывов)</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">VIP включает</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Crown className="w-5 h-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">Индивидуальный ментор</span>
                    </div>
                    <div className="flex items-center">
                      <Target className="w-5 h-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">Закрытые торговые сигналы</span>
                    </div>
                    <div className="flex items-center">
                      <Headphones className="w-5 h-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">VIP-поддержка 24/7</span>
                    </div>
                    <div className="flex items-center">
                      <Trophy className="w-5 h-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">Эксклюзивные материалы</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-purple-500 mr-3" />
                      <span className="text-gray-700">Пожизненный доступ</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 text-lg"
                    onClick={handlePriceButtonClick}
                  >
                    Присоединиться к VIP
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
              Что входит в VIP программу?
            </h2>
            <p className="text-xl text-gray-600">
              Эксклюзивные возможности для профессионального роста в крипте
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Персональный ментор",
                description: "Индивидуальное сопровождение опытного криптоинвестора"
              },
              {
                icon: <Target className="w-8 h-8" />,
                title: "Закрытые сигналы",
                description: "Эксклюзивные торговые сигналы в приватном канале"
              },
              {
                icon: <Rocket className="w-8 h-8" />,
                title: "Продвинутые стратегии",
                description: "Профессиональные методы заработка в крипте"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "VIP поддержка",
                description: "Приоритетная техническая поддержка 24/7"
              },
              {
                icon: <Trophy className="w-8 h-8" />,
                title: "Эксклюзивные материалы",
                description: "Закрытые вебинары и уникальный контент"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "VIP сообщество",
                description: "Доступ к закрытому сообществу успешных инвесторов"
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
              Глубокое изучение профессиональных методов работы с криптовалютами
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                module: "Модуль 1",
                title: "Продвинутый анализ рынка",
                topics: ["Фундаментальный анализ", "Технический анализ", "Ончейн аналитика"],
                color: "bg-purple-500"
              },
              {
                module: "Модуль 2", 
                title: "Управление портфелем",
                topics: ["Диверсификация", "Ребалансировка", "Управление рисками"],
                color: "bg-indigo-500"
              },
              {
                module: "Модуль 3",
                title: "Продвинутые стратегии",
                topics: ["DeFi фарминг", "Арбитраж", "Стейкинг"],
                color: "bg-blue-500"
              },
              {
                module: "Модуль 4",
                title: "Психология инвестирования",
                topics: ["Эмоциональный контроль", "Дисциплина", "Планирование"],
                color: "bg-cyan-500"
              },
              {
                module: "Модуль 5",
                title: "Институциональные методы",
                topics: ["Профессиональный подход", "Масштабирование", "Автоматизация"],
                color: "bg-teal-500"
              },
              {
                module: "Модуль 6",
                title: "Налоговое планирование",
                topics: ["Налогообложение крипты", "Оптимизация", "Отчетность"],
                color: "bg-green-500"
              }
            ].map((module, index) => (
              <div key={index} className="flex items-start mb-8 group">
                <div className={`${module.color} text-white rounded-full p-4 mr-6 flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform`}>
                  <BookOpen className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="bg-gray-50 rounded-lg p-6 group-hover:shadow-md transition-all">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">
                      {module.module}: {module.title}
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center text-gray-600">
                          <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          <span className="text-sm">{topic}</span>
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
        <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="text-purple-500 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-purple-600">Важная информация</h4>
              <p className="text-sm text-gray-700 mt-1">
                Премиальная программа предназначена для серьезных инвесторов. Требуется активное участие 
                и следование рекомендациям ментора для достижения максимальных результатов.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />

      {/* Lead Capture Modal */}
      <LeadCaptureModal 
        open={modalOpen} 
        onOpenChange={setModalOpen}
      />
    </div>
  );
};

export default PremiumCoursePage;
