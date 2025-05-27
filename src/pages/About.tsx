
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseBreadcrumbs from "@/components/CourseBreadcrumbs";

const About = () => {
  const breadcrumbs = [
    { name: "Главная", href: "/" },
    { name: "О нас" }
  ];

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "КриптоКурсы",
    "url": "https://cryptokursy.ru/",
    "logo": "https://cryptokursy.ru/lovable-uploads/54c1129e-1672-4f65-8aff-6054cfa2a538.png",
    "description": "Образовательная платформа по криптовалютам и блокчейну",
    "foundingDate": "2017",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+7-999-123-45-67",
      "contactType": "customer service",
      "email": "info@cryptokursy.ru"
    }
  };

  return (
    <>
      <SEOHead 
        title="О нас - КриптоКурсы | Эксперты в области криптовалют"
        description="Узнайте больше о команде КриптоКурсы. Опытные эксперты, которые помогают изучать криптовалюты с 2017 года. Более 10,000 довольных студентов."
        canonical="https://cryptokursy.ru/about"
        ogImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071"
        structuredData={organizationSchema}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <section className="bg-gradient-to-br from-blue-800 via-blue-600 to-blue-400 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <CourseBreadcrumbs breadcrumbs={breadcrumbs} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">О нас</h1>
            <p className="text-xl mb-8 text-blue-100">Команда экспертов, которая помогает изучать криптовалюты с 2017 года</p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-blue-200 text-sm">Довольных студентов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">7</div>
                <div className="text-blue-200 text-sm">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">25+</div>
                <div className="text-blue-200 text-sm">Курсов и программ</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9★</div>
                <div className="text-blue-200 text-sm">Средний рейтинг</div>
              </div>
            </div>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Наша миссия</h2>
            <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <p className="text-lg mb-6 text-gray-700">
                Мы верим, что каждый человек заслуживает доступа к качественному образованию в области криптовалют и блокчейн-технологий. 
                Наша миссия — сделать сложные концепции понятными и доступными для всех, независимо от уровня технической подготовки.
              </p>
              <p className="text-lg text-gray-700">
                За 7 лет работы мы помогли более чем 10,000 студентам освоить мир криптовалют, создать свои первые инвестиционные портфели 
                и обрести финансовую независимость через понимание новых технологий.
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Наша команда</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-4xl">👨‍💼</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Алексей Петров</h3>
                <p className="font-medium mb-3">Основатель и CEO</p>
                <p className="text-gray-600 text-sm">Инвестор в криптовалюты с 2013 года. Создал первые курсы в России по Bitcoin. Бывший аналитик Goldman Sachs.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-4xl">👩‍💻</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Мария Сидорова</h3>
                <p className="font-medium mb-3">Главный технический эксперт</p>
                <p className="text-gray-600 text-sm">Блокчейн-разработчик с 6-летним опытом. Участвовала в создании более 20 DeFi проектов. Ex-Ethereum Foundation.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-4xl">👨‍🎓</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Дмитрий Козлов</h3>
                <p className="font-medium mb-3">Ведущий преподаватель</p>
                <p className="text-gray-600 text-sm">Трейдер с 10-летним опытом на традиционных и криптовалютных рынках. Автор популярного Telegram-канала о криптовалютах.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center text-4xl">👩‍🏫</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2">Анна Волкова</h3>
                <p className="font-medium mb-3">Методист и куратор</p>
                <p className="text-gray-600 text-sm">Специалист по образовательным технологиям. Помогает структурировать знания и делать обучение максимально эффективным.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Наши достижения</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🏆 Лучшая образовательная платформа</h3>
                <p className="text-gray-600">Награда "Выбор пользователей" на CryptoAwards 2023</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">📈 98% успешных выпускников</h3>
                <p className="text-gray-600">98% наших студентов успешно создают свои первые инвестиционные портфели</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🌍 Международное признание</h3>
                <p className="text-gray-600">Наши курсы переведены на 5 языков и доступны в 25 странах</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">💼 Партнерства</h3>
                <p className="text-gray-600">Сотрудничаем с ведущими криптобиржами и блокчейн-проектами</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-blue-800 text-center mb-8">Почему выбирают нас</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🎯 Практический подход</h3>
                <p className="text-gray-600">Все наши курсы основаны на реальном опыте и содержат практические задания с настоящими криптовалютами.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🔄 Постоянное обновление</h3>
                <p className="text-gray-600">Криптомир меняется быстро, поэтому мы обновляем материалы курсов каждые 2-3 месяца.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">👥 Поддержка сообщества</h3>
                <p className="text-gray-600">Каждый студент получает доступ к закрытому сообществу единомышленников и экспертов.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">🛡️ Гарантия качества</h3>
                <p className="text-gray-600">Мы настолько уверены в качестве наших курсов, что предлагаем 14-дневную гарантию возврата средств.</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default About;
