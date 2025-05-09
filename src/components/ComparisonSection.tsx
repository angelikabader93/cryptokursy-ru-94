
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import LeadCaptureModal from './LeadCaptureModal';

const ComparisonSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFreeClick = () => {
    setShowModal(true);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="section-title">Сравнение курсов по криптовалюте</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse text-center">
            <thead className="bg-crypto-lightPurple text-white">
              <tr>
                <th className="p-4 text-left">Курс</th>
                <th className="p-4">Уровень</th>
                <th className="p-4">Формат</th>
                <th className="p-4">Доступ</th>
                <th className="p-4">Наставник</th>
                <th className="p-4">Цена</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b">
                <td className="p-4 font-medium text-left">Крипта для начинающих</td>
                <td className="p-4">Новичок</td>
                <td className="p-4">Онлайн</td>
                <td className="p-4">30 дней</td>
                <td className="p-4 text-center">
                  <X size={18} className="inline-block text-red-500" />
                </td>
                <td className="p-4 font-bold text-green-600 cursor-pointer hover:underline" onClick={handleFreeClick}>
                  Бесплатно
                </td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-4 font-medium text-left">Блокчейн технологии</td>
                <td className="p-4">Средний</td>
                <td className="p-4">Онлайн + практика</td>
                <td className="p-4">90 дней</td>
                <td className="p-4 text-center">
                  <X size={18} className="inline-block text-red-500" />
                </td>
                <td className="p-4 font-bold">15 000 ₽</td>
              </tr>
              <tr className="bg-white border-b">
                <td className="p-4 font-medium text-left">Трейдинг криптовалютами</td>
                <td className="p-4">Средний</td>
                <td className="p-4">Онлайн + практика</td>
                <td className="p-4">Пожизненный</td>
                <td className="p-4 text-center">
                  <Check size={18} className="inline-block text-green-500" />
                </td>
                <td className="p-4 font-bold">29 000 ₽</td>
              </tr>
              <tr className="bg-gray-50 border-b">
                <td className="p-4 font-medium text-left">Премиальная криптошкола</td>
                <td className="p-4">Продвинутый</td>
                <td className="p-4">Индивидуально</td>
                <td className="p-4">Пожизненный</td>
                <td className="p-4 text-center">
                  <Check size={18} className="inline-block text-green-500" />
                </td>
                <td className="p-4 font-bold text-crypto-purple">Премиум</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <h4 className="text-xl font-bold mb-4 text-center">Кому подойдут наши курсы?</h4>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center space-x-3">
              <Check size={20} className="text-green-500 flex-shrink-0" />
              <span><strong>Новички</strong>: Изучите основы крипты и блокчейна с нуля.</span>
            </li>
            <li className="flex items-center space-x-3">
              <Check size={20} className="text-green-500 flex-shrink-0" />
              <span><strong>Инвесторы</strong>: Научитесь анализировать рынок и управлять портфелем.</span>
            </li>
            <li className="flex items-center space-x-3">
              <Check size={20} className="text-green-500 flex-shrink-0" />
              <span><strong>Трейдеры</strong>: Освойте стратегии торговли биткоином и альткоинами.</span>
            </li>
            <li className="flex items-center space-x-3">
              <Check size={20} className="text-green-500 flex-shrink-0" />
              <span><strong>Технари</strong>: Погрузитесь в технологию блокчейна и смарт-контракты.</span>
            </li>
          </ul>
        </div>
      </div>
      <LeadCaptureModal open={showModal} onOpenChange={setShowModal} />
    </section>
  );
};

export default ComparisonSection;
