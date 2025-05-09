
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check, Users, Award, BookOpen, Clock, Zap, AlertCircle } from 'lucide-react';

const BeginnerCoursePage = () => {
  return (
    <CourseLayout 
      courseTitle="Криптовалюта для чайников" 
      courseImage="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069"
      courseSlug="crypto-for-beginners"
      level="Новичок"
      price="Бесплатно"
      popular={true}
    >
      <div className="space-y-12">
        {/* Introduction Section with Better Typography */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-crypto-blue flex items-center gap-2">
            <BookOpen className="inline-block text-crypto-purple" size={24} /> 
            О чем этот курс?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Курс <strong>"Криптовалюта для чайников"</strong> разработан специально для тех, кто только начинает свой путь в мир цифровых валют. 
            Независимо от вашего опыта и технических знаний, этот курс поможет вам получить базовое понимание блокчейна 
            и криптовалют в понятной и доступной форме.
          </p>
          
          {/* Highlighted Benefits Box */}
          <div className="bg-crypto-light mt-6 p-5 rounded-lg border-l-4 border-crypto-purple">
            <div className="font-medium text-crypto-blue mb-2">Почему стоит пройти этот курс?</div>
            <p className="text-sm text-gray-600">
              По окончании курса вы будете уверенно ориентироваться в мире криптовалют, 
              понимать основные принципы работы блокчейна и сможете безопасно совершать свои первые операции 
              с цифровыми активами.
            </p>
          </div>
        </div>
        
        {/* What You'll Learn Section with Visual Improvements */}
        <div className="bg-gradient-to-r from-crypto-light to-white p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Award className="inline-block text-crypto-purple" size={24} />
            Что вы изучите:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span>Основы технологии блокчейн и принципы ее работы</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span>Что такое криптовалюты и чем они отличаются от традиционных денег</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span>Как создать и безопасно использовать криптокошелек</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span>Как покупать, продавать и хранить криптовалюты без риска</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span>Основные термины и понятия в мире криптовалют</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <span>Как избежать мошенников и распознать опасные схемы</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Curriculum Section with Timeline Visual */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Clock className="inline-block text-crypto-purple" size={24} />
            Программа курса:
          </h2>
          
          <div className="space-y-0">
            {/* Module Timeline */}
            <div className="relative pl-8 pb-10 border-l-2 border-green-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-green-500"></div>
              <h3 className="font-bold text-lg text-green-700">Модуль 1: Введение в мир криптовалют</h3>
              <p className="text-gray-600 mt-1">История возникновения, основные принципы работы, преимущества и недостатки.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">3 видео</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">2 теста</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">45 минут</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-green-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-green-500"></div>
              <h3 className="font-bold text-lg text-green-700">Модуль 2: Технология блокчейн для начинающих</h3>
              <p className="text-gray-600 mt-1">Что такое блокчейн, как он работает и почему это безопасно.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">4 видео</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1 тест</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">60 минут</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-green-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-green-500"></div>
              <h3 className="font-bold text-lg text-green-700">Модуль 3: Криптокошельки и безопасность</h3>
              <p className="text-gray-600 mt-1">Виды кошельков, создание, резервное копирование и лучшие практики безопасности.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">5 видео</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">3 теста</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">90 минут</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-green-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-green-500"></div>
              <h3 className="font-bold text-lg text-green-700">Модуль 4: Первые шаги в криптовалютном мире</h3>
              <p className="text-gray-600 mt-1">Как и где купить первую криптовалюту, основные биржи, способы оплаты.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">4 видео</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1 тест</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">75 минут</span>
              </div>
            </div>
            
            <div className="relative pl-8 border-l-2 border-green-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-green-500"></div>
              <h3 className="font-bold text-lg text-green-700">Модуль 5: Заключение и дальнейшие шаги</h3>
              <p className="text-gray-600 mt-1">Подведение итогов, советы по дальнейшему развитию, дополнительные ресурсы.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">2 видео</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">1 тест</span>
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">30 минут</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Who This Course Is For */}
        <div className="bg-green-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-green-700 flex items-center gap-2">
            <Users className="inline-block text-green-600" size={24} />
            Для кого этот курс?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-green-800">Для новичков</h4>
                  <p className="text-sm text-gray-600">Для тех, кто хочет получить базовые знания о криптовалютах</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-green-800">Для интересующихся</h4>
                  <p className="text-sm text-gray-600">Для тех, кто интересуется новыми финансовыми технологиями</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-green-800">Для осторожных</h4>
                  <p className="text-sm text-gray-600">Для людей, желающих безопасно начать работу с криптовалютами</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-green-500 mt-1 flex-shrink-0 bg-green-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-green-800">Для всех</h4>
                  <p className="text-sm text-gray-600">Для тех, кто хочет понять принципы работы блокчейна без технических сложностей</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Advantages Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Zap className="inline-block text-crypto-purple" size={24} />
            Преимущества нашего курса:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">1</div>
                Простой язык
              </h3>
              <p className="text-gray-700">Объясняем сложные концепции понятными словами, без лишней технической терминологии</p>
            </div>
            
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">2</div>
                Практические задания
              </h3>
              <p className="text-gray-700">Закрепляете полученные знания через практику с пошаговыми инструкциями</p>
            </div>
            
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">3</div>
                Доступ навсегда
              </h3>
              <p className="text-gray-700">Все материалы останутся с вами бессрочно, вы сможете освежить знания в любой момент</p>
            </div>
            
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">4</div>
                Регулярные обновления
              </h3>
              <p className="text-gray-700">Курс постоянно обновляется с учетом последних изменений в отрасли</p>
            </div>
          </div>
        </div>
        
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
