
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check } from 'lucide-react';

const BlockchainCoursePage = () => {
  return (
    <CourseLayout 
      courseTitle="Блокчейн и криптовалюты" 
      courseImage="https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=2032"
      courseSlug="blockchain-and-crypto"
      level="Средний"
      price="Платно"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">О чем этот курс?</h2>
          <p className="text-gray-700">
            Курс <strong>"Блокчейн и криптовалюты"</strong> — это углубленное изучение технологии блокчейн и ее применения в мире цифровых валют. Этот курс подойдет для тех, кто уже знаком с основами криптовалют и хочет расширить свои знания в области технической стороны блокчейна, смарт-контрактов и принципов работы различных криптопроектов.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Что вы изучите:</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Детальное понимание архитектуры и принципов работы блокчейна</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Различия между типами блокчейнов: публичные, частные, консорциумные</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Технологию и применение смарт-контрактов в различных сферах</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Особенности различных криптовалютных платформ и их технические отличия</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Основы децентрализованных финансов (DeFi) и их возможности</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Практическое взаимодействие с блокчейн-протоколами и платформами</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Программа курса:</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 1: Архитектура блокчейна</h3>
              <p className="text-gray-600">Распределенные реестры, хеширование, блоки и цепочки, механизмы консенсуса.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 2: Глубокое погружение в смарт-контракты</h3>
              <p className="text-gray-600">Принципы работы, языки программирования, безопасность и аудит смарт-контрактов.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 3: Исследование экосистем Ethereum, Solana, Polkadot</h3>
              <p className="text-gray-600">Технические особенности, преимущества и недостатки различных блокчейн-платформ.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 4: Децентрализованные финансы (DeFi)</h3>
              <p className="text-gray-600">Протоколы DeFi, ликвидность, кредитование, обмен, стейкинг и фарминг.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 5: Практическое взаимодействие с блокчейном</h3>
              <p className="text-gray-600">Работа с кошельками, взаимодействие со смарт-контрактами, мониторинг транзакций.</p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 6: Основы безопасности в блокчейн-разработке</h3>
              <p className="text-gray-600">Типичные уязвимости, атаки и защита, лучшие практики безопасности.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Для кого этот курс?</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Для тех, кто уже знаком с основами криптовалют и хочет углубить свои знания</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Для разработчиков, желающих понять принципы работы блокчейна и смарт-контрактов</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Для предпринимателей, ищущих возможности применения блокчейна в своем бизнесе</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-blue-500 mt-1 flex-shrink-0" />
              <span>Для энтузиастов DeFi, стремящихся понять принципы работы протоколов</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Преимущества нашего курса:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Актуальное содержание</h3>
              <p>Материалы постоянно обновляются с учетом последних тенденций</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Практические проекты</h3>
              <p>Работа с реальными блокчейнами и смарт-контрактами</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Поддержка экспертов</h3>
              <p>Ответы на вопросы от специалистов с опытом в индустрии</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Сертификация</h3>
              <p>Подтверждение ваших знаний по окончании курса</p>
            </div>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BlockchainCoursePage;
