
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check, Users, Award, BookOpen, Clock, Zap, BarChart2, TrendingUp, DollarSign } from 'lucide-react';

const BitcoinCoursePage = () => {
  return (
    <CourseLayout 
      courseTitle="Биткоин и альткоины" 
      courseImage="https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002"
      courseSlug="bitcoin-and-altcoins"
      level="Средний"
      price="Платно"
    >
      <div className="space-y-12">
        {/* Introduction Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-crypto-blue flex items-center gap-2">
            <BookOpen className="inline-block text-crypto-purple" size={24} /> 
            О чем этот курс?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Курс <strong>"Биткоин и альткоины"</strong> представляет собой комплексное руководство по инвестированию 
            в криптовалюты. Вы изучите основы анализа рынка, различные инвестиционные стратегии и научитесь формировать 
            сбалансированный криптопортфель. Курс сочетает теоретические знания и практические навыки для успешного 
            инвестирования в Биткоин и альтернативные криптовалюты.
          </p>
          
          {/* Investment Returns Preview */}
          <div className="bg-gradient-to-r from-blue-500/10 to-blue-700/10 mt-6 p-5 rounded-lg flex items-center">
            <div className="w-1/3">
              <div className="text-center">
                <div className="text-blue-700 text-lg font-bold">BTC</div>
                <div className="text-2xl font-bold text-blue-800">+312%</div>
                <div className="text-xs text-gray-600">за последние 3 года</div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="text-center">
                <div className="text-blue-700 text-lg font-bold">ETH</div>
                <div className="text-2xl font-bold text-blue-800">+456%</div>
                <div className="text-xs text-gray-600">за последние 3 года</div>
              </div>
            </div>
            <div className="w-1/3">
              <div className="text-center">
                <div className="text-blue-700 text-lg font-bold">Альткоины</div>
                <div className="text-2xl font-bold text-blue-800">+200-1000%</div>
                <div className="text-xs text-gray-600">потенциал роста</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* What You'll Learn Section */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl">
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Award className="inline-block text-blue-600" size={24} />
            Что вы изучите:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Фундаментальные отличия Биткоина от других криптовалют</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Методы анализа криптовалютного рынка (технический и фундаментальный)</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Стратегии инвестирования и управления рисками в криптовалютах</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Принципы формирования и управления криптовалютным портфелем</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Оценка перспективности альткоинов и новых токенов</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Налогообложение криптовалютных операций и правовые аспекты</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Curriculum Section */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Clock className="inline-block text-crypto-purple" size={24} />
            Программа курса:
          </h2>
          
          <div className="space-y-0">
            <div className="relative pl-8 pb-10 border-l-2 border-blue-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-blue-500"></div>
              <h3 className="font-bold text-lg text-blue-700">Модуль 1: Биткоин – первая и главная криптовалюта</h3>
              <p className="text-gray-600 mt-1">История, технические особенности, экономическая модель, роль в криптоэкосистеме.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">5 видео</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">2 теста</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">110 минут</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-blue-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-blue-500"></div>
              <h3 className="font-bold text-lg text-blue-700">Модуль 2: Альткоины и их категории</h3>
              <p className="text-gray-600 mt-1">Классификация криптовалют, основные проекты, их технологии и отличия.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">7 видео</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">3 теста</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">140 минут</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-blue-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-blue-500"></div>
              <h3 className="font-bold text-lg text-blue-700">Модуль 3: Анализ криптовалютного рынка</h3>
              <p className="text-gray-600 mt-1">Фундаментальный и технический анализ, индикаторы, чтение графиков.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">8 видео</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">4 практических задания</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">180 минут</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-blue-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-blue-500"></div>
              <h3 className="font-bold text-lg text-blue-700">Модуль 4: Инвестиционные стратегии</h3>
              <p className="text-gray-600 mt-1">Долгосрочные и краткосрочные стратегии, доллар-костинг, стейкинг, ликвидность.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">6 видео</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">3 практических задания</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">150 минут</span>
              </div>
            </div>
            
            <div className="relative pl-8 pb-10 border-l-2 border-blue-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-blue-500"></div>
              <h3 className="font-bold text-lg text-blue-700">Модуль 5: Управление портфелем</h3>
              <p className="text-gray-600 mt-1">Диверсификация, ребалансировка, управление рисками, психология инвестора.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">5 видео</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">2 практических задания</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">120 минут</span>
              </div>
            </div>
            
            <div className="relative pl-8 border-l-2 border-blue-300">
              <div className="absolute left-[-8px] top-2 w-4 h-4 rounded-full bg-blue-500"></div>
              <h3 className="font-bold text-lg text-blue-700">Модуль 6: Налоги и правовые аспекты</h3>
              <p className="text-gray-600 mt-1">Регуляторная среда, декларирование, налоговая оптимизация, правовые риски.</p>
              <div className="flex gap-2 mt-2">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">4 видео</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">1 тест</span>
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">90 минут</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Investment Strategies Section */}
        <div className="bg-gray-50 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4 text-crypto-blue">Стратегии инвестирования, которые вы освоите:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                <BarChart2 className="text-blue-600" />
              </div>
              <div className="font-medium mb-1">DCA</div>
              <div className="text-xs text-gray-600">Dollar Cost Averaging</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                <TrendingUp className="text-blue-600" />
              </div>
              <div className="font-medium mb-1">Торговля на волатильности</div>
              <div className="text-xs text-gray-600">Инвестиции на колебаниях</div>
            </div>
            <div className="bg-white p-4 rounded-lg text-center shadow-sm">
              <div className="bg-blue-100 w-12 h-12 mx-auto rounded-full flex items-center justify-center mb-2">
                <DollarSign className="text-blue-600" />
              </div>
              <div className="font-medium mb-1">Стейкинг</div>
              <div className="text-xs text-gray-600">Пассивный доход</div>
            </div>
          </div>
        </div>
        
        {/* Who This Course Is For */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 flex items-center gap-2">
            <Users className="inline-block text-blue-600" size={24} />
            Для кого этот курс?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800">Для инвесторов</h4>
                  <p className="text-sm text-gray-600">Для инвесторов, желающих диверсифицировать портфель криптовалютами</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800">Для владельцев</h4>
                  <p className="text-sm text-gray-600">Для тех, кто уже владеет криптовалютой и хочет научиться управлять инвестициями</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800">Для энтузиастов</h4>
                  <p className="text-sm text-gray-600">Для криптоэнтузиастов, стремящихся понимать рыночные тренды и формировать стратегии</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800">Для трейдеров</h4>
                  <p className="text-sm text-gray-600">Для начинающих трейдеров, желающих освоить основы анализа и торговли криптовалютами</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Advantages */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Zap className="inline-block text-crypto-purple" size={24} />
            Преимущества нашего курса:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">1</div>
                Реальные кейсы
              </h3>
              <p className="text-gray-700">Разбор успешных и провальных инвестиционных решений на реальных историях из рынка</p>
            </div>
            
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">2</div>
                Торговые симуляторы
              </h3>
              <p className="text-gray-700">Специальные тренажеры для практики без риска потери реальных средств</p>
            </div>
            
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">3</div>
                Профессиональные инструменты
              </h3>
              <p className="text-gray-700">Доступ к премиум аналитическим платформам и торговым инструментам</p>
            </div>
            
            <div className="bg-crypto-purple/5 p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">4</div>
                Сообщество инвесторов
              </h3>
              <p className="text-gray-700">Закрытый клуб для общения с единомышленниками и обмена опытом</p>
            </div>
          </div>
        </div>
        
        {/* ROI Calculator Preview */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Оценка потенциальной доходности:</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="p-3 bg-white rounded-md text-center">
              <div className="text-xs text-gray-500 mb-1">Начальные инвестиции</div>
              <div className="font-bold text-lg">100 000 ₽</div>
              <div className="text-green-500 text-sm mt-1">+25% / 1 год</div>
            </div>
            <div className="p-3 bg-white rounded-md text-center">
              <div className="text-xs text-gray-500 mb-1">Диверсифицированный портфель</div>
              <div className="font-bold text-lg">100 000 ₽</div>
              <div className="text-green-500 text-sm mt-1">+42% / 1 год</div>
            </div>
            <div className="p-3 bg-white rounded-md text-center">
              <div className="text-xs text-gray-500 mb-1">С оптимизацией рисков</div>
              <div className="font-bold text-lg">100 000 ₽</div>
              <div className="text-green-500 text-sm mt-1">+32% / 1 год</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-3">* Данные на основе исторических показателей. Не является инвестиционной рекомендацией.</p>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BitcoinCoursePage;
