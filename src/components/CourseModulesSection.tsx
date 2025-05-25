
import React from 'react';
import { BookOpen, TrendingUp, BarChart3, Brain } from 'lucide-react';

const CourseModulesSection = () => {
  const modules = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      number: "1",
      title: "Основы инвестирования и работа с рынком",
      description: "Изучите фундаментальные принципы инвестирования в криптовалюты, анализ рынка и базовые стратегии.",
      lessons: ["Что такое криптовалюты", "Как работает блокчейн", "Основы технического анализа", "Выбор биржи"]
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "2",
      title: "Практика первых сделок",
      description: "Пошаговое руководство по совершению первых сделок, создание портфеля и управление рисками.",
      lessons: ["Создание кошелька", "Первая покупка Bitcoin", "Диверсификация портфеля", "Стоп-лоссы и тейк-профиты"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      number: "3",
      title: "Глубокий анализ криптопроектов",
      description: "Научитесь анализировать криптопроекты, читать WhitePaper и оценивать перспективы инвестиций.",
      lessons: ["Фундаментальный анализ", "Чтение технической документации", "Оценка команды проекта", "Анализ токеномики"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      number: "4",
      title: "Контроль эмоций и психология инвестирования",
      description: "Изучите психологические аспекты трейдинга и научитесь контролировать эмоции при инвестировании.",
      lessons: ["Психология трейдинга", "Управление страхом и жадностью", "Дисциплина в инвестировании", "Долгосрочное планирование"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-crypto-blue mb-4">
            О курсе
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Структурированная программа обучения, которая проведет вас от новичка до уверенного инвестора
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="flex items-start mb-6">
                <div className="bg-crypto-orange/10 rounded-full p-3 mr-4 flex-shrink-0">
                  <div className="text-crypto-orange">
                    {module.icon}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-sm font-bold text-crypto-orange mb-2">Модуль {module.number}</div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-crypto-blue">
                    {module.title}
                  </h3>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6">{module.description}</p>
              
              <div className="space-y-2">
                <div className="text-sm font-semibold text-crypto-blue mb-3">Что изучите:</div>
                {module.lessons.map((lesson, lessonIndex) => (
                  <div key={lessonIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-crypto-orange rounded-full mr-3 flex-shrink-0"></div>
                    {lesson}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseModulesSection;
