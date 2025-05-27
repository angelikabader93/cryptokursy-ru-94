
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <>
      <SEOHead 
        title="Пользовательское соглашение - КриптоКурсы"
        description="Пользовательское соглашение КриптоКурсы. Правила использования образовательной платформы и условия предоставления услуг."
        canonical="https://cryptokursy.ru/terms"
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Пользовательское соглашение</h1>
          <div className="text-center text-gray-500 italic mb-8">Последнее обновление: 27 мая 2024 года</div>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">1. Общие положения</h2>
              <p className="text-gray-700">Настоящее Пользовательское соглашение регулирует отношения между администрацией сайта cryptokursy.ru и пользователями сайта.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">2. Предмет соглашения</h2>
              <p className="text-gray-700">Администрация сайта предоставляет пользователю доступ к образовательным материалам и курсам по криптовалютам и блокчейн-технологиям.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">3. Права и обязанности пользователя</h2>
              <p className="text-gray-700 mb-3">Пользователь имеет право:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Получать доступ к приобретенным курсам</li>
                <li>Получать техническую поддержку</li>
                <li>Запрашивать возврат средств в соответствии с условиями</li>
              </ul>
              
              <p className="text-gray-700 mb-3">Пользователь обязуется:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Предоставлять достоверную информацию</li>
                <li>Не передавать доступы к курсам третьим лицам</li>
                <li>Соблюдать авторские права</li>
                <li>Не использовать материалы в коммерческих целях без разрешения</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">4. Права и обязанности администрации</h2>
              <p className="text-gray-700 mb-3">Администрация обязуется:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mb-4">
                <li>Предоставлять качественные образовательные материалы</li>
                <li>Обеспечивать техническую поддержку</li>
                <li>Защищать персональные данные пользователей</li>
              </ul>

              <p className="text-gray-700 mb-3">Администрация имеет право:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Изменять содержание курсов</li>
                <li>Ограничивать доступ при нарушении условий</li>
                <li>Изменять условия соглашения</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">5. Оплата и возврат средств</h2>
              <p className="text-gray-700">Оплата курсов производится через доступные на сайте платежные системы. Возврат средств возможен в течение 14 дней с момента покупки при соблюдении условий возврата.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">6. Ответственность сторон</h2>
              <p className="text-gray-700 mb-3">Администрация не несет ответственности за:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Инвестиционные решения, принятые на основе материалов курсов</li>
                <li>Технические сбои, не зависящие от администрации</li>
                <li>Действия третьих лиц</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">7. Интеллектуальная собственность</h2>
              <p className="text-gray-700">Все материалы курсов защищены авторским правом. Запрещается копирование, распространение или использование материалов без письменного разрешения.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">8. Изменение соглашения</h2>
              <p className="text-gray-700">Администрация оставляет за собой право изменять условия настоящего соглашения. Актуальная версия размещается на данной странице.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">9. Разрешение споров</h2>
              <p className="text-gray-700">Все споры решаются путем переговоров. При невозможности достижения соглашения споры рассматриваются в соответствии с законодательством Российской Федерации.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">10. Контактная информация</h2>
              <p className="text-gray-700 mb-3">По вопросам соглашения обращайтесь:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Email: legal@cryptokursy.ru</li>
                <li>Телефон: +7 (999) 123-45-67</li>
              </ul>
            </section>
          </div>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Terms;
