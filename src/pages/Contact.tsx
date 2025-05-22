import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-crypto-blue text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Контакты</h1>
              <p className="text-xl opacity-90">
                Свяжитесь с нами любым удобным для вас способом – мы всегда рады общению и новым возможностям для сотрудничества.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-crypto-blue">Наши контакты</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-crypto-purple/10 p-3 rounded-full mr-4">
                      <MapPin className="h-6 w-6 text-crypto-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Адрес</h3>
                      <p className="text-gray-600">Москва, Пресненская набережная, 12, Башня «Федерация», Восток, офис 3507.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-crypto-purple/10 p-3 rounded-full mr-4">
                      <Phone className="h-6 w-6 text-crypto-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Телефон</h3>
                      <p className="text-gray-600">+7 (495) 123-45-67</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-crypto-purple/10 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6 text-crypto-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Email</h3>
                      <p className="text-gray-600">info@cryptokursy.ru</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-crypto-purple/10 p-3 rounded-full mr-4">
                      <Clock className="h-6 w-6 text-crypto-purple" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Время работы</h3>
                      <p className="text-gray-600">Пн-Пт: 9:00 - 19:00</p>
                      <p className="text-gray-600">Сб-Вс: Выходной</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10">
                  <h3 className="font-bold text-xl mb-4">Социальные сети</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="bg-crypto-blue text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-crypto-purple">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-crypto-blue text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-crypto-purple">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10 5.523 0 10-4.477 10-10 0-5.523-4.477-10-10-10zm5.2 15.2h-1.74c-1.012 0-1.74-.728-3.48-2.74-1.302-1.457-1.853-1.656-2.177-1.656-.446 0-.572.127-.572.784v2.522c0 .556-.186.741-.742.741-1.237 0-2.607-.185-4.052-1.555C2.35 12.912 1.324 9.31 1.324 8.9c0-.248.124-.495.63-.495h1.738c.57 0 .752.31.96.804.928 2.223 2.47 4.163 3.11 4.163.235 0 .34-.123.34-.803V9.648c-.072-1.432-.886-1.556-.886-1.556-.123-.248.124-.494.495-.494h2.47c.433 0 .557.31.557.803v3.431c0 .433.186.557.31.557.235 0 .433-.124.866-.526 1.36-1.53 2.347-3.895 2.347-3.895.124-.308.318-.556.804-.556h1.739c.557 0 .68.31.557.618-.247 1.143-2.532 4.327-2.532 4.822 0 .186.062.31.247.495.185.248.803.742 1.175 1.174.866.99 1.544 1.855 1.73 2.47.186.617-.123.99-.68.99z" />
                      </svg>
                    </a>
                    <a href="#" className="bg-crypto-blue text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-crypto-purple">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"/>
                      </svg>
                    </a>
                    <a href="#" className="bg-crypto-blue text-white w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-crypto-purple">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-6 text-crypto-blue">Напишите нам</h2>
                
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                      <input 
                        type="text" 
                        id="name" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crypto-purple"
                        placeholder="Ваше имя"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crypto-purple"
                        placeholder="Ваш email"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Тема</label>
                    <input 
                      type="text" 
                      id="subject" 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crypto-purple"
                      placeholder="Тема сообщения"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                    <textarea 
                      id="message" 
                      rows={5} 
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-crypto-purple"
                      placeholder="Ваше сообщение"
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="bg-crypto-purple hover:bg-purple-700 text-white font-bold py-3 px-6 rounded-md transition-colors w-full"
                  >
                    Отправить сообщение
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        
        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center text-crypto-blue">Как нас найти</h2>
            <div className="h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* Replace with actual map embed code */}
              <div className="w-full h-full flex items-center justify-center bg-gray-300">
                <p className="text-gray-600 text-lg">Карта будет размещена здесь</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-crypto-blue to-crypto-purple text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Остались вопросы?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Запишитесь на бесплатную консультацию, и наш эксперт поможет вам разобраться во всех вопросах, связанных с криптовалютами.
            </p>
            <button className="bg-crypto-orange hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-md transition-colors text-lg">
              Получить консультацию
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
