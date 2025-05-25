
import React, { useState } from 'react';
import { Check, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import LeadCaptureModal from './LeadCaptureModal';
import { 
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell
} from '@/components/ui/table';

const ComparisonSection = () => {
  const [showModal, setShowModal] = useState(false);

  const handleFreeClick = () => {
    setShowModal(true);
  };

  return (
    <section className="py-16 bg-gray-50" id="courses">
      <div className="container mx-auto px-4">
        <h3 className="section-title">Сравнение курсов по криптовалюте</h3>
        
        <div className="overflow-x-auto">
          <Table className="w-full min-w-[800px] border-collapse text-center">
            <TableHeader>
              <TableRow>
                <TableHead className="p-4 text-center text-white bg-[#7E69AB]">Курс</TableHead>
                <TableHead className="p-4 text-center text-white bg-[#7E69AB]">Уровень</TableHead>
                <TableHead className="p-4 text-center text-white bg-[#7E69AB]">Формат</TableHead>
                <TableHead className="p-4 text-center text-white bg-[#7E69AB]">Доступ</TableHead>
                <TableHead className="p-4 text-center text-white bg-[#7E69AB]">Наставник</TableHead>
                <TableHead className="p-4 text-center text-white bg-[#7E69AB]">Цена</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-white border-b">
                <TableCell className="p-4 font-medium text-left">
                  <Link to="/courses/crypto-for-beginners" className="hover:text-crypto-orange hover:underline">
                    Крипта для начинающих
                  </Link>
                </TableCell>
                <TableCell className="p-4">Новичок</TableCell>
                <TableCell className="p-4">Онлайн</TableCell>
                <TableCell className="p-4">30 дней</TableCell>
                <TableCell className="p-4 text-center">
                  <X size={18} className="inline-block text-red-500" />
                </TableCell>
                <TableCell className="p-4 font-bold text-green-600 cursor-pointer hover:underline" onClick={handleFreeClick}>
                  Бесплатно
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50 border-b">
                <TableCell className="p-4 font-medium text-left">
                  <Link to="/courses/blockchain-and-crypto" className="hover:text-crypto-orange hover:underline">
                    Блокчейн технологии
                  </Link>
                </TableCell>
                <TableCell className="p-4">Средний</TableCell>
                <TableCell className="p-4">Онлайн + практика</TableCell>
                <TableCell className="p-4">90 дней</TableCell>
                <TableCell className="p-4 text-center">
                  <X size={18} className="inline-block text-red-500" />
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-crypto-blue">15 000 ₽</span>
                    <span className="text-xs text-gray-400 line-through">20 000 ₽</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="bg-white border-b">
                <TableCell className="p-4 font-medium text-left">
                  <Link to="/courses/bitcoin-and-altcoins" className="hover:text-crypto-orange hover:underline">
                    Трейдинг криптовалютами
                  </Link>
                </TableCell>
                <TableCell className="p-4">Средний</TableCell>
                <TableCell className="p-4">Онлайн + практика</TableCell>
                <TableCell className="p-4">Пожизненный</TableCell>
                <TableCell className="p-4 text-center">
                  <Check size={18} className="inline-block text-green-500" />
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-crypto-blue">29 000 ₽</span>
                    <span className="text-xs text-gray-400 line-through">35 000 ₽</span>
                  </div>
                </TableCell>
              </TableRow>
              <TableRow className="bg-gray-50 border-b">
                <TableCell className="p-4 font-medium text-left">
                  <Link to="/courses/premium-crypto-school" className="hover:text-crypto-orange hover:underline">
                    Премиальная криптошкола
                  </Link>
                </TableCell>
                <TableCell className="p-4">Продвинутый</TableCell>
                <TableCell className="p-4">Индивидуально</TableCell>
                <TableCell className="p-4">Пожизненный</TableCell>
                <TableCell className="p-4 text-center">
                  <Check size={18} className="inline-block text-green-500" />
                </TableCell>
                <TableCell className="p-4">
                  <div className="flex flex-col items-center">
                    <span className="font-bold text-crypto-purple">75 000 ₽</span>
                    <span className="text-xs text-gray-400 line-through">100 000 ₽</span>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
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
