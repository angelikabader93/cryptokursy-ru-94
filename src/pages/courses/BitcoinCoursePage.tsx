
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check } from 'lucide-react';

const BitcoinCoursePage = () => {
  return (
    <CourseLayout 
      courseTitle="Биткоин и альткоины" 
      courseImage="https://images.unsplash.com/photo-1605792657660-596af9009e82?q=80&w=2002"
      courseSlug="bitcoin-and-altcoins"
      level="Средний"
      price="Платно"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">О чем этот курс?</h2>
          <p className="text-gray-700">
            Курс <strong>"Биткоин и альткоины"</strong> представляет собой комплексное руководство по инвестированию в криптовалюты. Вы изучите основы анализа рынка, различные инвестиционные стратегии и научитесь формировать сбалансированный криптопортфель. Курс сочетает теоретические знания и практические навыки для успешного инвестирования в Биткоин и альтернативные криптовалюты.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Что вы изучите:</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Фундаментальные отличия Биткоина от других криптовалют</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Методы анализа криптовалютного рынка (технический и фундаментальный)</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Стратегии инвестирования и управления рисками в криптовалютах</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Принципы формирования и управления криптовалютным портфелем</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Оценка перспективности альткоинов и новых токенов</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Налогообложение криптовалютных операций и правовые аспекты</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Программа курса:</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 1: Биткоин – первая и главная криптовалюта</h3>
              <p className="text-gray-600">История, технические особенности, экономическая модель, роль в криптоэкосистеме.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 2: Альткоины и их категории</h3>
              <p className="text-gray-600">Классификация криптовалют, основные проекты, их технологии и отличия.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 3: Анализ криптовалютного рынка</h3>
              <p className="text-gray-600">Фундаментальный и технический анализ, индикаторы, чтение графиков.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 4: Инвестиционные стратегии</h3>
              <p className="text-gray-600">Долгосрочные и краткосрочные стратегии, доллар-костинг, стейкинг, ликвидность.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 5: Управление портфелем</h3>
              <p className="text-gray-600">Диверсификация, ребалансировка, управление рисками, психология инвестора.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 6: Налоги и правовые аспекты</h3>
              <p className="text-gray-600">Регуляторная среда, декларирование, налоговая оптимизация, правовые риски.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Для кого этот курс?</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Для инвесторов, желающих диверсифицировать портфель криптовалютами</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Для тех, кто уже владеет криптовалютой и хочет научиться управлять инвестициями</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Для криптоэнтузиастов, стремящихся понимать рыночные тренды и формировать стратегии</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Для начинающих трейдеров, желающих освоить основы анализа и торговли криптовалютами</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Преимущества нашего курса:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Реальные кейсы</h3>
              <p>Разбор успешных и провальных инвестиционных решений</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Торговые симуляторы</h3>
              <p>Практика без риска потери реальных средств</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Профессиональные инструменты</h3>
              <p>Доступ к аналитическим платформам и инструментам</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Сообщество инвесторов</h3>
              <p>Общение с единомышленниками и обмен опытом</p>
            </div>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BitcoinCoursePage;
