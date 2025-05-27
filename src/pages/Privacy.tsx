
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  return (
    <>
      <SEOHead 
        title="Политика конфиденциальности - КриптоКурсы"
        description="Политика конфиденциальности КриптоКурсы. Узнайте, как мы собираем, используем и защищаем ваши персональные данные."
        canonical="https://cryptokursy.ru/privacy"
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main className="container mx-auto px-4 py-12 max-w-4xl">
          <h1 className="text-4xl font-bold text-blue-800 text-center mb-8">Политика конфиденциальности</h1>
          <div className="text-center text-gray-500 italic mb-8">Последнее обновление: 27 мая 2024 года</div>

          <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">1. Общие положения</h2>
              <p className="text-gray-700">Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей сайта cryptokursy.ru (далее — «Сайт»).</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">2. Сбор персональных данных</h2>
              <p className="text-gray-700 mb-3">Мы собираем следующие персональные данные:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Имя и фамилия</li>
                <li>Адрес электронной почты</li>
                <li>Номер телефона</li>
                <li>Данные об использовании сайта</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">3. Цели обработки данных</h2>
              <p className="text-gray-700 mb-3">Персональные данные используются для:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Предоставления образовательных услуг</li>
                <li>Связи с пользователями</li>
                <li>Улучшения качества сервиса</li>
                <li>Выполнения договорных обязательств</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">4. Права пользователей</h2>
              <p className="text-gray-700 mb-3">Вы имеете право:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Запросить информацию о ваших персональных данных</li>
                <li>Требовать исправления неточных данных</li>
                <li>Запросить удаление ваших данных</li>
                <li>Отозвать согласие на обработку данных</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">5. Безопасность данных</h2>
              <p className="text-gray-700">Мы принимаем необходимые меры для защиты ваших персональных данных от несанкционированного доступа, изменения, раскрытия или уничтожения.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">6. Файлы cookie</h2>
              <p className="text-gray-700">Сайт использует файлы cookie для улучшения пользовательского опыта и анализа трафика. Вы можете настроить ваш браузер для отклонения файлов cookie.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">7. Изменения в политике</h2>
              <p className="text-gray-700">Мы оставляем за собой право изменять данную Политику конфиденциальности. Актуальная версия всегда доступна на данной странице.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-blue-800 mb-4">8. Контактная информация</h2>
              <p className="text-gray-700 mb-3">По вопросам, связанным с обработкой персональных данных, обращайтесь:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Email: privacy@cryptokursy.ru</li>
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

export default Privacy;
