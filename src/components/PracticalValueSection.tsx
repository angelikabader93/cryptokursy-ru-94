
import React from 'react';
import { Check } from 'lucide-react';

const PracticalValueSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">Фишки курса</h2>
        <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
          Наши курсы фокусируются на практических результатах, а не на теории, которую вы можете найти бесплатно
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-crypto-blue mb-3">Мини-воркшопы</h3>
            <p className="text-gray-600 mb-4">
              <span className="font-bold">70% практики</span>, чтобы не просто слушать, но сразу делать. Вы получаете реальные навыки, а не просто информацию.
            </p>
            <div className="flex items-center text-green-600">
              <Check className="mr-2" />
              <span>Практические задания на каждом уроке</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-crypto-blue mb-3">Индивидуальные созвоны</h3>
            <p className="text-gray-600 mb-4">
              Персональное внимание к вашим вопросам и задачам. Мы помогаем решить именно ваши проблемы.
            </p>
            <div className="flex items-center text-green-600">
              <Check className="mr-2" />
              <span>Личное сопровождение от экспертов</span>
            </div>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-100 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-crypto-blue mb-3">Быстрые результаты</h3>
            <p className="text-gray-600 mb-4">
              Первая прибыль уже после первых уроков. Мы даем конкретные инструменты, которые работают.
            </p>
            <div className="flex items-center text-green-600">
              <Check className="mr-2" />
              <span>Проверенные стратегии заработка</span>
            </div>
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <h3 className="text-2xl font-bold text-crypto-blue mb-4">Кому и зачем?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-8">
            <div className="text-left">
              <h4 className="text-xl font-bold text-crypto-purple mb-3">Для осторожных и осознанных</h4>
              <p className="text-gray-600">
                Кто понимает что рынок сложный с большим количеством подводных камней. Нужен инструмент который даст достаточно объёмную, глубокую и достоверную информацию.
              </p>
            </div>
            <div className="text-left">
              <h4 className="text-xl font-bold text-crypto-purple mb-3">Для тех у кого мало свободного времени</h4>
              <p className="text-gray-600">
                Кто видит перспективы, но не имеет достаточного времени, чтобы во всем разобраться. Нужен инструмент в котором без риска и сложной терминологии даст хорошую оценку активу.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalValueSection;
