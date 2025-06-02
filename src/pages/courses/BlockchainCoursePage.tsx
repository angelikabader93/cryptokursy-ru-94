
import React from 'react';
import { Check, Users, Award, BookOpen, Clock, Zap, AlertCircle, Layers, Play, Star, Code, Globe, Database } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';
import SignupForm from '@/components/SignupForm';
import SEOHead from '@/components/SEOHead';
import CoursePageSchema from '@/components/CoursePageSchema';
import CourseBreadcrumbs from '@/components/CourseBreadcrumbs';
import BreadcrumbSchema from '@/components/BreadcrumbSchema';
import LeadCaptureModal from '@/components/LeadCaptureModal';

const BlockchainCoursePage = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [modalType, setModalType] = React.useState<'hero' | 'price'>('hero');

  const breadcrumbs = [
    { name: "Главная", href: "/" },
    { name: "Курсы", href: "/#courses" },
    { name: "Блокчейн и криптовалюты" }
  ];

  const breadcrumbsForSchema = [
    { name: "Главная", url: "https://cryptokursy.ru/" },
    { name: "Курсы", url: "https://cryptokursy.ru/#courses" },
    { name: "Блокчейн и криптовалюты", url: "https://cryptokursy.ru/courses/blockchain-and-crypto" }
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
      title: "Основы блокчейн технологий",
      description: "Изучение фундаментальных принципов блокчейна и его технической архитектуры.",
      duration: "180 минут",
      color: "bg-cyan-500",
      lessons: [
        { title: "Что такое блокчейн", type: "video" as const, duration: "25 мин" },
        { title: "История развития блокчейна", type: "video" as const, duration: "20 мин" },
        { title: "Структура блока", type: "video" as const, duration: "30 мин" },
        { title: "Хеширование и криптография", type: "video" as const, duration: "35 мин" },
        { title: "Консенсусные алгоритмы", type: "video" as const, duration: "40 мин" },
        { title: "Виды блокчейнов", type: "video" as const, duration: "20 мин" },
        { title: "Практическое задание", type: "test" as const },
        { title: "Безопасность блокчейна", type: "video" as const, duration: "10 мин" }
      ]
    },
    {
      title: "Криптовалюты и их экосистема",
      description: "Глубокое изучение криптовалют, их функционирования и места в современной экономике.",
      duration: "220 минут",
      color: "bg-teal-500",
      lessons: [
        { title: "Биткоин: первая криптовалюта", type: "video" as const, duration: "35 мин" },
        { title: "Эфириум и смарт-контракты", type: "video" as const, duration: "40 мин" },
        { title: "Альткоины и их особенности", type: "video" as const, duration: "30 мин" },
        { title: "Токены и токенизация", type: "video" as const, duration: "25 мин" },
        { title: "Майнинг и стейкинг", type: "video" as const, duration: "35 мин" },
        { title: "Кошельки и безопасность", type: "video" as const, duration: "30 мин" },
        { title: "Биржи и торговля", type: "video" as const, duration: "20 мин" },
        { title: "Тестирование знаний", type: "test" as const },
        { title: "Регулирование криптовалют", type: "video" as const, duration: "5 мин" }
      ]
    },
    {
      title: "Практическое применение и будущее",
      description: "Изучение реальных применений блокчейна и криптовалют в различных отраслях.",
      duration: "150 минут",
      color: "bg-blue-500",
      lessons: [
        { title: "DeFi - децентрализованные финансы", type: "video" as const, duration: "30 мин" },
        { title: "NFT и цифровая собственность", type: "video" as const, duration: "25 мин" },
        { title: "Блокчейн в бизнесе", type: "video" as const, duration: "25 мин" },
        { title: "Web3 и децентрализованный интернет", type: "video" as const, duration: "30 мин" },
        { title: "Перспективы и вызовы", type: "video" as const, duration: "20 мин" },
        { title: "Создание первого кошелька", type: "video" as const, duration: "15 мин" },
        { title: "Итоговый проект", type: "test" as const },
        { title: "Дальнейшее развитие", type: "video" as const, duration: "5 мин" }
      ]
    }
  ];

  const testimonials = [
    {
      name: "Дмитрий С.",
      position: "IT-специалист",
      content: "Отличный курс для понимания блокчейна! Всё объяснено простым языком, теперь чувствую себя увереннее в этой области.",
      rating: 5
    },
    {
      name: "Анна К.",
      position: "Инвестор",
      content: "Курс помог мне разобраться в криптовалютах и принимать более осознанные инвестиционные решения.",
      rating: 5
    },
    {
      name: "Михаил Р.",
      position: "Предприниматель",
      content: "Благодаря курсу понял, как можно использовать блокчейн в своём бизнесе. Очень практично!",
      rating: 4
    }
  ];

  const faqItems = [
    {
      question: "Подходит ли курс для новичков?",
      answer: "Да, курс специально разработан для людей без технического опыта. Мы объясняем все понятия простым языком."
    },
    {
      question: "Нужно ли знание программирования?",
      answer: "Нет, курс не требует навыков программирования. Мы фокусируемся на понимании концепций и практическом применении."
    },
    {
      question: "Получу ли я сертификат?",
      answer: "Да, после успешного завершения курса вы получите сертификат о прохождении."
    },
    {
      question: "Как долго доступен курс?",
      answer: "Доступ к курсу предоставляется на 6 месяцев с момента покупки с возможностью продления."
    }
  ];

  return (
    <div className="min-h-screen">
      <SEOHead
        title="Блокчейн и криптовалюты - Полный курс для начинающих"
        description="Изучите основы блокчейн технологий и криптовалют с нуля. Практический курс для начинающих с сертификацией. ✅ Простым языком ✅ Без технических знаний ✅ 9+ часов видео"
        canonical="https://cryptokursy.ru/courses/blockchain-and-crypto"
        ogImage="https://cryptokursy.ru/lovable-uploads/1dbf4abc-bae2-4700-990c-ccd769aa7dee.png"
        articleTags={["блокчейн", "криптовалюты", "биткоин", "эфириум", "обучение", "курс для начинающих"]}
        author="КриптоКурсы"
        publishedTime="2024-01-15T00:00:00Z"
        modifiedTime={new Date().toISOString()}
      />
      
      <BreadcrumbSchema items={breadcrumbsForSchema} />
      
      <CoursePageSchema
        courseName="Блокчейн и криптовалюты"
        description="Полный курс по основам блокчейн технологий и криптовалют для начинающих"
        price="12900"
        originalPrice="19900"
        currency="RUB"
        duration="PT6W"
        level="Начинающий"
        instructor="Команда КриптоКурсы"
        rating="4.8"
        reviewCount="156"
        modules={modules}
        courseCode="BLOCKCHAIN-CRYPTO-101"
        teaches={[
          "Основы блокчейн технологий",
          "Принципы работы криптовалют",
          "Безопасность в криптомире",
          "Практическое применение блокчейна",
          "Инвестирование в криптовалюты",
          "DeFi и Web3 технологии"
        ]}
        url="https://cryptokursy.ru/courses/blockchain-and-crypto"
      />

      <Header />
      
      {/* Full-width Hero Section */}
      <section className="relative bg-gradient-to-r from-cyan-600 to-cyan-800 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2032')] bg-cover bg-center opacity-20"></div>
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 relative z-10 mb-8">
          <CourseBreadcrumbs breadcrumbs={breadcrumbs} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/3 mb-12 lg:mb-0 lg:pr-12">
              <div className="inline-flex items-center bg-cyan-100/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Layers className="w-5 h-5 mr-2 text-cyan-200" />
                <span className="font-semibold text-cyan-200">КУРС ДЛЯ НАЧИНАЮЩИХ</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                БЛОКЧЕЙН И<br />
                <span className="bg-gradient-to-r from-cyan-200 to-white bg-clip-text text-transparent">
                  КРИПТОВАЛЮТЫ
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 font-medium text-cyan-100">
                Изучите революционные технологии будущего!
                <br />
                <span className="text-cyan-200">От основ блокчейна до практического применения</span>
              </p>
              
              <Button 
                size="lg"
                className="bg-white text-cyan-600 hover:bg-cyan-50 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all mb-12"
                onClick={handleHeroButtonClick}
              >
                <Play className="w-6 h-6 mr-3" />
                НАЧАТЬ ОБУЧЕНИЕ
              </Button>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">25+</div>
                  <div className="text-sm text-cyan-200">Видео уроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">500+</div>
                  <div className="text-sm text-cyan-200">Студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">4.8★</div>
                  <div className="text-sm text-cyan-200">Рейтинг курса</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">9+</div>
                  <div className="text-sm text-cyan-200">Часов контента</div>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="w-full lg:w-1/3">
              <Card className="shadow-2xl border-2 border-cyan-200">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      ДЛЯ НАЧИНАЮЩИХ
                    </div>
                    <div className="text-4xl font-bold text-cyan-600 mb-2">
                      12 900 ₽ <span className="text-lg text-gray-500 line-through">19 900 ₽</span>
                    </div>
                    <div className="text-orange-500 font-semibold">35% скидка</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">(156 отзывов)</span>
                    </div>
                  </div>
                  
                  <div className="bg-cyan-50 rounded-lg p-6 mb-6">
                    <p className="text-center text-cyan-700 font-medium">
                      Специальная цена действует ограниченное время!
                    </p>
                    <div className="grid grid-cols-4 gap-2 mt-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-cyan-600">3</div>
                        <div className="text-xs text-gray-600">ДНЕЙ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-600">12</div>
                        <div className="text-xs text-gray-600">ЧАСОВ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-600">45</div>
                        <div className="text-xs text-gray-600">МИНУТ</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-600">30</div>
                        <div className="text-xs text-gray-600">СЕКУНД</div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Что включено</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">9+ часов видео контента</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">25+ практических уроков</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Доступ на 6 месяцев</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Сертификат о завершении</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Поддержка экспертов</span>
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-cyan-600 hover:bg-cyan-700 text-white font-bold py-3 text-lg"
                    onClick={handlePriceButtonClick}
                  >
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
        <section className="bg-gradient-to-r from-cyan-50 to-white py-16 -mx-4 px-4 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Что вы изучите в курсе?
            </h2>
            <p className="text-xl text-gray-600">
              Полное погружение в мир блокчейна и криптовалют
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Основы блокчейна",
                description: "Понимание принципов работы распределённых реестров и криптографии"
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Криптовалюты",
                description: "Изучение Bitcoin, Ethereum и других популярных криптовалют"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Практическое применение",
                description: "Реальные случаи использования блокчейна в различных отраслях"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "DeFi и Web3",
                description: "Децентрализованные финансы и новое поколение интернета"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Безопасность",
                description: "Защита криптоактивов и лучшие практики безопасности"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Инвестирование",
                description: "Стратегии и подходы к инвестированию в криптовалюты"
              }
            ].map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all transform hover:scale-105 border-2 border-cyan-100">
                <CardContent className="p-6 text-center">
                  <div className="bg-cyan-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-cyan-600">
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
              Программа курса
            </h2>
            <p className="text-xl text-gray-600">
              Структурированное обучение от основ до продвинутых концепций
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                module: "Модуль 1",
                title: "Основы блокчейн технологий",
                lessons: ["Что такое блокчейн", "Криптография", "Консенсус"],
                color: "bg-cyan-500"
              },
              {
                module: "Модуль 2", 
                title: "Криптовалюты и экосистема",
                lessons: ["Bitcoin и Ethereum", "Альткоины", "Майнинг и стейкинг"],
                color: "bg-teal-500"
              },
              {
                module: "Модуль 3",
                title: "Практическое применение",
                lessons: ["DeFi", "NFT", "Web3 и будущее"],
                color: "bg-blue-500"
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
        <CourseTestimonials testimonials={testimonials} />

        {/* Interactive Course Modules */}
        <CourseModules modules={modules} />

        {/* Course Instructor */}
        <CourseInstructor instructorId="team" />

        {/* Signup Form */}
        <section id="signup-form-course" className="bg-gradient-to-r from-cyan-50 to-blue-50 py-16 -mx-4 px-4 rounded-xl">
          <div className="max-w-md mx-auto">
            <SignupForm 
              formType="course" 
              courseTitle="Блокчейн и криптовалюты"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <CourseFAQ faqItems={faqItems} />

        {/* Warning Box */}
        <div className="bg-cyan-50 border-l-4 border-cyan-600 p-5 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="text-cyan-600 mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-cyan-600">Важно знать</h4>
              <p className="text-sm text-gray-700 mt-1">
                Курс разработан для начинающих и не требует предварительных знаний в области 
                программирования или финансов. Всё объясняется простым и понятным языком.
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

export default BlockchainCoursePage;
