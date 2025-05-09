
import React from 'react';
import { Check } from 'lucide-react';

const features = [
  {
    title: "Обучение с нуля",
    description: "Подходит для начинающих, без необходимости в предварительных знаниях.",
    icon: Check
  },
  {
    title: "Гибкий формат",
    description: "Онлайн-курсы, которые можно проходить в удобное время.",
    icon: Check
  },
  {
    title: "Практические уроки",
    description: "Реальные кейсы и задания по торговле, инвестициям и блокчейну.",
    icon: Check
  },
  {
    title: "Премиальная криптошкола",
    description: "Получите доступ к эксклюзивным материалам и наставничеству.",
    icon: Check
  },
  {
    title: "Бесплатные вводные уроки",
    description: "Начните изучение крипты без вложений!",
    icon: Check
  },
  {
    title: "Поддержка сообщества",
    description: "Общайтесь с единомышленниками и получайте ответы на вопросы.",
    icon: Check
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Почему стоит выбрать наши курсы по криптовалюте?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="crypto-card flex flex-col items-start">
              <div className="h-12 w-12 rounded-full bg-crypto-lightPurple/20 flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-crypto-purple" />
              </div>
              <h3 className="text-xl font-bold mb-2 text-crypto-blue">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
