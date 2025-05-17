
import React from 'react';
import { Button } from '@/components/ui/button';

const BonusesSection = () => {
  const scrollToSignupForm = () => {
    document.getElementById('signup-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Помимо 2 недельного обучения на курсе, Вы дополнительно получите бонусы:</h2>
        
        <div className="space-y-8 max-w-4xl mx-auto">
          <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md">
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/6 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1633158829799-96bb13cab779?q=80&w=2070"
                  alt="Криптовалютные проекты"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="md:w-5/6">
                <h3 className="text-xl font-bold text-crypto-blue mb-2">
                  Бонус 1: 10 перспективных проектов на 2025 год
                </h3>
                <p className="text-gray-600 mb-4">
                  Список из 10 самых перспективных проектов на 2025 год, в которые можно вложиться уже сейчас и получить прибыль.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
                  <div>
                    <p className="line-through text-gray-500">Обычная цена: 10 000 руб.</p>
                    <p className="font-bold text-green-600">Для участников курса бесплатно</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md">
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/6 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?q=80&w=2574"
                  alt="Закрытый чат"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="md:w-5/6">
                <h3 className="text-xl font-bold text-crypto-blue mb-2">
                  Бонус 2: Доступ в закрытый чат
                </h3>
                <p className="text-gray-600 mb-4">
                  Закрыт чат где опытные специалисты каждый день делятся своим опытом, идеями и важными событиями на которых можно хорошо заработать.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
                  <div>
                    <p className="line-through text-gray-500">Обычная цена: 25 000 руб.</p>
                    <p className="font-bold text-green-600">Для участников курса бесплатно</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 rounded-lg overflow-hidden shadow-md">
            <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6">
              <div className="md:w-1/6 flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070"
                  alt="Аналитические данные"
                  className="w-20 h-20 object-contain"
                />
              </div>
              <div className="md:w-5/6">
                <h3 className="text-xl font-bold text-crypto-blue mb-2">
                  Бонус 3: Доступ на 1 месяц в закрытый канал нашего аналитического отдела
                </h3>
                <p className="text-gray-600 mb-4">
                  Закрытый канал куда наш отдел аналитики скидывает важные сигналы и инсайдерскую информацию, которой пользуется наша команда и на которой мы сами зарабатываем.
                </p>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end">
                  <div>
                    <p className="line-through text-gray-500">Обычная цена: 100 000 руб. в месяц</p>
                    <p className="font-bold text-green-600">Для участников курса бесплатно</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <Button 
            onClick={scrollToSignupForm}
            className="bg-crypto-orange hover:bg-orange-600 text-white font-bold py-6 px-8 text-lg"
          >
            Получить доступ к курсу и бонусам
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BonusesSection;
