
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check } from 'lucide-react';

const PremiumCoursePage = () => {
  return (
    <CourseLayout 
      courseTitle="Премиальная криптошкола" 
      courseImage="https://images.unsplash.com/photo-1642543492481-44e81e3914a7?q=80&w=2070"
      courseSlug="premium-crypto-school"
      level="Продвинутый"
      price="Премиум"
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">О чем этот курс?</h2>
          <p className="text-gray-700">
            <strong>"Премиальная криптошкола"</strong> — это эксклюзивная программа индивидуального обучения с лучшими экспертами криптоиндустрии. Это не просто курс, а полное погружение в мир криптовалют и трейдинга с персональным наставником, который адаптирует программу под ваш уровень и цели. Мы предлагаем высокоуровневые знания и индивидуальный подход, чтобы вы могли освоить продвинутые стратегии и добиться конкретных результатов.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Что вы получите:</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="mr-2 text-purple-500 mt-1 flex-shrink-0" />
              <span>Персонального наставника – практикующего трейдера или инвестора с опытом от 5 лет</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-purple-500 mt-1 flex-shrink-0" />
              <span>Индивидуальный план обучения, адаптированный под ваши цели и уровень</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-purple-500 mt-1 flex-shrink-0" />
              <span>Еженедельные персональные занятия и сессии разбора вашего портфеля</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-purple-500 mt-1 flex-shrink-0" />
              <span>Доступ к закрытому сообществу трейдеров и инвесторов премиум-уровня</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-purple-500 mt-1 flex-shrink-0" />
              <span>Эксклюзивные аналитические материалы и прогнозы от команды экспертов</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-purple-500 mt-1 flex-shrink-0" />
              <span>Поддержку 24/7 и быстрые ответы на все ваши вопросы</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Программа обучения включает:</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 1: Стратегический анализ рынка</h3>
              <p className="text-gray-600">Продвинутые методы технического и фундаментального анализа, определение макротрендов.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 2: Профессиональный трейдинг</h3>
              <p className="text-gray-600">Маркет-мейкинг, ликвидность, торговля с кредитным плечом, хеджирование рисков.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 3: Психология трейдинга</h3>
              <p className="text-gray-600">Управление эмоциями, дисциплина, преодоление когнитивных искажений при принятии решений.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 4: Автоматизированный трейдинг</h3>
              <p className="text-gray-600">Создание и настройка торговых ботов, алгоритмические стратегии, бэктестирование.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 5: Управление капиталом и рисками</h3>
              <p className="text-gray-600">Продвинутые техники риск-менеджмента, позиционирование, портфельные стратегии.</p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 6: Налоговое планирование и юридические аспекты</h3>
              <p className="text-gray-600">Легальные стратегии оптимизации налогообложения, работа с юрисдикциями, правовая защита активов.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-purple-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-purple-700">Для кого этот курс?</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <Check className="mr-2 text-purple-500 mt-1 flex-shrink-0" />
              <span>Для амбициозных трейдеров, стремящихся к высоким результатам</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-purple-500 mt-1 flex-shrink-0" />
              <span>Для опытных инвесторов, желающих оптимизировать свои стратегии</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-purple-500 mt-1 flex-shrink-0" />
              <span>Для профессионалов из смежных областей финансов, расширяющих свои компетенции</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-purple-500 mt-1 flex-shrink-0" />
              <span>Для руководителей компаний, изучающих блокчейн-технологии для бизнеса</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Преимущества премиальной криптошколы:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Индивидуальный подход</h3>
              <p>Программа обучения адаптируется под ваши цели и темп</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Эксклюзивные материалы</h3>
              <p>Информация, недоступная в открытых источниках</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">VIP-сообщество</h3>
              <p>Нетворкинг с успешными трейдерами и инвесторами</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Персональные стратегии</h3>
              <p>Разработка уникальных инвестиционных планов</p>
            </div>
          </div>
        </div>
        
        <div className="bg-crypto-purple/5 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-crypto-purple">Отзывы наших учеников:</h2>
          <div className="space-y-4">
            <blockquote className="italic border-l-4 border-crypto-purple pl-4 py-2">
              "Благодаря премиальной криптошколе я смог увеличить доходность своего портфеля на 138% за 6 месяцев. Индивидуальные консультации с наставником помогли избежать типичных ошибок и выработать собственную успешную стратегию."
              <footer className="text-right font-semibold mt-2">— Алексей, предприниматель</footer>
            </blockquote>
            
            <blockquote className="italic border-l-4 border-crypto-purple pl-4 py-2">
              "Я пришла с базовыми знаниями о криптовалютах, но чувствовала, что мне не хватает системного подхода. После обучения в премиальной школе моя уверенность возросла в разы, а мои инвестиционные решения стали намного более взвешенными и успешными."
              <footer className="text-right font-semibold mt-2">— Марина, финансовый аналитик</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default PremiumCoursePage;
