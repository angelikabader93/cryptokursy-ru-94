
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check, Users, Award, BookOpen, Clock, Zap, Star, Shield, BookmarkCheck, BrainCircuit } from 'lucide-react';

const PremiumCoursePage = () => {
  return (
    <CourseLayout 
      courseTitle="Премиальная криптошкола" 
      courseImage="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070"
      courseSlug="premium-crypto-school"
      level="Продвинутый"
      price="Премиум"
    >
      <div className="space-y-12">
        {/* Introduction Section with Premium Features */}
        <div>
          <div className="flex items-center gap-2 mb-5">
            <div className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">ПРЕМИУМ</div>
            <div className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">Индивидуальный подход</div>
            <div className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">VIP-поддержка</div>
          </div>
          
          <h2 className="text-2xl font-bold mb-4 text-crypto-blue flex items-center gap-2">
            <BookOpen className="inline-block text-purple-600" size={24} /> 
            О чем этот курс?
          </h2>
          
          <p className="text-gray-700 text-lg leading-relaxed">
            <strong>"Премиальная криптошкола"</strong> — это эксклюзивная программа индивидуального обучения 
            с лучшими экспертами криптоиндустрии. Это не просто курс, а полное погружение в мир криптовалют и 
            трейдинга с персональным наставником, который адаптирует программу под ваш уровень и цели. 
            Мы предлагаем высокоуровневые знания и индивидуальный подход, чтобы вы могли освоить продвинутые стратегии 
            и добиться конкретных результатов.
          </p>
          
          {/* Premium Highlight Box */}
          <div className="mt-6 bg-gradient-to-r from-purple-500/10 to-purple-700/10 p-5 rounded-lg border-l-4 border-purple-500">
            <div className="text-lg font-medium text-purple-700 mb-2">Эксклюзивный доступ</div>
            <p className="text-gray-700">
              Только 15 участников в месяц получают возможность присоединиться к нашей премиальной программе. 
              Это гарантирует индивидуальный подход и максимальное внимание к вашим целям и задачам.
            </p>
          </div>
        </div>
        
        {/* What You'll Get Section */}
        <div className="bg-gradient-to-r from-purple-50 to-white p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Award className="inline-block text-purple-600" size={24} />
            Что вы получите:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-purple-500 mt-1 flex-shrink-0 bg-purple-100 p-1 rounded-full" />
                <div>
                  <span className="font-medium">Персональный наставник</span>
                  <p className="text-sm text-gray-600 mt-1">Практикующий трейдер или инвестор с опытом от 5 лет</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-purple-500 mt-1 flex-shrink-0 bg-purple-100 p-1 rounded-full" />
                <div>
                  <span className="font-medium">Индивидуальный план обучения</span>
                  <p className="text-sm text-gray-600 mt-1">Адаптированный под ваши цели и уровень подготовки</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-purple-500 mt-1 flex-shrink-0 bg-purple-100 p-1 rounded-full" />
                <div>
                  <span className="font-medium">Еженедельные персональные занятия</span>
                  <p className="text-sm text-gray-600 mt-1">И сессии разбора вашего инвестиционного портфеля</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-purple-500 mt-1 flex-shrink-0 bg-purple-100 p-1 rounded-full" />
                <div>
                  <span className="font-medium">Закрытое VIP-сообщество</span>
                  <p className="text-sm text-gray-600 mt-1">Доступ к сообществу трейдеров и инвесторов премиум-уровня</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-purple-500 mt-1 flex-shrink-0 bg-purple-100 p-1 rounded-full" />
                <div>
                  <span className="font-medium">Эксклюзивная аналитика</span>
                  <p className="text-sm text-gray-600 mt-1">Материалы и прогнозы от команды экспертов-аналитиков</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-lg p-5 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-purple-500 mt-1 flex-shrink-0 bg-purple-100 p-1 rounded-full" />
                <div>
                  <span className="font-medium">Поддержка 24/7</span>
                  <p className="text-sm text-gray-600 mt-1">Быстрые ответы на все ваши вопросы в любое время</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Curriculum Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Clock className="inline-block text-crypto-purple" size={24} />
            Программа обучения включает:
          </h2>
          
          <div className="space-y-0">
            <div className="relative pl-8 pb-10 border-l-2 border-purple-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="flex items-center mb-2">
                <h3 className="font-bold text-lg text-purple-700">Модуль 1: Стратегический анализ рынка</h3>
                <div className="ml-3 bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded">Премиум</div>
              </div>
              <p className="text-gray-600">Продвинутые методы технического и фундаментального анализа, определение макротрендов.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">6 видео</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">4 практических задания</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">2 персональные консультации</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-purple-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="flex items-center mb-2">
                <h3 className="font-bold text-lg text-purple-700">Модуль 2: Профессиональный трейдинг</h3>
                <div className="ml-3 bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded">Премиум</div>
              </div>
              <p className="text-gray-600">Маркет-мейкинг, ликвидность, торговля с кредитным плечом, хеджирование рисков.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">8 видео</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">5 практических заданий</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">3 персональные консультации</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-purple-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="flex items-center mb-2">
                <h3 className="font-bold text-lg text-purple-700">Модуль 3: Психология трейдинга</h3>
                <div className="ml-3 bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded">Эксклюзив</div>
              </div>
              <p className="text-gray-600">Управление эмоциями, дисциплина, преодоление когнитивных искажений при принятии решений.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">5 видео</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">3 практических задания</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">2 персональные консультации</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-purple-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="flex items-center mb-2">
                <h3 className="font-bold text-lg text-purple-700">Модуль 4: Автоматизированный трейдинг</h3>
                <div className="ml-3 bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded">Эксклюзив</div>
              </div>
              <p className="text-gray-600">Создание и настройка торговых ботов, алгоритмические стратегии, бэктестирование.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">7 видео</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">6 практических заданий</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">3 персональные консультации</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-purple-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="flex items-center mb-2">
                <h3 className="font-bold text-lg text-purple-700">Модуль 5: Управление капиталом и рисками</h3>
                <div className="ml-3 bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded">Эксклюзив</div>
              </div>
              <p className="text-gray-600">Продвинутые техники риск-менеджмента, позиционирование, портфельные стратегии.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">6 видео</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">4 практических задания</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">2 персональные консультации</span>
              </div>
            </div>
            
            <div className="relative pl-8 border-l-2 border-purple-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-purple-500"></div>
              <div className="flex items-center mb-2">
                <h3 className="font-bold text-lg text-purple-700">Модуль 6: Налоговое планирование и юридические аспекты</h3>
                <div className="ml-3 bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded">Эксклюзив</div>
              </div>
              <p className="text-gray-600">Легальные стратегии оптимизации налогообложения, работа с юрисдикциями, правовая защита активов.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">5 видео</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">3 практических задания</span>
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">2 консультации с юристом</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Premium Tools Section */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4 text-crypto-blue">Премиальные инструменты в вашем доступе:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-5 rounded-lg shadow-sm text-center">
              <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <BookmarkCheck className="text-purple-600" size={28} />
              </div>
              <div className="font-bold text-lg mb-1">Торговые сигналы</div>
              <div className="text-sm text-gray-600">Доступ к торговым сигналам от профессиональных аналитиков</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm text-center">
              <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <Shield className="text-purple-600" size={28} />
              </div>
              <div className="font-bold text-lg mb-1">Риск-калькулятор</div>
              <div className="text-sm text-gray-600">Профессиональный инструмент для расчета и управления рисками</div>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm text-center">
              <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <BrainCircuit className="text-purple-600" size={28} />
              </div>
              <div className="font-bold text-lg mb-1">AI-аналитика</div>
              <div className="text-sm text-gray-600">Искусственный интеллект для анализа рыночных трендов</div>
            </div>
          </div>
        </div>
        
        {/* Who This Course Is For */}
        <div className="bg-purple-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-purple-700 flex items-center gap-2">
            <Users className="inline-block text-purple-600" size={24} />
            Для кого этот курс?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-purple-500 mt-1 flex-shrink-0 bg-purple-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-purple-800">Для амбициозных трейдеров</h4>
                  <p className="text-sm text-gray-600">Для тех, кто стремится к высоким результатам в трейдинге криптовалют</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-purple-500 mt-1 flex-shrink-0 bg-purple-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-purple-800">Для опытных инвесторов</h4>
                  <p className="text-sm text-gray-600">Для тех, кто хочет оптимизировать свои существующие инвестиционные стратегии</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-purple-500 mt-1 flex-shrink-0 bg-purple-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-purple-800">Для профессионалов финансов</h4>
                  <p className="text-sm text-gray-600">Для специалистов из смежных областей финансов, расширяющих свои компетенции</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-purple-500 mt-1 flex-shrink-0 bg-purple-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-purple-800">Для руководителей</h4>
                  <p className="text-sm text-gray-600">Для руководителей компаний, изучающих возможности блокчейн-технологий для бизнеса</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Advantages */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Zap className="inline-block text-crypto-purple" size={24} />
            Преимущества премиальной криптошколы:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">1</div>
                Индивидуальный подход
              </h3>
              <p className="text-gray-700">Программа обучения полностью адаптируется под ваши цели и темп освоения материала</p>
            </div>
            
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">2</div>
                Эксклюзивные материалы
              </h3>
              <p className="text-gray-700">Доступ к информации и аналитике, недоступной в открытых источниках</p>
            </div>
            
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">3</div>
                VIP-сообщество
              </h3>
              <p className="text-gray-700">Возможность нетворкинга с успешными трейдерами и инвесторами в закрытом клубе</p>
            </div>
            
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">4</div>
                Персональные стратегии
              </h3>
              <p className="text-gray-700">Разработка уникальных инвестиционных планов под ваш профиль риска и цели</p>
            </div>
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="bg-crypto-purple/5 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-8 text-crypto-purple text-center">Отзывы наших учеников:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 text-purple-400 opacity-20 text-7xl font-serif">"</div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  </div>
                  <span className="text-sm text-gray-500">5.0</span>
                </div>
                
                <blockquote className="italic text-gray-700">
                  "Благодаря премиальной криптошколе я смог увеличить доходность своего портфеля на 138% за 6 месяцев. 
                  Индивидуальные консультации с наставником помогли избежать типичных ошибок и выработать собственную успешную стратегию."
                </blockquote>
                
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium text-gray-800">Алексей</div>
                    <div className="text-xs text-gray-500">Предприниматель, Москва</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm relative">
              <div className="absolute -top-4 -left-4 text-purple-400 opacity-20 text-7xl font-serif">"</div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <div className="flex mr-2">
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                    <Star className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  </div>
                  <span className="text-sm text-gray-500">5.0</span>
                </div>
                
                <blockquote className="italic text-gray-700">
                  "Я пришла с базовыми знаниями о криптовалютах, но чувствовала, что мне не хватает системного подхода. 
                  После обучения в премиальной школе моя уверенность возросла в разы, а мои инвестиционные решения стали намного более взвешенными и успешными."
                </blockquote>
                
                <div className="mt-4 flex items-center">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <div className="font-medium text-gray-800">Марина</div>
                    <div className="text-xs text-gray-500">Финансовый аналитик, Санкт-Петербург</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Premium Guarantee */}
          <div className="mt-8 text-center">
            <div className="inline-flex items-center justify-center bg-purple-100 text-purple-700 px-4 py-2 rounded-full font-medium text-sm">
              <Shield className="mr-2 w-4 h-4" /> Гарантия результата или возврат средств
            </div>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default PremiumCoursePage;
