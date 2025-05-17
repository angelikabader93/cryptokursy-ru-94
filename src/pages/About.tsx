
import React from 'react';
import { Users, Award, BookOpen, LucideGraph } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-crypto-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">О нас</h1>
              <p className="text-xl opacity-90">
                Мы команда экспертов в области криптовалют и блокчейна, 
                объединенных общей миссией сделать крипто-образование 
                доступным и понятным для всех.
              </p>
            </div>
          </div>
        </section>

        {/* История компании */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-crypto-blue">Наша история</h2>
                <p className="mb-4">
                  Компания КриптоСтарт была основана в 2018 году группой энтузиастов криптовалют 
                  и блокчейн-технологий, которые видели огромный потенциал в этой области и 
                  понимали необходимость в качественном образовании.
                </p>
                <p className="mb-4">
                  Начав с небольших вебинаров для друзей и коллег, мы быстро выросли в полноценный 
                  образовательный центр с тысячами выпускников по всему миру.
                </p>
                <p>
                  Сегодня КриптоСтарт — это признанный лидер в области крипто-образования, 
                  предлагающий широкий спектр курсов от базовых до продвинутых, а также 
                  консультационные услуги для бизнеса.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Команда КриптоСтарт" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Миссия и ценности */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-crypto-blue">Миссия и ценности</h2>
              <p className="text-lg">
                Наша миссия — сделать инвестиции в криптовалюты безопасными и доступными для всех 
                через образование, практические навыки и экспертную поддержку.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-crypto-orange/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <Award className="text-crypto-orange w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Экспертность</h3>
                <p>
                  Мы гордимся нашей командой признанных экспертов с многолетним опытом работы 
                  в индустрии криптовалют и блокчейна.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-crypto-purple/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <BookOpen className="text-crypto-purple w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Обучение через практику</h3>
                <p>
                  Мы верим, что лучший способ обучения — это практика. Все наши курсы 
                  включают реальные примеры и практические задания.
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <div className="bg-crypto-blue/10 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  <LucideGraph className="text-crypto-blue w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold mb-4">Постоянное развитие</h3>
                <p>
                  Мир криптовалют никогда не стоит на месте. Мы постоянно обновляем 
                  наши материалы, чтобы отражать последние тенденции и технологии.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Наша команда */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-6 text-crypto-blue">Наша команда</h2>
              <p className="text-lg">
                Познакомьтесь с экспертами, которые делают КриптоСтарт лучшей 
                образовательной платформой по криптовалютам и блокчейну.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full mx-auto w-40 h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Алексей Петров" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Алексей Петров</h3>
                <p className="text-crypto-blue font-medium">Основатель и CEO</p>
                <p className="mt-2">С 2014 года в криптоиндустрии. Бывший аналитик JPMorgan.</p>
              </div>

              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full mx-auto w-40 h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Елена Соколова" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Елена Соколова</h3>
                <p className="text-crypto-blue font-medium">Руководитель обучения</p>
                <p className="mt-2">Эксперт по DeFi и NFT. Автор книги "Блокчейн для всех".</p>
              </div>

              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full mx-auto w-40 h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Дмитрий Иванов" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Дмитрий Иванов</h3>
                <p className="text-crypto-blue font-medium">Технический директор</p>
                <p className="mt-2">Разработчик с 10+ годами опыта. Контрибьютор Ethereum.</p>
              </div>

              <div className="text-center">
                <div className="mb-4 overflow-hidden rounded-full mx-auto w-40 h-40">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" 
                    alt="Анна Новикова" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold">Анна Новикова</h3>
                <p className="text-crypto-blue font-medium">Крипто-аналитик</p>
                <p className="mt-2">Бывший трейдер Goldman Sachs. Эксперт по техническому анализу.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-crypto-blue to-crypto-purple text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-8">
              <h2 className="text-3xl font-bold mb-6">Начните свой путь в мир криптовалют прямо сейчас</h2>
              <p className="text-lg opacity-90 mb-8">
                Присоединяйтесь к нашим курсам и получите все необходимые знания и навыки для 
                успешных инвестиций в криптовалюты.
              </p>
            </div>
            <div className="max-w-lg mx-auto">
              <SignupForm formType="about" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
