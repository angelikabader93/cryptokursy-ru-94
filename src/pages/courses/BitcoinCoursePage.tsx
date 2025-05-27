import React, { useState } from 'react';
import { Check, Users, Award, BookOpen, Clock, Zap, AlertCircle, Gift, Play, Star, Bitcoin, TrendingUp, Shield, Coins } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';
import CourseBreadcrumbs from '@/components/CourseBreadcrumbs';
import SEOHead from '@/components/SEOHead';
import CoursePageSchema from '@/components/CoursePageSchema';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { sendLeadToWebhook } from '@/utils/webhookService';
import { validatePhoneNumber } from '@/utils/phoneValidation';

const BitcoinCoursePage = () => {
  const [showStartLearningModal, setShowStartLearningModal] = useState(false);
  const [showBuyCourseModal, setShowBuyCourseModal] = useState(false);

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
      title: "Альткоины и их особенности",
      description: "Ethereum, Litecoin, XRP и другие популярные криптовалюты.",
      duration: "150 минут",
      color: "bg-purple-500",
      lessons: [
        { title: "Что такое альткоины", type: "video" as const, duration: "20 мин" },
        { title: "Ethereum и смарт-контракты", type: "video" as const, duration: "30 мин" },
        { title: "Litecoin и его особенности", type: "video" as const, duration: "25 мин" },
        { title: "Ripple (XRP) и банковские решения", type: "video" as const, duration: "25 мин" },
        { title: "DeFi токены", type: "video" as const, duration: "30 мин" },
        { title: "Сравнительный анализ", type: "test" as const }
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Максим В.",
      position: "Инвестор",
      content: "Отличный курс для понимания различий между Bitcoin и альткоинами. Теперь я знаю, во что инвестировать.",
      rating: 5
    },
    {
      name: "Елена С.",
      position: "Трейдер",
      content: "Курс помог разобраться в технических особенностях разных криптовалют. Очень полезно для торговли.",
      rating: 5
    },
    {
      name: "Дмитрий Р.",
      position: "IT-специалист",
      content: "Глубокое понимание архитектуры Bitcoin и альткоинов. Рекомендую всем техническим специалистам.",
      rating: 4
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "В чем разница между Bitcoin и альткоинами?",
      answer: "Bitcoin - первая и самая известная криптовалюта, альткоины - это альтернативные криптовалюты с различными особенностями и применениями."
    },
    {
      question: "Какие альткоины рассматриваются в курсе?",
      answer: "Мы изучаем Ethereum, Litecoin, XRP, и другие популярные альткоины с их уникальными особенностями."
    },
    {
      question: "Нужны ли технические знания для курса?",
      answer: "Базовые знания желательны, но курс построен так, что технические аспекты объясняются доступно."
    },
    {
      question: "Можно ли использовать знания курса для инвестиций?",
      answer: "Курс дает техническое понимание, но инвестиционные решения всегда принимайте на свой риск."
    }
  ];

  // Lead Capture Modal Component
  const LeadCaptureModal = ({ 
    open, 
    onOpenChange, 
    title, 
    description, 
    buttonText 
  }: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: string;
    buttonText: string;
  }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    const validateForm = (): boolean => {
      let isValid = true;
      
      setNameError('');
      setPhoneError('');
      
      if (!name || name.trim().length === 0) {
        setNameError('Пожалуйста, введите ваше имя');
        isValid = false;
      }
      
      if (!phone || phone.trim().length === 0) {
        setPhoneError('Пожалуйста, введите номер телефона');
        isValid = false;
      } else {
        const phoneValidation = validatePhoneNumber(phone);
        if (!phoneValidation.isValid) {
          setPhoneError(phoneValidation.errorMessage || 'Некорректный номер телефона');
          isValid = false;
        }
      }
      
      return isValid;
    };

    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      
      if (!validateForm()) {
        return;
      }
      
      setIsLoading(true);
      
      try {
        const response = await sendLeadToWebhook({
          name,
          phone,
          source: title,
          coursePrice: '4990'
        });
        
        if (response.success) {
          toast({
            title: "Успешно!",
            description: "Мы отправили вам доступ к курсу",
          });
          
          setName('');
          setPhone('');
          setNameError('');
          setPhoneError('');
          onOpenChange(false);
        } else {
          throw new Error(response.error || 'Неизвестная ошибка при отправке данных');
        }
        
      } catch (error) {
        console.error("Ошибка при отправке формы:", error);
        toast({
          title: "Ошибка",
          description: error instanceof Error ? error.message : "Произошла ошибка при отправке данных. Пожалуйста, попробуйте позже.",
          variant: "destructive",
        });
      } finally {
        setIsLoading(false);
      }
    };

    const handleClose = () => {
      setName('');
      setPhone('');
      setNameError('');
      setPhoneError('');
      onOpenChange(false);
    };

    return (
      <Dialog open={open} onOpenChange={handleClose}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-2xl font-bold">{title}</DialogTitle>
            <DialogDescription className="text-center">
              {description}
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    if (nameError) setNameError('');
                  }}
                  required
                  className={`w-full p-3 bg-gray-50 ${nameError ? 'border-red-500' : ''}`}
                />
                {nameError && (
                  <p className="text-red-500 text-sm mt-1">{nameError}</p>
                )}
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    if (phoneError) setPhoneError('');
                  }}
                  required
                  className={`w-full p-3 bg-gray-50 ${phoneError ? 'border-red-500' : ''}`}
                />
                {phoneError && (
                  <p className="text-red-500 text-sm mt-1">{phoneError}</p>
                )}
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 font-bold bg-crypto-lightPurple hover:bg-crypto-purple text-white"
                disabled={isLoading}
              >
                {isLoading ? 'Загрузка...' : buttonText}
              </Button>
              
              <p className="text-xs text-center text-gray-500">
                Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  return (
    <div className="min-h-screen">
      <SEOHead 
        title="Bitcoin и альткоины - Продвинутый курс"
        description="Изучите Bitcoin и популярные альткоины: от технических основ до практического применения. Станьте экспертом в мире криптовалют."
        canonical="https://cryptokursy.ru/courses/bitcoin-and-altcoins"
      />
      <CoursePageSchema 
        courseName="Bitcoin и альткоины"
        description="Изучите Bitcoin и популярные альткоины: от технических основ до практического применения"
        price="4990"
        currency="RUB"
        instructor="Максим Зубков"
        duration="10 часов"
        level="Продвинутый"
        rating="4.8"
        reviewCount="3000"
      />
      <Header />
      
      {/* Full-width Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-500 to-amber-600 text-white py-20 md:py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2070')] bg-cover bg-center opacity-20"></div>
        
        {/* Breadcrumb */}
        <div className="container mx-auto px-4 relative z-10 mb-8">
          <CourseBreadcrumbs courseName="Bitcoin и альткоины" courseUrl="/courses/bitcoin-and-altcoins" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="w-full lg:w-2/3 mb-12 lg:mb-0 lg:pr-12">
              <div className="inline-flex items-center bg-orange-100/20 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
                <Bitcoin className="w-5 h-5 mr-2 text-orange-200" />
                <span className="font-semibold text-orange-200">ПРОДВИНУТЫЙ КУРС</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                BITCOIN И<br />
                <span className="bg-gradient-to-r from-orange-200 to-white bg-clip-text text-transparent">
                  АЛЬТКОИНЫ
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl mb-8 font-medium text-orange-100">
                Изучите Bitcoin и популярные альткоины: от технических основ до практического применения
                <br />
                <span className="text-orange-200">Станьте экспертом в мире криптовалют</span>
              </p>
              
              <Button 
                size="lg"
                onClick={() => setShowStartLearningModal(true)}
                className="bg-white text-orange-600 hover:bg-orange-50 font-bold text-xl py-8 px-12 rounded-full shadow-2xl transform hover:scale-105 transition-all mb-12"
              >
                <Play className="w-6 h-6 mr-3" />
                НАЧАТЬ ИЗУЧЕНИЕ
              </Button>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">20+</div>
                  <div className="text-sm text-orange-200">Видео уроков</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">3000+</div>
                  <div className="text-sm text-orange-200">Студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">4.8★</div>
                  <div className="text-sm text-orange-200">Рейтинг курса</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-white">10</div>
                  <div className="text-sm text-orange-200">Часов контента</div>
                </div>
              </div>
            </div>
            
            {/* Pricing Card */}
            <div className="w-full lg:w-1/3">
              <Card className="shadow-2xl border-2 border-orange-200">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="inline-block bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-semibold mb-4">
                      ПРОДВИНУТЫЙ КУРС
                    </div>
                    <div className="text-4xl font-bold text-orange-600 mb-2">
                      4 990 ₽
                    </div>
                    <div className="text-gray-500 line-through">7 990 ₽</div>
                    <div className="text-green-600 font-semibold">Скидка 37%</div>
                    <div className="flex justify-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                      <span className="ml-2 text-sm text-gray-600">(3000+ отзывов)</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-4">Что включено</h3>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">20+ видео уроков</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Практические задания</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Анализ 10+ альткоинов</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Сертификат о прохождении</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-5 h-5 text-green-500 mr-3" />
                      <span className="text-gray-700">Пожизненный доступ</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={() => setShowBuyCourseModal(true)}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 text-lg"
                  >
                    Купить курс
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      <div className="container mx-auto px-4 py-16 space-y-16">
        <section className="bg-gradient-to-r from-orange-50 to-white py-16 -mx-4 px-4 rounded-xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Что вы изучите в курсе?
            </h2>
            <p className="text-xl text-gray-600">
              Глубокое понимание Bitcoin и альткоинов от технических основ до практического применения
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Bitcoin className="w-8 h-8" />,
                title: "Bitcoin изнутри",
                description: "Техническая архитектура, протокол, майнинг и экосистема Bitcoin"
              },
              {
                icon: <Coins className="w-8 h-8" />,
                title: "Популярные альткоины",
                description: "Ethereum, Litecoin, XRP, ADA и другие важные криптовалюты"
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Инвестиционный анализ",
                description: "Как оценивать перспективы разных криптовалют"
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Безопасность",
                description: "Защита активов и безопасное хранение криптовалют"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "DeFi и смарт-контракты",
                description: "Децентрализованные финансы и программируемые деньги"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Практические навыки",
                description: "Реальный опыт работы с кошельками и биржами"
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
              Программа курса
            </h2>
            <p className="text-xl text-gray-600">
              Структурированное изучение от Bitcoin к альткоинам
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            {[
              {
                module: "Модуль 1",
                title: "Основы Bitcoin",
                topics: ["История и философия", "Техническая архитектура", "Транзакции и блоки"],
                color: "bg-orange-500"
              },
              {
                module: "Модуль 2", 
                title: "Майнинг и консенсус",
                topics: ["Алгоритм Proof-of-Work", "Сложность сети", "Энергопотребление"],
                color: "bg-yellow-500"
              },
              {
                module: "Модуль 3",
                title: "Ethereum и смарт-контракты",
                topics: ["Архитектура Ethereum", "Смарт-контракты", "DeFi экосистема"],
                color: "bg-blue-500"
              },
              {
                module: "Модуль 4",
                title: "Популярные альткоины",
                topics: ["Litecoin", "XRP", "Cardano"],
                color: "bg-purple-500"
              },
              {
                module: "Модуль 5",
                title: "Инвестиционный анализ",
                topics: ["Фундаментальный анализ", "Технический анализ", "Управление рисками"],
                color: "bg-green-500"
              },
              {
                module: "Модуль 6",
                title: "Практические навыки",
                topics: ["Кошельки", "Биржи", "Безопасность"],
                color: "bg-red-500"
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
                Криптовалютные инвестиции сопряжены с высокими рисками. Данный курс носит образовательный характер 
                и не является инвестиционной рекомендацией.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Lead Capture Modals */}
      <LeadCaptureModal 
        open={showStartLearningModal} 
        onOpenChange={setShowStartLearningModal}
        title="Начните изучение Bitcoin и альткоинов!"
        description="Вы нажали кнопку 'НАЧАТЬ ИЗУЧЕНИЕ'. Оставьте свои контакты и мы предоставим вам доступ к курсу Bitcoin и альткоины"
        buttonText="Начать изучение"
      />
      
      <LeadCaptureModal 
        open={showBuyCourseModal} 
        onOpenChange={setShowBuyCourseModal}
        title="Покупка курса Bitcoin и альткоины!"
        description="Вы нажали кнопку 'Купить курс'. Оставьте свои контакты и мы отправим вам информацию о покупке курса за 4 990 ₽"
        buttonText="Купить курс"
      />
      
      <Footer />
    </div>
  );
};

export default BitcoinCoursePage;
