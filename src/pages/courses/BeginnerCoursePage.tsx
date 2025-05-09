
import React from 'react';
import CourseLayout from '@/components/CourseLayout';
import { Check } from 'lucide-react';

const BeginnerCoursePage = () => {
  return (
    <CourseLayout 
      courseTitle="Криптовалюта для чайников" 
      courseImage="https://images.unsplash.com/photo-1516245834210-c4c142787335?q=80&w=2069"
      courseSlug="crypto-for-beginners"
      level="Новичок"
      price="Бесплатно"
      popular={true}
    >
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">О чем этот курс?</h2>
          <p className="text-gray-700">
            Курс <strong>"Криптовалюта для чайников"</strong> разработан специально для тех, кто только начинает свой путь в мир цифровых валют. Независимо от вашего опыта и технических знаний, этот курс поможет вам получить базовое понимание блокчейна и криптовалют в понятной и доступной форме.
          </p>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Что вы изучите:</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <Check className="mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>Основы технологии блокчейн и принципы ее работы</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>Что такое криптовалюты и чем они отличаются от традиционных денег</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>Как создать и безопасно использовать криптокошелек</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>Как покупать, продавать и хранить криптовалюты без риска</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>Основные термины и понятия в мире криптовалют</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>Как избежать мошенников и распознать опасные схемы</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Программа курса:</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 1: Введение в мир криптовалют</h3>
              <p className="text-gray-600">История возникновения, основные принципы работы, преимущества и недостатки.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 2: Технология блокчейн для начинающих</h3>
              <p className="text-gray-600">Что такое блокчейн, как он работает и почему это безопасно.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 3: Криптокошельки и безопасность</h3>
              <p className="text-gray-600">Виды кошельков, создание, резервное копирование и лучшие практики безопасности.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 4: Первые шаги в криптовалютном мире</h3>
              <p className="text-gray-600">Как и где купить первую криптовалюту, основные биржи, способы оплаты.</p>
            </div>
            <div className="border-l-4 border-green-500 pl-4 py-2">
              <h3 className="font-bold text-lg">Модуль 5: Заключение и дальнейшие шаги</h3>
              <p className="text-gray-600">Подведение итогов, советы по дальнейшему развитию, дополнительные ресурсы.</p>
            </div>
          </div>
        </div>
        
        <div className="bg-green-50 p-6 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-green-700">Для кого этот курс?</h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <Check className="mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>Для новичков, которые хотят получить базовые знания о криптовалютах</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>Для тех, кто интересуется новыми финансовыми технологиями</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>Для людей, желающих безопасно начать работу с криптовалютами</span>
            </li>
            <li className="flex items-start">
              <Check className="mr-2 text-green-500 mt-1 flex-shrink-0" />
              <span>Для всех, кто хочет понять принципы работы блокчейна без технических сложностей</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold mb-4">Преимущества нашего курса:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Простой язык</h3>
              <p>Объясняем сложные концепции понятными словами</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Практические задания</h3>
              <p>Закрепляете знания через практику</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Доступ навсегда</h3>
              <p>Материалы останутся с вами даже после окончания курса</p>
            </div>
            <div className="bg-crypto-purple/10 p-4 rounded-lg">
              <h3 className="font-bold text-lg text-crypto-purple mb-2">Обновления</h3>
              <p>Курс регулярно обновляется с учетом новинок в отрасли</p>
            </div>
          </div>
        </div>
      </div>
    </CourseLayout>
  );
};

export default BeginnerCoursePage;
