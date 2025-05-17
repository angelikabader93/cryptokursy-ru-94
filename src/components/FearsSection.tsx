
import React from 'react';
import { Shield } from 'lucide-react';

const FearsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-crypto-blue/5 to-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">Если вы совсем не разбираетесь в криптовалютах, блокчейне и т.д.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-crypto-lightPurple rounded-full flex items-center justify-center">
              <Shield className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Не понимаете, с чего начать, что делать и как снизить риски
            </h3>
            <p className="text-gray-600">
              Наш курс предоставляет четкий пошаговый план действий для новичков, минимизирующий возможные риски и потери.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md relative">
            <div className="absolute -top-6 -left-6 w-12 h-12 bg-crypto-lightPurple rounded-full flex items-center justify-center">
              <Shield className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Не уверены, что сможете разобраться в теме самостоятельно
            </h3>
            <p className="text-gray-600">
              Мы разработали материалы с учетом нулевого уровня знаний, каждая тема объясняется простым языком с практическими примерами.
            </p>
          </div>
        </div>
        
        <h2 className="section-title mb-8">Если вы уже теряли деньги на трейдинге и инвестировании</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Эксперт поделится своим мнением</h3>
            <p className="text-gray-600 mb-6">
              Почему вы потеряли свои деньги, какие ошибки допускает большинство новичков и как этого избежать
            </p>
            <div className="border-l-4 border-crypto-purple pl-4 py-2 bg-gray-50">
              <h4 className="text-sm font-bold text-crypto-purple uppercase">Спойлер</h4>
              <p className="text-gray-600">
                Основная проблема — в отсутствии полной фундаментальной базы знаний и в неумении анализировать криптоактивы. Это поправимо.
              </p>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Хотите погрузиться в мир блокчейна?</h3>
            <p className="text-gray-600 mb-4">
              Или уже приняли решение изучать криптовалютный рынок и хотите делать это с опытным практикующим экспертом
            </p>
            <p className="text-gray-700 font-bold">
              Наша команда экспертов проведет вас через все этапы, от базовых принципов до продвинутых стратегий, минимизирующих риски потери средств.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FearsSection;
