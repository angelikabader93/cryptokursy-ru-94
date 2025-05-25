
import React from 'react';
import { BookOpen, Users, Trophy, Star, PlayCircle, MessageCircle } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Обучение с нуля",
      description: "Начните путь в мире криптовалют даже без базовых знаний. Наша программа построена специально для новичков."
    },
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: "Гибкий формат",
      description: "Онлайн-занятия в удобное время, записи уроков и возможность пересматривать материал."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Практические уроки",
      description: "Не только теория, но и практические задания с реальными примерами работы с криптовалютами."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Премиальная криптошкола",
      description: "Углубленные курсы для тех, кто хочет стать профессионалом в области криптовалют и блокчейна."
    },
    {
      icon: <PlayCircle className="w-8 h-8" />,
      title: "Бесплатные вводные уроки",
      description: "Попробуйте наш подход к обучению абсолютно бесплатно и убедитесь в качестве материала."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Поддержка сообщества",
      description: "Присоединяйтесь к активному комьюнити учеников и получайте помощь в изучении крипты."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-crypto-blue mb-4">
            Почему стоит выбрать наши курсы по криптовалюте?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Мы предлагаем комплексный подход к изучению криптовалют: от базовых понятий до продвинутых стратегий инвестирования
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="crypto-card text-center">
              <div className="bg-crypto-orange/10 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center text-crypto-orange">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 text-crypto-blue">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
