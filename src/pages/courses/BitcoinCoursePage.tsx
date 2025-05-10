
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check, Users, Award, BookOpen, Clock, Zap, BarChart2, TrendingUp, DollarSign } from 'lucide-react';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';

const BitcoinCoursePage = () => {
  // Course modules data
  const modules = [
    {
      title: "Биткоин – первая и главная криптовалюта",
      description: "История, технические особенности, экономическая модель, роль в криптоэкосистеме.",
      duration: "110 минут",
      color: "bg-amber-500",
      lessons: [
        { title: "История создания Bitcoin", type: "video", duration: "18 мин" },
        { title: "Техническое устройство Bitcoin", type: "video", duration: "25 мин" },
        { title: "Майнинг и принцип Proof-of-Work", type: "video", duration: "22 мин" },
        { title: "Экономическая модель и халвинги", type: "video", duration: "20 мин" },
        { title: "Роль Bitcoin в криптоэкосистеме", type: "video", duration: "25 мин" },
        { title: "Проверка знаний - Bitcoin", type: "test" }
      ]
    },
    {
      title: "Альткоины и их категории",
      description: "Классификация криптовалют, основные проекты, их технологии и отличия.",
      duration: "140 минут",
      color: "bg-purple-500",
      lessons: [
        { title: "Что такое альткоины", type: "video", duration: "15 мин" },
        { title: "Ethereum и смарт-контракты", type: "video", duration: "20 мин" },
        { title: "Платежные монеты (XRP, LTC и др.)", type: "video", duration: "18 мин" },
        { title: "Стейблкоины (USDT, USDC, DAI)", type: "video", duration: "20 мин" },
        { title: "DeFi-токены", type: "video", duration: "25 мин" },
        { title: "NFT и метавселенные", type: "video", duration: "22 мин" },
        { title: "Memcoins и их особенности", type: "video", duration: "20 мин" },
        { title: "Тест - Классификация криптовалют", type: "test" }
      ]
    },
    {
      title: "Анализ криптовалютного рынка",
      description: "Фундаментальный и технический анализ, индикаторы, чтение графиков.",
      duration: "180 минут",
      color: "bg-blue-500",
      lessons: [
        { title: "Основы фундаментального анализа", type: "video", duration: "22 мин" },
        { title: "Оценка команды и технологии проекта", type: "video", duration: "20 мин" },
        { title: "Основы технического анализа", type: "video", duration: "25 мин" },
        { title: "Свечные паттерны", type: "video", duration: "22 мин" },
        { title: "Ключевые индикаторы (RSI, MACD, MA)", type: "video", duration: "25 мин" },
        { title: "Уровни поддержки и сопротивления", type: "video", duration: "20 мин" },
        { title: "Психология рынка и поведенческая экономика", type: "video", duration: "18 мин" },
        { title: "Анализ on-chain метрик", type: "video", duration: "28 мин" },
        { title: "Практическое задание - Технический анализ", type: "test" }
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Игорь Л.",
      position: "Частный инвестор",
      content: "Этот курс полностью изменил мой подход к инвестированию в криптовалюты. Теперь я владею инструментами анализа, которые дают мне уверенность в принимаемых решениях.",
      rating: 5
    },
    {
      name: "Мария Т.",
      position: "Финансовый консультант",
      content: "Отличный курс для тех, кто хочет профессионально подходить к инвестициям в криптовалюты. Особенно ценны разделы по управлению рисками и построению портфеля.",
      rating: 5
    },
    {
      name: "Александр Ф.",
      position: "Предприниматель",
      content: "Начал инвестировать в криптовалюты год назад, но только после этого курса почувствовал, что действительно понимаю, что делаю. Материал понятный, с конкретными примерами.",
      rating: 4
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "С какой суммы можно начать инвестировать по стратегиям из курса?",
      answer: "Стратегии, представленные в курсе, масштабируемы и подходят для любых сумм. Мы рекомендуем начинать с той суммы, которую вы готовы рисковать без ущерба для основного бюджета. В курсе представлены примеры для разных сумм инвестирования."
    },
    {
      question: "Будут ли конкретные рекомендации по покупке определенных криптовалют?",
      answer: "Курс не дает инвестиционных рекомендаций по конкретным активам. Вместо этого мы обучаем вас методикам анализа и принципам построения портфеля, чтобы вы могли самостоятельно принимать обоснованные решения."
    },
    {
      question: "Подходит ли курс для начинающих инвесторов?",
      answer: "Курс предназначен для людей с базовым пониманием криптовалют. Если вы совсем новичок, мы рекомендуем сначала пройти наш бесплатный курс 'Криптовалюта для чайников', а затем переходить к данному курсу."
    },
    {
      question: "Сколько времени нужно уделять инвестициям после прохождения курса?",
      answer: "В зависимости от выбранной стратегии. Долгосрочные инвестиции требуют минимум времени на поддержание (например, несколько часов в месяц на ребалансировку), в то время как активные стратегии требуют регулярного внимания."
    },
    {
      question: "Как часто обновляется содержание курса?",
      answer: "Материалы курса обновляются ежеквартально, чтобы отражать актуальные тенденции на рынке. Кроме того, мы проводим ежемесячные вебинары, где анализируем текущую ситуацию и стратегии."
    }
  ];

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
            Курс <strong className="text-gradient bg-gradient-to-r from-crypto-purple to-crypto-lightPurple">"Биткоин и альткоины"</strong> представляет собой комплексное руководство по инвестированию 
            в криптовалюты. Вы изучите основы анализа рынка, различные инвестиционные стратегии и научитесь формировать 
            сбалансированный криптопортфель. Курс сочетает теоретические знания и практические навыки для успешного 
            инвестирования в Биткоин и альтернативные криптовалюты.
          </p>
          
          {/* Investment Returns Preview - Enhanced with better visuals */}
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 mt-6 p-6 rounded-lg shadow-sm">
            <h3 className="text-blue-700 text-lg font-semibold mb-3">Исторические показатели доходности:</h3>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-all">
                <div className="text-blue-700 text-lg font-bold">BTC</div>
                <div className="text-2xl font-bold text-blue-800">+312%</div>
                <div className="text-xs text-gray-600">за последние 3 года</div>
                <div className="w-full h-1 bg-gray-100 mt-2">
                  <div className="h-full bg-blue-500 w-[75%]"></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-all">
                <div className="text-blue-700 text-lg font-bold">ETH</div>
                <div className="text-2xl font-bold text-blue-800">+456%</div>
                <div className="text-xs text-gray-600">за последние 3 года</div>
                <div className="w-full h-1 bg-gray-100 mt-2">
                  <div className="h-full bg-indigo-500 w-[90%]"></div>
                </div>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm text-center hover:shadow-md transition-all">
                <div className="text-blue-700 text-lg font-bold">Альткоины</div>
                <div className="text-2xl font-bold text-blue-800">+200-1000%</div>
                <div className="text-xs text-gray-600">потенциал роста</div>
                <div className="w-full h-1 bg-gray-100 mt-2">
                  <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 w-[80%]"></div>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-gray-500 mt-3 text-center">
              * Данные показатели основаны на исторических данных и не являются гарантией будущей доходности
            </p>
          </div>
        </div>
        
        {/* What You'll Learn Section */}
        <div className="bg-gradient-to-r from-blue-50 to-white p-6 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Award className="inline-block text-blue-600" size={24} />
            Что вы изучите:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Фундаментальные отличия Биткоина от других криптовалют</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Методы анализа криптовалютного рынка (технический и фундаментальный)</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Стратегии инвестирования и управления рисками в криптовалютах</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Принципы формирования и управления криптовалютным портфелем</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Оценка перспективности альткоинов и новых токенов</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Налогообложение криптовалютных операций и правовые аспекты</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Course Modules */}
        <CourseModules modules={modules} />
        
        {/* Course Instructor */}
        <CourseInstructor 
          name="Андрей Соколов"
          position="Криптоаналитик и инвестор"
          bio="Андрей занимается инвестициями в криптовалюты с 2015 года. Имеет опыт работы в криптовалютных фондах, ведет популярный Telegram-канал с аналитикой и является приглашенным экспертом на финансовых мероприятиях."
          experience={[
            "8+ лет опыта инвестирования в криптовалюты",
            "Соавтор стратегии криптоинвестирования с ROI +680%",
            "Более 300 успешных учеников",
            "Автор книги «Криптовалютный портфель: от теории к практике»"
          ]}
        />
        
        {/* Investment Strategies Section - Enhanced with better visuals */}
        <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6 text-crypto-blue">Стратегии инвестирования, которые вы освоите:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <BarChart2 className="text-blue-600" size={28} />
              </div>
              <div className="font-medium text-lg mb-1">DCA</div>
              <div className="text-gray-500 text-sm mb-3">Dollar Cost Averaging</div>
              <p className="text-gray-600 text-sm">Стратегия регулярных покупок для усреднения цены входа и снижения влияния волатильности</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <TrendingUp className="text-blue-600" size={28} />
              </div>
              <div className="font-medium text-lg mb-1">Торговля на волатильности</div>
              <div className="text-gray-500 text-sm mb-3">Инвестиции на колебаниях</div>
              <p className="text-gray-600 text-sm">Использование рыночных циклов для входа и выхода с позиций с целью увеличения прибыли</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <DollarSign className="text-blue-600" size={28} />
              </div>
              <div className="font-medium text-lg mb-1">Стейкинг</div>
              <div className="text-gray-500 text-sm mb-3">Пассивный доход</div>
              <p className="text-gray-600 text-sm">Получение дополнительной прибыли за хранение и поддержку работы блокчейн-сетей</p>
            </div>
          </div>
        </div>
        
        {/* Course Testimonials */}
        <CourseTestimonials testimonials={testimonials} />
        
        {/* Who This Course Is For */}
        <div className="bg-blue-50 p-8 rounded-xl shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-blue-700 flex items-center gap-2">
            <Users className="inline-block text-blue-600" size={24} />
            Для кого этот курс?
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800 text-lg">Для инвесторов</h4>
                  <p className="text-gray-600">Для инвесторов, желающих диверсифицировать портфель криптовалютами</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800 text-lg">Для владельцев</h4>
                  <p className="text-gray-600">Для тех, кто уже владеет криптовалютой и хочет научиться управлять инвестициями</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800 text-lg">Для энтузиастов</h4>
                  <p className="text-gray-600">Для криптоэнтузиастов, стремящихся понимать рыночные тренды и формировать стратегии</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800 text-lg">Для трейдеров</h4>
                  <p className="text-gray-600">Для начинающих трейдеров, желающих освоить основы анализа и торговли криптовалютами</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <CourseFAQ faqItems={faqItems} />
        
        {/* Course Advantages */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Zap className="inline-block text-crypto-purple" size={24} />
            Преимущества нашего курса:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">1</div>
                Реальные кейсы
              </h3>
              <p className="text-gray-700">Разбор успешных и провальных инвестиционных решений на реальных историях из рынка с анализом причин</p>
            </div>
            
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">2</div>
                Торговые симуляторы
              </h3>
              <p className="text-gray-700">Специальные тренажеры для практики без риска потери реальных средств с историческими данными</p>
            </div>
            
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">3</div>
                Профессиональные инструменты
              </h3>
              <p className="text-gray-700">Доступ к премиум аналитическим платформам и торговым инструментам на период обучения</p>
            </div>
            
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">4</div>
                Сообщество инвесторов
              </h3>
              <p className="text-gray-700">Закрытый клуб для общения с единомышленниками и обмена опытом, доступ на весь период обучения</p>
            </div>
          </div>
        </div>
        
        {/* ROI Calculator Preview - Enhanced with better visuals */}
        <div className="bg-blue-50 p-8 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-700 mb-5">Оценка потенциальной доходности:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="text-xs text-gray-500 mb-2">Начальные инвестиции</div>
              <div className="font-bold text-xl text-blue-700 mb-2">100 000 ₽</div>
              <div className="text-green-500 text-sm mb-3">+25% / 1 год</div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div className="h-full rounded-full bg-green-500 w-1/4"></div>
              </div>
              <div className="text-sm mt-2 text-gray-600">Консервативный портфель</div>
            </div>
            <div className="p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="text-xs text-gray-500 mb-2">Диверсифицированный портфель</div>
              <div className="font-bold text-xl text-blue-700 mb-2">100 000 ₽</div>
              <div className="text-green-500 text-sm mb-3">+42% / 1 год</div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div className="h-full rounded-full bg-green-500 w-[42%]"></div>
              </div>
              <div className="text-sm mt-2 text-gray-600">Сбалансированный портфель</div>
            </div>
            <div className="p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all text-center">
              <div className="text-xs text-gray-500 mb-2">С оптимизацией рисков</div>
              <div className="font-bold text-xl text-blue-700 mb-2">100 000 ₽</div>
              <div className="text-green-500 text-sm mb-3">+32% / 1 год</div>
              <div className="w-full h-2 bg-gray-100 rounded-full">
                <div className="h-full rounded-full bg-green-500 w-[32%]"></div>
              </div>
              <div className="text-sm mt-2 text-gray-600">Умеренно-агрессивный портфель</div>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center">
            * Данные на основе исторических показателей. Не является инвестиционной рекомендацией.
            Доходность в прошлом не гарантирует доходность в будущем.
          </p>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BitcoinCoursePage;
