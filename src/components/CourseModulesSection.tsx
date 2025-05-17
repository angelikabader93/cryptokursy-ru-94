
import React from 'react';
import { Check } from 'lucide-react';

const CourseModulesSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">О курсе</h2>
        
        <div className="space-y-12 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/6 flex justify-center items-start">
              <img 
                src="https://images.unsplash.com/photo-1621504450181-5d356f61d307?q=80&w=2787"
                alt="Основы инвестирования"
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
            <div className="md:w-5/6">
              <h3 className="text-xl font-bold text-crypto-blue mb-2">
                1. Основы инвестирования и работа с рынком
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Что такое токен сейлы: ICO, IDO, IEO — особенности, риски, преимущества.</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Введение в спотовую торговлю: как устроен рынок, основные термины (ордеры, ликвидность, объемы).</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Как анализировать проекты и токены для долгосрочного роста капитала.</span>
                </li>
              </ul>
              <p className="mt-3 font-bold text-gray-700">
                Результат: Участники получают базовые знания для работы с рынком.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/6 flex justify-center items-start">
              <img 
                src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?q=80&w=2831"
                alt="Практика первых сделок"
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
            <div className="md:w-5/6">
              <h3 className="text-xl font-bold text-crypto-blue mb-2">
                2. Практика первых сделок
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Создание аккаунтов на биржах и работа с кошельками.</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Совершение первых покупок токенов.</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Упражнения на поиск перспективных проектов.</span>
                </li>
              </ul>
              <p className="mt-3 font-bold text-gray-700">
                Результат: Участники совершают свои первые сделки под руководством преподавателя.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/6 flex justify-center items-start">
              <img 
                src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070"
                alt="Анализ криптопроектов"
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
            <div className="md:w-5/6">
              <h3 className="text-xl font-bold text-crypto-blue mb-2">
                3. Глубокий анализ криптопроектов
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Методы отбора проектов: Whitepaper, команда, токеномика.</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Проверка на мошенничество: как избежать скамов и убыточных инвестиций.</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Использование специализированных платформ для анализа.</span>
                </li>
              </ul>
              <p className="mt-3 font-bold text-gray-700">
                Результат: Участники учатся находить качественные проекты, минимизируя риски.
              </p>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-6">
            <div className="md:w-1/6 flex justify-center items-start">
              <img 
                src="https://images.unsplash.com/photo-1561414927-6d86591d0c4f?q=80&w=2796"
                alt="Контроль эмоций"
                className="w-16 h-16 object-cover rounded-full"
              />
            </div>
            <div className="md:w-5/6">
              <h3 className="text-xl font-bold text-crypto-blue mb-2">
                4. Контроль эмоций и психология инвестирования
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Почему эмоции мешают зарабатывать: азарт, паника, жадность.</span>
                </li>
                <li className="flex items-start">
                  <Check className="min-w-5 h-5 text-crypto-orange mr-2" />
                  <span>Методы работы с эмоциями: практические упражнения и техники.</span>
                </li>
              </ul>
              <p className="mt-3 font-bold text-gray-700">
                Результат: Участники осознают важность эмоционального контроля и получают инструменты для работы с собой.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseModulesSection;
