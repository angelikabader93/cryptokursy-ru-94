
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from '@/hooks/use-toast';
import { sendLeadToWebhook } from '@/utils/webhookService';

const MarathonSection = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Отправляем данные на веб-хук
      const response = await sendLeadToWebhook({
        name,
        phone,
        source: "Марафон форма"
      });
      
      console.log("Результат отправки:", response);
      
      if (response.success) {
        toast({
          title: "Успешно!",
          description: "Вы зарегистрированы на марафон. Мы свяжемся с вами в ближайшее время.",
        });
        
        // Reset form
        setName('');
        setPhone('');
      } else {
        toast({
          title: "Внимание",
          description: "Запрос отправлен, но возможны проблемы с обработкой. Пожалуйста, попробуйте позже.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Ошибка при отправке формы:", error);
      toast({
        title: "Ошибка",
        description: "Произошла ошибка при регистрации. Пожалуйста, попробуйте позже или свяжитесь с нами.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="marathon" className="py-16 bg-gradient-to-r from-crypto-blue/10 to-crypto-purple/10">
      <div className="container mx-auto px-4">
        <h2 className="section-title mb-8">Обязательно участвуйте в этом марафоне, чтобы</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="mb-10">
              <div className="inline-block bg-crypto-lightPurple text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold mb-4">
                01
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Получить конкретные и актуальные знания от эксперта
              </h3>
              <p className="text-gray-600">
                Который имеет большой авторитет в мире блокчейна, сооснователь и инвестор большого количества криптопроектов, видит, как изнутри создаются новации, которые и развивают рынок.
              </p>
            </div>
            
            <div className="mb-10">
              <div className="inline-block bg-crypto-lightPurple text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold mb-4">
                02
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Лично задать свои вопросы эксперту
              </h3>
              <p className="text-gray-600">
                То, что волнует вас прямо сейчас по теме инвестирования в криптоактивы и создания пассивного дохода.
              </p>
            </div>
            
            <div className="mb-10">
              <div className="inline-block bg-crypto-lightPurple text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold mb-4">
                03
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Оценить перспективы криптовалютного рынка
              </h3>
              <p className="text-gray-600">
                На данный момент и насколько он может вырасти в будущем.
              </p>
            </div>
          </div>
          
          <div>
            <div className="mb-10">
              <div className="inline-block bg-crypto-lightPurple text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold mb-4">
                04
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Поработать с разными инструментами заработка
              </h3>
              <p className="text-gray-600">
                На криптовалютах и решить, как именно вы будете создавать доход на «крипте».
              </p>
            </div>
            
            <div className="mb-10">
              <div className="inline-block bg-crypto-lightPurple text-white rounded-full h-10 w-10 flex items-center justify-center text-lg font-bold mb-4">
                05
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Сделать первые практические шаги в криптоинвестировании
              </h3>
              <p className="text-gray-600">
                Под руководством опытного наставника, чтобы избежать ошибок и потерь.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center bg-white rounded-lg shadow-lg p-8">
          <div>
            <h3 className="text-2xl font-bold text-crypto-blue mb-6">Программа марафона</h3>
            
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h4 className="text-xl font-bold text-crypto-purple mb-2">1 День</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-crypto-orange mr-2">•</span>
                  <span>Web 3.0: интернет будущего</span>
                </li>
                <li className="flex items-start">
                  <span className="text-crypto-orange mr-2">•</span>
                  <span>Цикличность и перспективы развития криптoрынка</span>
                </li>
                <li className="flex items-start">
                  <span className="text-crypto-orange mr-2">•</span>
                  <span>Почему криптоактивы - это не поздно?</span>
                </li>
                <li className="flex items-start">
                  <span className="text-crypto-orange mr-2">•</span>
                  <span>Практическое задание: формулируем цели по заработку</span>
                </li>
              </ul>
            </div>
            
            <div className="mb-6 pb-6 border-b border-gray-200">
              <h4 className="text-xl font-bold text-crypto-purple mb-2">2 День</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-crypto-orange mr-2">•</span>
                  <span>Что такое BlockChain и принципы его работы</span>
                </li>
                <li className="flex items-start">
                  <span className="text-crypto-orange mr-2">•</span>
                  <span>Биткоин, Эфириум и другие криптовалюты</span>
                </li>
                <li className="flex items-start">
                  <span className="text-crypto-orange mr-2">•</span>
                  <span>Ошибки начинающих инвесторов и как их избежать</span>
                </li>
                <li className="flex items-start">
                  <span className="text-crypto-orange mr-2">•</span>
                  <span>Практическое задание: открываем криптокошелек</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-center text-crypto-blue mb-6">Участвовать в марафоне</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  placeholder="Ваше имя"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full p-3 bg-white"
                />
              </div>
              
              <div>
                <Input
                  type="tel"
                  placeholder="Номер телефона"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="w-full p-3 bg-white"
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full py-6 bg-crypto-orange hover:bg-orange-600 text-white font-bold"
                disabled={isLoading}
              >
                {isLoading ? 'Отправка...' : 'Участвовать'}
              </Button>
              
              <p className="text-xs text-center text-gray-500">
                Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </form>
            
            <div className="mt-6 bg-crypto-blue/5 rounded p-4">
              <h4 className="font-bold text-crypto-blue">Бонусы марафона:</h4>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start text-sm">
                  <span className="text-crypto-orange mr-2">✓</span>
                  <span>10 перспективных проектов на 2025 год</span>
                </li>
                <li className="flex items-start text-sm">
                  <span className="text-crypto-orange mr-2">✓</span>
                  <span>Доступ в закрытый чат с экспертами</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarathonSection;
