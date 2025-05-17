
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
            <div className="relative h-[300px] bg-black rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col bg-black p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <button className="rounded-full bg-gray-800 text-white p-1 mr-2">+</button>
                    <span className="text-white">USD</span>
                  </div>
                  <div className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs">new</div>
                  <div className="bg-orange-500 p-1 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10H4V16H20V10Z" fill="white" />
                      <path d="M4 8H20V6H4V8Z" fill="white" />
                      <path d="M4 18H20V16H4V18Z" fill="white" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center mb-2">
                  <div className="text-white text-3xl font-bold">$4602,4</div>
                  <div className="text-green-500 font-semibold">$3602,4 ↑ 360%</div>
                </div>
                
                <div className="flex-grow relative">
                  <svg viewBox="0 0 300 100" className="w-full h-full absolute">
                    <path 
                      d="M0,90 C20,85 40,70 60,75 C80,80 100,60 120,55 C140,50 160,45 180,40 C200,35 220,30 240,25 C260,20 280,15 300,10" 
                      fill="none" 
                      stroke="#9b87f5" 
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                
                <div className="flex justify-between text-gray-500 text-xs mt-2 mb-4">
                  <span>24ч</span>
                  <span>1Н</span>
                  <span>1М</span>
                  <span>3М</span>
                  <span>6М</span>
                  <span>1Г</span>
                  <span>Все</span>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <button className="border border-gray-600 rounded-full flex items-center px-3 py-2 text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" />
                    </svg>
                    Add Transaction
                  </button>
                  <button className="border border-gray-600 rounded-full flex items-center px-3 py-2 text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12L20 12M20 12L14 6M20 12L14 18" stroke="white" strokeWidth="2" />
                    </svg>
                    Share
                  </button>
                </div>
                
                <div className="flex justify-between border-t border-gray-800 pt-2">
                  <button className="text-white font-medium">Assets</button>
                  <button className="text-gray-500">History</button>
                </div>
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
            <div className="relative h-[300px] bg-black rounded-lg overflow-hidden">
              <div className="w-full h-full flex flex-col bg-black p-4">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <button className="rounded-full bg-gray-800 text-white p-1 mr-2">+</button>
                    <span className="text-white">USD</span>
                  </div>
                  <div className="bg-gray-800 text-white px-2 py-1 rounded-full text-xs">new</div>
                  <div className="bg-orange-500 p-1 rounded-full">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M20 10H4V16H20V10Z" fill="white" />
                      <path d="M4 8H20V6H4V8Z" fill="white" />
                      <path d="M4 18H20V16H4V18Z" fill="white" />
                    </svg>
                  </div>
                </div>
                
                <div className="text-center mb-2">
                  <div className="text-white text-3xl font-bold">$3290,85</div>
                  <div className="text-green-500 font-semibold">$1790,85 ↑ 119%</div>
                </div>
                
                <div className="flex-grow relative">
                  <svg viewBox="0 0 300 100" className="w-full h-full absolute">
                    <path 
                      d="M0,70 C20,72 40,71 60,70 C80,69 100,70 120,69 C140,68 160,69 180,68 C200,67 210,30 240,25 C260,20 280,15 300,10" 
                      fill="none" 
                      stroke="#f97316" 
                      strokeWidth="2"
                    />
                  </svg>
                </div>
                
                <div className="flex justify-between text-gray-500 text-xs mt-2 mb-4">
                  <span>24ч</span>
                  <span>1Н</span>
                  <span>1М</span>
                  <span>3М</span>
                  <span>6М</span>
                  <span>1Г</span>
                  <span>Все</span>
                </div>
                
                <div className="flex gap-2 mb-4">
                  <button className="border border-gray-600 rounded-full flex items-center px-3 py-2 text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 4V20M4 12H20" stroke="white" strokeWidth="2" />
                    </svg>
                    Add Transaction
                  </button>
                  <button className="border border-gray-600 rounded-full flex items-center px-3 py-2 text-white">
                    <svg width="16" height="16" viewBox="0 0 24 24" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 12L20 12M20 12L14 6M20 12L14 18" stroke="white" strokeWidth="2" />
                    </svg>
                    Share
                  </button>
                </div>
                
                <div className="flex justify-between border-t border-gray-800 pt-2">
                  <button className="text-white font-medium">Assets</button>
                  <button className="text-gray-500">History</button>
                </div>
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
