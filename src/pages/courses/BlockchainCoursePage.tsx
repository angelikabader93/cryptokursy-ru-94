
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check, Users, Award, BookOpen, Clock, Zap, Code, FileCode, Shield } from 'lucide-react';
import CourseModules from '@/components/CourseModules';
import CourseTestimonials from '@/components/CourseTestimonials';
import CourseFAQ from '@/components/CourseFAQ';
import CourseInstructor from '@/components/CourseInstructor';

const BlockchainCoursePage = () => {
  // Course modules data
  const modules = [
    {
      title: "Архитектура блокчейна",
      description: "Распределенные реестры, хеширование, блоки и цепочки, механизмы консенсуса.",
      duration: "120 минут",
      color: "bg-blue-500",
      lessons: [
        { title: "Введение в распределенные реестры", type: "video" as const, duration: "18 мин" },
        { title: "Хеширование и криптография", type: "video" as const, duration: "22 мин" },
        { title: "Устройство блоков и цепочек", type: "video" as const, duration: "20 мин" },
        { title: "Механизмы консенсуса (PoW, PoS)", type: "video" as const, duration: "25 мин" },
        { title: "Децентрализация и ее преимущества", type: "video" as const, duration: "20 мин" },
        { title: "Безопасность блокчейна", type: "video" as const, duration: "15 мин" },
        { title: "Проверка знаний - Архитектура блокчейна", type: "test" as const }
      ]
    },
    {
      title: "Глубокое погружение в смарт-контракты",
      description: "Принципы работы, языки программирования, безопасность и аудит смарт-контрактов.",
      duration: "180 минут",
      color: "bg-purple-500",
      lessons: [
        { title: "Что такое смарт-контракты", type: "video" as const, duration: "15 мин" },
        { title: "Язык Solidity - основы", type: "video" as const, duration: "25 мин" },
        { title: "Создание первого смарт-контракта", type: "video" as const, duration: "30 мин" },
        { title: "Тестирование смарт-контрактов", type: "video" as const, duration: "20 мин" },
        { title: "Аудит и безопасность", type: "video" as const, duration: "25 мин" },
        { title: "Оптимизация газа", type: "video" as const, duration: "20 мин" },
        { title: "Интеграция с фронтендом", type: "video" as const, duration: "25 мин" },
        { title: "Анализ популярных смарт-контрактов", type: "video" as const, duration: "20 мин" },
        { title: "Практическое задание - Смарт-контракты", type: "test" as const }
      ]
    },
    {
      title: "Исследование экосистем Ethereum, Solana, Polkadot",
      description: "Технические особенности, преимущества и недостатки различных блокчейн-платформ.",
      duration: "150 минут",
      color: "bg-indigo-500",
      lessons: [
        { title: "Архитектура Ethereum", type: "video" as const, duration: "25 мин" },
        { title: "Масштабируемость и слои L2", type: "video" as const, duration: "20 мин" },
        { title: "Экосистема Solana", type: "video" as const, duration: "22 мин" },
        { title: "Архитектура и производительность Solana", type: "video" as const, duration: "18 мин" },
        { title: "Polkadot и парачейны", type: "video" as const, duration: "20 мин" },
        { title: "Кросс-чейн взаимодействие", type: "video" as const, duration: "25 мин" },
        { title: "Сравнительный анализ платформ", type: "video" as const, duration: "20 мин" },
        { title: "Тест - Сравнение платформ", type: "test" as const }
      ]
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      name: "Дмитрий К.",
      position: "Full-stack разработчик",
      content: "Отличный курс для разработчиков, которые хотят погрузиться в блокчейн. Практические задания особенно полезны, позволяют сразу применить знания.",
      rating: 5
    },
    {
      name: "Олег М.",
      position: "Менеджер IT-проектов",
      content: "Очень структурированно и по делу. Курс дал глубокое понимание архитектуры различных блокчейнов и их особенностей. Рекомендую!",
      rating: 5
    },
    {
      name: "Татьяна П.",
      position: "Предприниматель",
      content: "Хотя некоторые технические моменты были сложными, преподаватели очень доступно все объясняют. Теперь гораздо лучше понимаю, как работают смарт-контракты.",
      rating: 4
    }
  ];

  // FAQ data
  const faqItems = [
    {
      question: "Требуются ли навыки программирования для прохождения курса?",
      answer: "Для комфортного прохождения курса желательно иметь базовое понимание программирования (особенно JavaScript). Однако даже без опыта вы сможете освоить материал, просто потребуется больше времени на практические задания."
    },
    {
      question: "Какое оборудование необходимо для выполнения практических заданий?",
      answer: "Достаточно компьютера с современным браузером и доступом в интернет. Для разработки смарт-контрактов и веб-интеграций рекомендуется иметь не менее 8 ГБ оперативной памяти."
    },
    {
      question: "Можно ли получить индивидуальные консультации по моему проекту?",
      answer: "Да, в рамках курса предусмотрены групповые консультации, а также есть возможность заказать индивидуальную сессию с преподавателем для разбора вашего проекта (за дополнительную плату)."
    },
    {
      question: "Как долго действует доступ к материалам курса?",
      answer: "Доступ к материалам курса предоставляется на 6 месяцев с возможностью продления. За это время вы сможете не только изучить все материалы, но и вернуться к ним при необходимости."
    },
    {
      question: "Курс охватывает только технические аспекты или также бизнес-применение?",
      answer: "Курс в основном фокусируется на технических аспектах, но включает модуль о практическом применении блокчейна в бизнесе и обзор успешных кейсов внедрения."
    }
  ];

  return (
    <CourseLayout 
      courseTitle="Блокчейн и криптовалюты" 
      courseImage="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032"
      courseSlug="blockchain-and-crypto"
      level="Средний"
      price="Платно"
    >
      <div className="space-y-12">
        {/* Introduction Section */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-4 text-crypto-blue flex items-center gap-2">
            <BookOpen className="inline-block text-crypto-purple" size={24} /> 
            О чем этот курс?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Курс <strong className="text-gradient bg-gradient-to-r from-crypto-purple to-crypto-lightPurple">
              "Блокчейн и криптовалюты"
            </strong> — это углубленное изучение технологии блокчейн 
            и ее применения в мире цифровых валют. Этот курс подойдет для тех, кто уже знаком с основами 
            криптовалют и хочет расширить свои знания в области технической стороны блокчейна, смарт-контрактов 
            и принципов работы различных криптопроектов.
          </p>
          
          {/* Highlighted Box */}
          <div className="bg-gradient-to-r from-blue-50 to-white mt-6 p-6 rounded-lg border-l-4 border-blue-500 shadow-sm">
            <div className="font-medium text-blue-700 mb-2 text-lg">К концу курса вы сможете:</div>
            <p className="text-gray-700">
              Понимать технические аспекты работы различных блокчейнов, разбираться в смарт-контрактах, 
              взаимодействовать с DeFi-протоколами и оценивать перспективность различных блокчейн-проектов 
              с технической точки зрения.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-blue-500" />
                </div>
                <span className="text-sm text-gray-700">24 видео-урока</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-blue-500" />
                </div>
                <span className="text-sm text-gray-700">12 практических заданий</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-blue-500" />
                </div>
                <span className="text-sm text-gray-700">8 часов контента</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                  <Check className="text-blue-500" />
                </div>
                <span className="text-sm text-gray-700">Доступ к Discord-сообществу</span>
              </div>
            </div>
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
                <span>Детальное понимание архитектуры и принципов работы блокчейна</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Различия между типами блокчейнов: публичные, частные, консорциумные</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Технологию и применение смарт-контрактов в различных сферах</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Особенности различных криптовалютных платформ и их технические отличия</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Основы децентрализованных финансов (DeFi) и их возможности</span>
              </div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <span>Практическое взаимодействие с блокчейн-протоколами и платформами</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Interactive Course Modules */}
        <CourseModules modules={modules} />
        
        {/* Tech Stack Section - Enhanced visual design */}
        <div className="bg-gradient-to-r from-gray-50 to-white p-8 rounded-xl shadow-sm">
          <h2 className="text-xl font-bold mb-6 text-crypto-blue">Технологии, которые вы изучите:</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-5 rounded-lg text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <Code className="text-blue-600" size={28} />
              </div>
              <div className="font-medium text-lg mb-1">Solidity</div>
              <div className="text-gray-500 text-sm">Язык смарт-контрактов</div>
            </div>
            <div className="bg-white p-5 rounded-lg text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <FileCode className="text-blue-600" size={28} />
              </div>
              <div className="font-medium text-lg mb-1">Web3.js</div>
              <div className="text-gray-500 text-sm">Библиотека для взаимодействия</div>
            </div>
            <div className="bg-white p-5 rounded-lg text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <Shield className="text-blue-600" size={28} />
              </div>
              <div className="font-medium text-lg mb-1">MetaMask</div>
              <div className="text-gray-500 text-sm">Криптокошелек</div>
            </div>
            <div className="bg-white p-5 rounded-lg text-center shadow-sm hover:shadow-md transition-all transform hover:-translate-y-1 duration-300">
              <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-3">
                <Code className="text-blue-600" size={28} />
              </div>
              <div className="font-medium text-lg mb-1">Truffle</div>
              <div className="text-gray-500 text-sm">Фреймворк для разработки</div>
            </div>
          </div>
          
          <div className="mt-8 p-5 bg-blue-50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Shield className="text-blue-600" />
              <h3 className="font-semibold text-blue-800">В стоимость курса включено:</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Check className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Доступ к закрытому GitHub-репозиторию с примерами кода</span>
              </div>
              <div className="flex items-start">
                <Check className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Готовые шаблоны смарт-контрактов для ваших проектов</span>
              </div>
              <div className="flex items-start">
                <Check className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">4 еженедельных вебинара с преподавателем</span>
              </div>
              <div className="flex items-start">
                <Check className="text-blue-500 mt-1 mr-2 flex-shrink-0" />
                <span className="text-gray-700">Проверка и код-ревью ваших домашних заданий</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Course Instructor */}
        <CourseInstructor 
          name="Максим Волков"
          position="Blockchain Developer & DeFi Архитектор"
          bio="Максим — один из лидирующих разработчиков блокчейн-решений в России. Имеет за плечами более 50 успешных проектов на Ethereum и Solana. Соавтор нескольких EIP (Ethereum Improvement Proposals)."
          experience={[
            "5+ лет опыта в разработке смарт-контрактов",
            "Автор библиотеки для безопасного взаимодействия с DeFi-протоколами",
            "Победитель международных хакатонов по блокчейну",
            "Консультант нескольких успешных ICO/IDO проектов"
          ]}
        />
        
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
                  <h4 className="font-medium text-blue-800 text-lg">Для продвинутых</h4>
                  <p className="text-gray-600">Для тех, кто уже знаком с основами криптовалют и хочет углубить свои знания</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800 text-lg">Для разработчиков</h4>
                  <p className="text-gray-600">Для разработчиков, желающих понять принципы работы блокчейна и смарт-контрактов</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800 text-lg">Для предпринимателей</h4>
                  <p className="text-gray-600">Для тех, кто ищет возможности применения блокчейна в своем бизнесе</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-all">
              <div className="flex items-start">
                <Check className="mr-3 text-blue-500 mt-1 flex-shrink-0 bg-blue-100 p-1 rounded-full" />
                <div>
                  <h4 className="font-medium text-blue-800 text-lg">Для энтузиастов DeFi</h4>
                  <p className="text-gray-600">Для тех, кто стремится понять принципы работы протоколов</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <CourseFAQ faqItems={faqItems} />
        
        {/* Course Advantages */}
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6 text-crypto-blue flex items-center gap-2">
            <Zap className="inline-block text-crypto-purple" size={24} />
            Преимущества нашего курса:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">1</div>
                Актуальное содержание
              </h3>
              <p className="text-gray-700">Материалы постоянно обновляются с учетом последних технологических тенденций в блокчейн-индустрии</p>
            </div>
            
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">2</div>
                Практические проекты
              </h3>
              <p className="text-gray-700">Работа с реальными блокчейнами и смарт-контрактами на специальных тестовых сетях с пошаговыми инструкциями</p>
            </div>
            
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">3</div>
                Поддержка экспертов
              </h3>
              <p className="text-gray-700">Ответы на вопросы и разбор кода от специалистов с опытом работы в индустрии в течение всего обучения</p>
            </div>
            
            <div className="bg-gradient-to-r from-crypto-purple/5 to-white p-6 rounded-xl border border-crypto-purple/20 hover:shadow-md transition-all">
              <h3 className="font-bold text-lg text-crypto-purple mb-3 flex items-center gap-2">
                <div className="w-10 h-10 bg-crypto-purple/10 rounded-full flex items-center justify-center text-crypto-purple">4</div>
                Сертификация
              </h3>
              <p className="text-gray-700">Подтверждение ваших знаний по блокчейну после успешного прохождения курса с возможностью добавления в LinkedIn</p>
            </div>
          </div>
        </div>
        
        {/* Required Skills Box */}
        <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
          <h3 className="text-lg font-semibold text-blue-700 mb-3">Необходимые навыки для успешного прохождения курса:</h3>
          <ul className="space-y-3">
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
              <span className="text-gray-700">Базовые знания о криптовалютах (понимание основных принципов работы)</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
              <span className="text-gray-700">Понимание основ программирования (желательно JavaScript)</span>
            </li>
            <li className="flex items-center">
              <div className="w-2 h-2 rounded-full bg-blue-500 mr-3"></div>
              <span className="text-gray-700">Общее представление о том, как работают интернет и веб-технологии</span>
            </li>
          </ul>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BlockchainCoursePage;
