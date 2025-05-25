
import React from 'react';
import { TrendingUp, DollarSign, Award } from 'lucide-react';

const StudentResultsSection = () => {
  const results = [
    {
      icon: <TrendingUp className="w-12 h-12 text-green-500" />,
      stat: "127%",
      description: "Средний рост портфеля учеников за первые 6 месяцев",
      student: "Алексей К., 29 лет"
    },
    {
      icon: <DollarSign className="w-12 h-12 text-blue-500" />,
      stat: "₽180,000",
      description: "Заработал на инвестициях в альткоины за год обучения",
      student: "Мария В., 34 года"
    },
    {
      icon: <Award className="w-12 h-12 text-purple-500" />,
      stat: "95%",
      description: "Учеников успешно создали свой первый криптопортфель",
      student: "Общая статистика"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-crypto-blue mb-4">
            Результаты учеников
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Реальные истории успеха наших студентов в мире криптовалют
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {results.map((result, index) => (
            <div key={index} className="text-center bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex justify-center mb-6">
                {result.icon}
              </div>
              <div className="text-4xl font-bold text-crypto-blue mb-4">{result.stat}</div>
              <p className="text-gray-700 mb-4 text-lg">{result.description}</p>
              <p className="text-sm text-gray-500 italic">{result.student}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentResultsSection;
