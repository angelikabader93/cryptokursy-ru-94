
import React from 'react';
import { Zap, Video, Phone } from 'lucide-react';

const PracticalValueSection = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Мини-воркшопы",
      description: "Каждую неделю проводим практические мини-воркшопы по актуальным темам криптоиндустрии"
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Индивидуальные созвоны",
      description: "Персональные консультации с экспертами для разбора вашего портфеля и стратегии"
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Быстрые результаты",
      description: "Первые практические навыки уже через неделю обучения, полноценный портфель через месяц"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-crypto-lightPurple/20 to-crypto-purple/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-crypto-blue mb-4">
            Фишки курса
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Уникальные возможности, которые вы получите только у нас
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className="bg-crypto-orange/10 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center text-crypto-orange">
                {feature.icon}
              </div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-crypto-blue">
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

export default PracticalValueSection;
