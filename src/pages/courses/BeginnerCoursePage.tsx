import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check, Users, Award, BookOpen, Clock, Zap, AlertCircle } from 'lucide-react';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';

const BeginnerCoursePage = () => {
  // Course modules data
  const modules = [
    {
      title: "Введение в мир криптовалют",
      description: "История возникновения, основные принципы работы, преимущества и недостатки.",
      duration: "45 минут",
      color: "bg-green-500",
      lessons: [
        { title: "Что такое криптовалюта?", type: "video" as const, duration: "12 мин" },
        { title: "История создания Bitcoin", type: "video" as const, duration: "15 мин" },
        { title: "Основные преимущества и недостатки", type: "video" as const, duration: "18 мин" },
        { title: "Проверка знаний", type: "test" as const }
      ]
    },
    {
      title: "Технология блокчейн для начинающих",
      description: "Что такое блокчейн, как он работает и почему это безопасно.",
      duration: "60 минут",
      color: "bg-blue-500",
      lessons: [
        { title: "Основы технологии блокчейн", type: "video" as const, duration: "18 мин" },
        { title: "Как работает блокчейн", type: "video" as const, duration: "15 мин" },
        { title: "Безопасность блокчейна", type: "video" as const, duration: "12 мин" },
        { title: "Майнинг и валидация", type: "video" as const, duration: "15 мин" },
        { title: "Тест по блокчейну", type: "test" as const }
      ]
    },
    {
      title: "Криптокошельки и безопасность",
      description: "Виды кошельков, создание, резервное копирование и лучшие практики безопасности.",
      duration: "90 минут",
      color: "bg-purple-500",
      lessons: [
        { title: "Обзор типов криптокошельков", type: "video" as const, duration: "15 мин" },
        { title: "Создание и настройка кошелька", type: "video" as const, duration: "20 мин" },
        { title: "Резервное копирование", type: "video" as const, duration: "15 мин" },
        { title: "Безопасное хранение ключей", type: "video" as const, duration: "20 мин" },
        { title: "Защита от мошенничества", type: "video" as const, duration: "20 мин" },
        { title: "Практическое задание", type: "test" as const }
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Анна К.",
      position: "Предприниматель",
      content: "Этот курс превзошел все мои ожидания. Информация подана очень доступно, даже для полного новичка как я. Теперь я уверенно разбираюсь в основах криптовалют!",
      rating: 5
    },
    {
      name: "Михаил С.",
      position: "Программист",
      content: "Очень хороший вводный курс. Отличный баланс между теорией и практикой. Особенно понравился раздел по безопасности и хранению криптовалют.",
      rating: 4
    },
    {
      name: "Елена В.",
      position: "Финансовый аналитик",
      content: "Курс дал мне фундаментальное понимание блокчейна и криптовалют. Информация структурирована и легко усваивается. Рекомендую!",
      rating: 5
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "Нужны ли начальные знания для прохождения курса?",
      answer: "Нет, курс разработан специально для новичков и не требует никаких предварительных знаний в области технологий или финансов."
    },
    {
      question: "Как долго у меня будет доступ к материалам курса?",
      answer: "Доступ к материалам курса предоставляется бессрочно. Вы сможете возвращаться к ним в любое время."
    },
    {
      question: "Будут ли практические задания?",
      answer: "Да, курс включает в себя практические задания, которые помогут закрепить теоретические знания на практике."
    },
    {
      question: "Получу ли я сертификат по окончании курса?",
      answer: "Да, после успешного прохождения всех модулей и выполнения финального теста вы получите электронный сертификат о прохождении курса."
    },
    {
      question: "Могу ли я задавать вопросы преподавателю?",
      answer: "Да, в рамках курса предусмотрена возможность задавать вопросы преподавателю через специальную форму обратной связи."
    }
  ];

  return (
    <CourseLayout 
      courseTitle="Криптовалюта для чайников" 
      courseImage="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069"
      courseSlug="crypto-for-beginners"
      level="Новичок"
      price="Бесплатно"
      popular={true}
    >
      <div className="space-y-12 bg-white p-6 rounded-lg shadow-md">
        {/* Introduction Section with Better Typography */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-crypto-blue flex items-center gap-2">
            <BookOpen className="inline-block text-crypto-purple" size={24} /> 
            О чем этот курс?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Курс <strong className="text-gradient bg-gradient-to-r from-crypto-purple to-crypto-lightPurple">"Криптовалюта для чайников"</strong> разработан специально для тех, кто только начинает свой путь в мир цифровых валют. 
            Независимо от вашего опыта и технических знаний, этот курс поможет вам получить базовое понимание блокчейна 
            и криптовалют в понятной и доступной форме.
          </p>
          
          {/* Highlighted Benefits Box */}
          <div className="bg-gradient-to-r from-crypto-light/80 to-crypto-light/40 mt-6 p-6 rounded-lg border-l-4 border-crypto-purple shadow-sm">
            <div className="font-medium text-crypto-blue mb-2 text-lg">Почему стоит пройти этот курс?</div>
            <p className="text-gray-700">
              По окончании курса вы будете уверенно ориентироваться в мире криптовалют, 
              понимать основные принципы работы блокчейна и сможете безопасно совершать свои первые операции 
              с цифровыми активами.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-green-500" />
                </div>
                <span className="text-sm text-gray-700">18 видео-уроков</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-green-500" />
                </div>
                <span className="text-sm text-gray-700">8 практических заданий</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-green-500" />
                </div>
                <span className="text-sm text-gray-700">5 часов контента</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-green-500" />
                </div>
                <span className="text-sm text-gray-700">Сертификат о прохождении</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* What You'll Learn Section with Visual Improvements */}
        <div className="bg-gradient-to-r from-crypto-light to-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Award className="inline-block text-crypto-purple" size={24} />
            Что вы изучите:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span className="text-gray-700">Основы технологии блокчейн и принципы ее работы</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span className="text-gray-700">Что такое криптовалюты и чем они отличаются от традиционных денег</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span className="text-gray-700">Как создать и безопасно использовать криптокошелек</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span className="text-gray-700">Как покупать, продавать и хранить криптовалюты без риска</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span className="text-gray-700">Основные термины и понятия в мире криптовалют</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span className="text-gray-700">Как избежать мошенников и распознать опасные схемы</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Course Modules Timeline */}
        <CourseModules modules={modules} />
        
        {/* Who This Course Is For */}
        <div className="bg-green-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-2">
            <Users className="inline-block text-green-600" size={24} />
            Для кого этот курс?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-green-800 text-lg">Для новичков</h4>
                  <p className="text-gray-600">Для тех, кто хочет получить базовые знания о криптовалютах</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-green-800 text-lg">Для интересующихся</h4>
                  <p className="text-gray-600">Для тех, кто интересуется новыми финансовыми технологиями</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-green-800 text-lg">Для осторожных</h4>
                  <p className="text-gray-600">Для людей, желающих безопасно начать работу с криптовалютами</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-green-800 text-lg">Для всех</h4>
                  <p className="text-gray-600">Для тех, кто хочет понять принципы работы блокчейна без технических сложностей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Testimonials Section */}
        <CourseTestimonials testimonials={testimonials} />
        
        {/* Course Instructor */}
        <CourseInstructor instructorId="efimov" />
        
        {/* Course Advantages Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Zap className="inline-block text-crypto-purple" size={24} />
            Преимущества нашего курса:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">1</div>
                Простой язык
              </h3>
              <p className="text-gray-700">Объясняем сложные концепции понятными словами, без лишней технической терминологии</p>
            </div>
            
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">2</div>
                Практические задания
              </h3>
              <p className="text-gray-700">Закрепляете полученные знания через практику с пошаговыми инструкциями</p>
            </div>
            
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">3</div>
                Доступ навсегда
              </h3>
              <p className="text-gray-700">Все материалы останутся с вами бессрочно, вы сможете освежить знания в любой момент</p>
            </div>
            
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">4</div>
                Регулярные обновления
              </h3>
              <p className="text-gray-700">Курс постоянно обновляется с учетом последних изменений в отрасли</p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <CourseFAQ faqItems={faqItems} />
        
        {/* Warning Box */}
        <div className="bg-orange-50 border-l-4 border-crypto-orange p-5 rounded-r-lg">
          <div className="flex items-start">
            <AlertCircle className="text-crypto-orange mr-3 flex-shrink-0" />
            <div>
              <h4 className="font-semibold text-crypto-orange">Важно помнить</h4>
              <p className="text-sm text-gray-700 mt-1">
                Криптовалюты — это волатильный актив, цена которого может как расти, так и падать. 
                Этот курс предоставляет образовательную информацию, а не инвестиционные рекомендации. 
                Всегда инвестируйте только те средства, потерю которых вы можете себе позволить.
              </p>
            </div>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BeginnerCoursePage;
