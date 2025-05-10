import React, { ReactNode, useState, useEffect, useRef } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card } from '@/components/ui/card';
import SignupForm from './SignupForm';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { CalendarCheck, GraduationCap, BookOpen, Users, Clock, Shield, Medal, Star, Check, Info } from 'lucide-react';
import FloatingCoursePriceBar from './FloatingCoursePriceBar';

interface CourseLayoutProps {
  courseTitle: string;
  courseImage: string;
  courseSlug: string;
  level: string;
  price: string;
  popular?: boolean;
  children: ReactNode;
}

const CourseLayout: React.FC<CourseLayoutProps> = ({ 
  courseTitle,
  courseImage,
  courseSlug,
  level,
  price,
  popular = false,
  children
}) => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 23, minutes: 59, seconds: 59 });
  const [isSticky, setIsSticky] = useState(false);
  const [showFloatingBar, setShowFloatingBar] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const mainContentRef = useRef<HTMLDivElement>(null);

  // Timer countdown effect
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime.seconds > 0) {
          return { ...prevTime, seconds: prevTime.seconds - 1 };
        } else if (prevTime.minutes > 0) {
          return { ...prevTime, minutes: prevTime.minutes - 1, seconds: 59 };
        } else if (prevTime.hours > 0) {
          return { ...prevTime, hours: prevTime.hours - 1, minutes: 59, seconds: 59 };
        } else if (prevTime.days > 0) {
          return { ...prevTime, days: prevTime.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          // Reset timer when it reaches 0
          return { days: 2, hours: 23, minutes: 59, seconds: 59 };
        }
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Enhanced sticky sidebar effect with better scroll detection
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 300);
      
      // Проверка для отображения плавающего сайдбара
      if (sidebarRef.current && mainContentRef.current) {
        const sidebarBottom = sidebarRef.current.getBoundingClientRect().bottom;
        const mainContentBottom = mainContentRef.current.getBoundingClientRect().bottom;
        
        // Показываем плавающий сайдбар, когда нижняя часть основного сайдбара выходит за пределы экрана
        // и пока не достигнут конец основного контента (чтобы не перекрывать форму регистрации)
        setShowFloatingBar(sidebarBottom < 0 && mainContentBottom > window.innerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to determine price display
  const getPriceDisplay = () => {
    if (price === "Бесплатно") {
      return { 
        price: "Бесплатно", 
        originalPrice: "", 
        discount: "",
        badgeColor: "bg-green-100 text-green-700",
        badgeText: "ДОСТУПНО"
      };
    } else if (price === "Платно") {
      return { 
        price: "15 000 ₽", 
        originalPrice: "20 000 ₽", 
        discount: "25% скидка",
        badgeColor: "bg-blue-100 text-blue-700",
        badgeText: "СТАНДАРТ"
      };
    } else {
      return { 
        price: "50 000 ₽", 
        originalPrice: "75 000 ₽", 
        discount: "33% скидка",
        badgeColor: "bg-purple-100 text-purple-700",
        badgeText: "ПРЕМИУМ"
      };
    }
  };

  const priceData = getPriceDisplay();

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Enhanced Gradient Background */}
        <div className="bg-gradient-to-br from-crypto-purple/95 via-crypto-purple to-crypto-lightPurple py-24 text-white relative overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-white/30 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-[40rem] h-[40rem] rounded-full bg-crypto-orange/30 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
            <div className="absolute top-1/2 left-1/3 w-72 h-72 rounded-full bg-pink-400/20 blur-2xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-6xl mx-auto">
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="hover:text-white/80 transition-colors">Главная</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/#courses" className="hover:text-white/80 transition-colors">Курсы</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{courseTitle}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              {/* Enhanced Title & Subtitle */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight font-heading">{courseTitle}</h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl">
                Полное руководство по освоению {price === "Бесплатно" ? "основ криптовалют" : price === "Платно" ? "блокчейн-технологий" : "криптоинвестирования"} от опытных практиков
              </p>
              
              {/* Time-limited Offer Banner */}
              {price !== "Бесплатно" && (
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-8 border border-white/20 max-w-3xl animate-pulse">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-lg">Предложение закончится через:</h3>
                      <p className="text-sm text-white/80">Успейте записаться по выгодной цене</p>
                    </div>
                    <div className="flex gap-2 sm:gap-3 text-center">
                      <div className="bg-white/15 rounded-lg p-2 sm:p-3 w-14 sm:w-16">
                        <div className="text-xl sm:text-2xl font-bold">{timeLeft.days}</div>
                        <div className="text-xs uppercase text-white/70">дней</div>
                      </div>
                      <div className="bg-white/15 rounded-lg p-2 sm:p-3 w-14 sm:w-16">
                        <div className="text-xl sm:text-2xl font-bold">{timeLeft.hours}</div>
                        <div className="text-xs uppercase text-white/70">часов</div>
                      </div>
                      <div className="bg-white/15 rounded-lg p-2 sm:p-3 w-14 sm:w-16">
                        <div className="text-xl sm:text-2xl font-bold">{timeLeft.minutes}</div>
                        <div className="text-xs uppercase text-white/70">минут</div>
                      </div>
                      <div className="bg-white/15 rounded-lg p-2 sm:p-3 w-14 sm:w-16">
                        <div className="text-xl sm:text-2xl font-bold">{timeLeft.seconds}</div>
                        <div className="text-xs uppercase text-white/70">секунд</div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Course Preview Section */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Course Content Area */}
                <div className="w-full md:w-2/3" ref={mainContentRef}>
                  <div className="bg-white rounded-xl overflow-hidden shadow-xl transform transition-transform hover:-translate-y-1 duration-300">
                    <div className="relative">
                      {popular && (
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-crypto-orange to-amber-500 text-white py-2 px-6 rounded-bl-xl font-bold z-10 shadow-md">
                          Популярный курс
                        </div>
                      )}
                      <div className="relative h-80 overflow-hidden">
                        <img 
                          src={courseImage} 
                          alt={courseTitle} 
                          className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.src = "https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=2032";
                          }} 
                        />
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30"></div>
                      </div>
                    </div>
                    
                    <div className="p-8">
                      {/* Featured Reviews Slider */}
                      <div className="mb-8 bg-gray-50 p-5 rounded-lg border-l-4 border-crypto-purple">
                        <div className="flex items-center gap-3">
                          <div className="flex items-center gap-0.5">
                            <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                            <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                            <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                            <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                            <Star className="text-yellow-300 w-4 h-4 fill-yellow-300" />
                          </div>
                          <span className="text-sm text-gray-500">(128 отзывов)</span>
                        </div>
                        <p className="italic text-gray-600 mt-2">
                          "Этот курс превзошел все мои ожидания. Материал представлен понятно даже для новичков, 
                          а практические задания помогли закрепить теорию. Рекомендую!"
                        </p>
                        <div className="flex items-center mt-3">
                          <div className="w-8 h-8 bg-gray-300 rounded-full mr-2"></div>
                          <span className="text-xs font-medium">Анна К., выпускница курса</span>
                        </div>
                      </div>
                      
                      {/* Course Content */}
                      {children}
                    </div>
                  </div>
                </div>
                
                {/* Course Info Sidebar with Enhanced Sticky Behavior */}
                <div className="w-full md:w-1/3" ref={sidebarRef}>
                  <div 
                    className={`transition-all duration-300 ${
                      isSticky ? 'sticky top-4' : ''
                    }`}
                  >
                    <Card className="p-6 border-0 shadow-xl rounded-xl bg-white">
                      {/* Price Section with Better Visual Design */}
                      <div className="mb-6 bg-gradient-to-r from-crypto-light to-white p-6 rounded-lg -mx-6 -mt-6 border-b">
                        <div className="flex flex-col items-center text-center">
                          <div className={`${priceData.badgeColor} text-xs font-semibold px-3 py-1 rounded-full mb-2`}>
                            {priceData.badgeText}
                          </div>
                          
                          <div className="flex items-center gap-3 mb-1">
                            <div className="text-3xl font-extrabold text-crypto-blue">{priceData.price}</div>
                            {priceData.originalPrice && (
                              <div className="text-lg text-gray-400 line-through">{priceData.originalPrice}</div>
                            )}
                          </div>
                          
                          {priceData.discount && (
                            <div className="text-sm font-semibold text-crypto-orange mb-2">{priceData.discount}</div>
                          )}
                          
                          {price !== "Бесплатно" && (
                            <div className="flex items-center gap-2 mb-2">
                              <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                              <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                              <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                              <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
                              <Star className="text-yellow-300 w-4 h-4 fill-yellow-300" />
                              <span className="text-xs text-gray-600">({price === "Платно" ? "128" : "42"} отзыва)</span>
                            </div>
                          )}
                          
                          <p className="text-sm text-gray-600">
                            {price === "Бесплатно" 
                              ? "Доступ к базовым материалам курса" 
                              : price === "Платно" 
                                ? "Полный доступ на 6 месяцев с поддержкой"
                                : "Персональное обучение с ментором и неограниченной поддержкой"}
                          </p>
                        </div>
                      </div>

                      <h3 className="text-2xl font-bold mb-6 text-crypto-blue border-b border-gray-100 pb-4">Информация о курсе</h3>
                      
                      {/* Course Stats with Enhanced Visual Design */}
                      <div className="space-y-5 mb-8">
                        <div className="flex items-center gap-3 group hover:bg-crypto-light/50 p-2 rounded-lg -mx-2 transition-colors">
                          <div className="bg-crypto-light p-2 rounded-full group-hover:bg-white transition-colors">
                            <GraduationCap className="text-crypto-purple" size={22} />
                          </div>
                          <span>Уровень: <strong className="text-crypto-blue">{level}</strong></span>
                        </div>
                        <div className="flex items-center gap-3 group hover:bg-crypto-light/50 p-2 rounded-lg -mx-2 transition-colors">
                          <div className="bg-crypto-light p-2 rounded-full group-hover:bg-white transition-colors">
                            <CalendarCheck className="text-crypto-purple" size={22} />
                          </div>
                          <span>Старт: <strong className="text-crypto-blue">В любое время</strong></span>
                        </div>
                        <div className="flex items-center gap-3 group hover:bg-crypto-light/50 p-2 rounded-lg -mx-2 transition-colors">
                          <div className="bg-crypto-light p-2 rounded-full group-hover:bg-white transition-colors">
                            <Clock className="text-crypto-purple" size={22} />
                          </div>
                          <span>Длительность: <strong className="text-crypto-blue">10 недель</strong></span>
                        </div>
                        <div className="flex items-center gap-3 group hover:bg-crypto-light/50 p-2 rounded-lg -mx-2 transition-colors">
                          <div className="bg-crypto-light p-2 rounded-full group-hover:bg-white transition-colors">
                            <BookOpen className="text-crypto-purple" size={22} />
                          </div>
                          <span>Формат: <strong className="text-crypto-blue">Онлайн</strong></span>
                        </div>
                        <div className="flex items-center gap-3 group hover:bg-crypto-light/50 p-2 rounded-lg -mx-2 transition-colors">
                          <div className="bg-crypto-light p-2 rounded-full group-hover:bg-white transition-colors">
                            <Users className="text-crypto-purple" size={22} />
                          </div>
                          <span>Поддержка: <strong className="text-crypto-blue">Да</strong></span>
                        </div>
                        <div className="flex items-center gap-3 group hover:bg-crypto-light/50 p-2 rounded-lg -mx-2 transition-colors">
                          <div className="bg-crypto-light p-2 rounded-full group-hover:bg-white transition-colors">
                            <Shield className="text-crypto-purple" size={22} />
                          </div>
                          <span>Сертификат: <strong className="text-crypto-blue">Включен</strong></span>
                        </div>
                      </div>
                      
                      {/* Enhanced Call-To-Action Button */}
                      <Button 
                        variant={price === "Бесплатно" ? "cryptoOrange" : "crypto"}
                        className="w-full text-lg py-7 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold"
                        onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
                      >
                        {price === "Бесплатно" ? "Начать бесплатно" : "Записаться на курс"}
                      </Button>

                      {/* Enrollment Stats */}
                      <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-xl font-bold text-crypto-purple">500+</div>
                          <div className="text-xs text-gray-500">студентов прошли</div>
                        </div>
                        <div>
                          <div className="text-xl font-bold text-crypto-purple">4.8/5</div>
                          <div className="text-xs text-gray-500">средняя оценка</div>
                        </div>
                      </div>
                      
                      {/* Course Guarantees */}
                      <div className="mt-6 pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Доступ сразу после оплаты</span>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">Поддержка от экспертов</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Check className="h-4 w-4 text-green-500" />
                          <span className="text-sm">30 дней гарантия возврата</span>
                        </div>
                      </div>
                    </Card>

                    {/* Enhanced Social Proof */}
                    <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <Medal className="text-crypto-orange" size={22} />
                        <h4 className="font-semibold text-gray-700">Выбор студентов</h4>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="pb-4 border-b border-gray-100">
                          <p className="text-sm text-gray-600 italic">
                            "Этот курс дал мне все необходимые знания для начала работы с криптовалютами. Рекомендую!"
                          </p>
                          <div className="mt-2 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                            <span className="text-xs font-medium text-gray-700">Михаил К.</span>
                          </div>
                        </div>
                        
                        <div>
                          <p className="text-sm text-gray-600 italic">
                            "Благодаря курсу я смог разобраться в блокчейне и теперь уверенно инвестирую."
                          </p>
                          <div className="mt-2 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                            <span className="text-xs font-medium text-gray-700">Елена С.</span>
                          </div>
                        </div>
                      </div>
                      
                      <button className="mt-4 text-crypto-purple text-sm font-medium hover:text-crypto-lightPurple transition-colors">
                        Смотреть все отзывы →
                      </button>
                    </div>
                    
                    {/* FAQ Preview with Link to FAQ Page */}
                    <div className="mt-6 bg-white p-6 rounded-xl shadow-lg">
                      <h4 className="font-semibold text-gray-700 flex items-center gap-2 mb-4">
                        <Info className="text-crypto-purple" size={18} />
                        Часто задаваемые вопросы
                      </h4>
                      
                      <div className="text-sm text-gray-600">
                        <div className="mb-3 pb-3 border-b border-gray-100">
                          <p className="font-medium text-gray-700 mb-1">Нужны ли начальные знания?</p>
                          <p>Нет, наш курс подходит для абсолютных новичков.</p>
                        </div>
                        <div>
                          <p className="font-medium text-gray-700 mb-1">Как долго у меня будет доступ?</p>
                          <p>Доступ к материалам курса предоставляется на 6 месяцев.</p>
                        </div>
                      </div>
                      
                      <Link to="/faq" className="mt-4 inline-block text-crypto-purple text-sm font-medium hover:text-crypto-lightPurple transition-colors rounded-md py-2 px-4 border border-crypto-purple/20 hover:bg-crypto-light/50 hover:border-crypto-purple/30">
                        Больше вопросов и ответов →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Enhanced Registration Form */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto" id="signup-form-course">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 relative overflow-hidden">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-crypto-light rounded-bl-3xl -z-10 transform translate-x-8 -translate-y-8"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-crypto-orange/10 rounded-tr-3xl -z-10 transform -translate-x-8 translate-y-8"></div>
              <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-crypto-purple/5 rounded-full -z-10"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center text-crypto-blue">
                Записаться на курс <span className="text-gradient bg-gradient-to-r from-crypto-purple to-crypto-lightPurple">"{courseTitle}"</span>
              </h2>
              
              <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
                Заполните форму ниже, и мы свяжемся с вами для подтверждения записи и ответим на все ваши вопросы
              </p>
              
              <SignupForm formType="course" courseTitle={courseTitle} />
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Нажимая кнопку "Записаться", вы соглашаетесь с нашей{" "}
                  <a href="#" className="text-crypto-purple hover:underline">политикой конфиденциальности</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      {/* Плавающий сайдбар с ценой и кнопкой оплаты */}
      <FloatingCoursePriceBar 
        courseTitle={courseTitle}
        price={price}
        isVisible={showFloatingBar}
      />
      
      <Footer />
    </div>
  );
};

export default CourseLayout;
