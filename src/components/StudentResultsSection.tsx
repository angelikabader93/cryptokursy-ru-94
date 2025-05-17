
import React from 'react';
import { TrendingUp } from 'lucide-react';

const StudentResultsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-12">Результаты учеников</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold text-xl">Доход ученика: $4602,40</h3>
                <p className="text-green-500 font-bold flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +360% за 3 месяца
                </p>
              </div>
              <div className="bg-crypto-purple text-white py-1 px-3 rounded text-sm font-bold">
                Результат
              </div>
            </div>
            <div className="relative h-[200px] bg-black rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1639322537228-f710d846310a" 
                alt="График роста инвестиций" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <p className="text-2xl font-bold mb-2">$4602,40</p>
                <p className="text-xl text-green-400">+$3602,40 (360%)</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              "После прохождения курса я научился выбирать перспективные проекты и грамотно управлять своим портфелем."
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="font-bold text-xl">Доход ученика: $3290,85</h3>
                <p className="text-green-500 font-bold flex items-center">
                  <TrendingUp className="mr-1 h-4 w-4" />
                  +119% за 2 месяца
                </p>
              </div>
              <div className="bg-crypto-purple text-white py-1 px-3 rounded text-sm font-bold">
                Результат
              </div>
            </div>
            <div className="relative h-[200px] bg-black rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1618160702438-9b02ab6515c9" 
                alt="График роста инвестиций" 
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white">
                <p className="text-2xl font-bold mb-2">$3290,85</p>
                <p className="text-xl text-green-400">+$1790,85 (119%)</p>
              </div>
            </div>
            <p className="mt-4 text-gray-600">
              "Благодаря курсу я смог диверсифицировать свой портфель и минимизировать риски при сохранении высокой доходности."
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            <strong>Это реальные результаты наших учеников</strong>, которые прошли обучение и применили полученные знания на практике. Вы можете добиться таких же или даже лучших результатов!
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentResultsSection;
