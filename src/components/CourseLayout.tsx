
import React, { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Card } from '@/components/ui/card';
import SignupForm from './SignupForm';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { CalendarCheck, GraduationCap, BookOpen, Users } from 'lucide-react';

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
        <div className="bg-gradient-to-r from-crypto-purple/90 to-crypto-lightPurple py-16 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <Breadcrumb className="mb-6">
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/">Главная</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/#courses">Курсы</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{courseTitle}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{courseTitle}</h1>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-full md:w-2/3">
                  <div className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-xl">
                    <div className="relative">
                      {popular && (
                        <div className="absolute top-0 right-0 bg-crypto-orange text-white py-2 px-6 rounded-bl-lg font-bold z-10">
                          Популярный курс
                        </div>
                      )}
                      <img 
                        src={courseImage} 
                        alt={courseTitle} 
                        className="w-full h-64 object-cover"
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
                
                <div className="w-full md:w-1/3">
                  <Card className="p-6">
                    <h3 className="text-2xl font-bold mb-4 text-crypto-blue">Информация о курсе</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center gap-3">
                        <GraduationCap className="text-crypto-purple" />
                        <span>Уровень: <strong>{level}</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CalendarCheck className="text-crypto-purple" />
                        <span>Старт: <strong>В любое время</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="text-crypto-purple" />
                        <span>Формат: <strong>Онлайн</strong></span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Users className="text-crypto-purple" />
                        <span>Поддержка: <strong>Да</strong></span>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <div className="text-3xl font-bold mb-2 text-crypto-purple">{price}</div>
                      {price === "Бесплатно" && (
                        <div className="text-sm text-gray-500">Доступ к базовым материалам</div>
                      )}
                      {price === "Платно" && (
                        <div className="text-sm text-gray-500">Полный доступ на 6 месяцев</div>
                      )}
                      {price === "Премиум" && (
                        <div className="text-sm text-gray-500">Персональное обучение + поддержка</div>
                      )}
                    </div>
                    
                    <Button 
                      className={`${
                        price === "Бесплатно" ? 
                        "bg-crypto-orange hover:bg-orange-600" : 
                        "bg-crypto-purple hover:bg-crypto-lightPurple"
                      } text-white w-full text-lg py-6`}
                      onClick={() => document.getElementById('signup-form-course')?.scrollIntoView({ behavior: 'smooth' })}
                    >
                      {price === "Бесплатно" ? "Начать бесплатно" : "Записаться на курс"}
                    </Button>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-3xl mx-auto" id="signup-form-course">
            <div className="bg-white rounded-lg shadow-xl p-8 border border-gray-100">
              <h2 className="text-3xl font-bold mb-6 text-center text-crypto-blue">Записаться на курс "{courseTitle}"</h2>
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
