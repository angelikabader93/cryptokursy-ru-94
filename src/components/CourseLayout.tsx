
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card } from '@/components/ui/card';
import SignupForm from './SignupForm';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { CalendarCheck, GraduationCap, BookOpen, Users, Clock, Shield, Medal, Star } from 'lucide-react';

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
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section with Improved Gradient Background */}
        <div className="bg-gradient-to-r from-crypto-purple/90 via-crypto-purple to-crypto-lightPurple py-20 text-white relative overflow-hidden">
          {/* Abstract Background Elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-white/30 -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-crypto-orange/30 translate-x-1/3 translate-y-1/3 blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-5xl mx-auto">
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
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">{courseTitle}</h1>
              
              {/* Course Preview Section */}
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Course Content Area */}
                <div className="w-full md:w-2/3">
                  <div className="bg-white rounded-xl overflow-hidden shadow-2xl transform transition-transform hover:translate-y-[-5px]">
                    <div className="relative">
                      {popular && (
                        <div className="absolute top-0 right-0 bg-crypto-orange text-white py-2 px-6 rounded-bl-lg font-bold z-10 shadow-md">
                          Популярный курс
                        </div>
                      )}
                      <img 
                        src={courseImage} 
                        alt={courseTitle} 
                        className="w-full h-80 object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = "https://images.unsplash.com/photo-1639322537231-2f206e06af84?q=80&w=2032";
                        }} 
                      />
                    </div>
                    
                    <div className="p-8">
                      {children}
                    </div>
                  </div>
                </div>
                
                {/* Course Info Sidebar */}
                <div className="w-full md:w-1/3">
                  <Card className="p-6 border-0 shadow-xl rounded-xl bg-white sticky top-4">
                    <h3 className="text-2xl font-bold mb-6 text-crypto-blue border-b border-gray-100 pb-4">Информация о курсе</h3>
                    
                    {/* Course Stats with Improved Visual Hierarchy */}
                    <div className="space-y-5 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="bg-crypto-light p-2 rounded-full">
                          <GraduationCap className="text-crypto-purple" size={20} />
                        </div>
                        <span>Уровень: <strong className="text-crypto-blue">{level}</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-crypto-light p-2 rounded-full">
                          <CalendarCheck className="text-crypto-purple" size={20} />
                        </div>
                        <span>Старт: <strong className="text-crypto-blue">В любое время</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-crypto-light p-2 rounded-full">
                          <Clock className="text-crypto-purple" size={20} />
                        </div>
                        <span>Длительность: <strong className="text-crypto-blue">10 недель</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-crypto-light p-2 rounded-full">
                          <BookOpen className="text-crypto-purple" size={20} />
                        </div>
                        <span>Формат: <strong className="text-crypto-blue">Онлайн</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-crypto-light p-2 rounded-full">
                          <Users className="text-crypto-purple" size={20} />
                        </div>
                        <span>Поддержка: <strong className="text-crypto-blue">Да</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="bg-crypto-light p-2 rounded-full">
                          <Shield className="text-crypto-purple" size={20} />
                        </div>
                        <span>Сертификат: <strong className="text-crypto-blue">Включен</strong></span>
                      </div>
                    </div>
                    
                    {/* Price Section with Better Visual Design */}
                    <div className="mb-8 bg-crypto-light/50 p-4 rounded-lg">
                      {price === "Бесплатно" ? (
                        <>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-xl font-bold text-crypto-purple">Бесплатно</div>
                            <div className="bg-green-100 text-green-700 text-xs font-semibold px-2 py-1 rounded">ДОСТУПНО</div>
                          </div>
                          <div className="text-sm text-gray-600">Доступ к базовым материалам курса</div>
                        </>
                      ) : price === "Платно" ? (
                        <>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-2xl font-bold text-crypto-purple">15 000 ₽</div>
                            <div className="bg-blue-100 text-blue-700 text-xs font-semibold px-2 py-1 rounded">СТАНДАРТ</div>
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <Star className="text-yellow-500" size={16} />
                            <Star className="text-yellow-500" size={16} />
                            <Star className="text-yellow-500" size={16} />
                            <Star className="text-yellow-500" size={16} />
                            <Star className="text-yellow-300" size={16} />
                            <span className="text-xs text-gray-600">(128 отзывов)</span>
                          </div>
                          <div className="text-sm text-gray-600">Полный доступ на 6 месяцев с поддержкой</div>
                        </>
                      ) : (
                        <>
                          <div className="flex items-center justify-between mb-2">
                            <div className="text-2xl font-bold text-crypto-purple">50 000 ₽</div>
                            <div className="bg-purple-100 text-purple-700 text-xs font-semibold px-2 py-1 rounded">ПРЕМИУМ</div>
                          </div>
                          <div className="flex items-center gap-2 mb-1">
                            <Star className="text-yellow-500" size={16} />
                            <Star className="text-yellow-500" size={16} />
                            <Star className="text-yellow-500" size={16} />
                            <Star className="text-yellow-500" size={16} />
                            <Star className="text-yellow-500" size={16} />
                            <span className="text-xs text-gray-600">(42 отзыва)</span>
                          </div>
                          <div className="text-sm text-gray-600">Персональное обучение с ментором и неограниченной поддержкой</div>
                        </>
                      )}
                    </div>
                    
                    {/* Button with Improved Design */}
                    <Button 
                      className={`${
                        price === "Бесплатно" ? 
                        "bg-crypto-orange hover:bg-orange-600" : 
                        "bg-crypto-purple hover:bg-indigo-700"
                      } text-white w-full text-lg py-7 rounded-lg shadow-lg hover:shadow-xl transition-all font-bold`}
                      onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {price === "Бесплатно" ? "Начать бесплатно" : "Записаться на курс"}
                    </Button>

                    {/* Stats Counter */}
                    <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-crypto-purple">500+</div>
                        <div className="text-xs text-gray-500">студентов прошли</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-crypto-purple">4.8/5</div>
                        <div className="text-xs text-gray-500">средняя оценка</div>
                      </div>
                    </div>
                  </Card>

                  {/* Social Proof */}
                  <div className="mt-6 bg-white p-5 rounded-xl shadow-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Medal className="text-crypto-orange" />
                      <h4 className="font-semibold text-gray-700">Выбор студентов</h4>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      "Этот курс дал мне все необходимые знания для начала работы с криптовалютами. Рекомендую!"
                    </p>
                    <div className="mt-3 flex items-center">
                      <div className="w-8 h-8 rounded-full bg-gray-300 mr-2"></div>
                      <span className="text-xs font-medium text-gray-700">Михаил К., студент</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Signup Form with Improved Design */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto" id="signup-form-course">
            <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 relative">
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-crypto-light rounded-bl-3xl -z-10 transform translate-x-6 -translate-y-6"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-crypto-orange/10 rounded-tr-3xl -z-10 transform -translate-x-6 translate-y-6"></div>
              
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-crypto-blue">
                Записаться на курс <span className="text-crypto-purple">"{courseTitle}"</span>
              </h2>
              
              <SignupForm formType="course" courseTitle={courseTitle} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CourseLayout;
