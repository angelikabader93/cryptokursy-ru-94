
import React from 'react';
import { useForm } from 'react-hook-form';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { toast } from '@/components/ui/use-toast';

const Contact = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  });

  const onSubmit = (data: any) => {
    // In a real app, this would send data to a backend
    console.log('Form submitted:', data);
    
    // Show success toast
    toast({
      title: "Сообщение отправлено",
      description: "Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.",
    });
    
    // Reset form
    reset();
  };

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
                Есть вопросы или предложения? Свяжитесь с нами, и мы будем рады помочь!
              </p>
            </div>
          </div>
        </section>

        {/* Контактная информация и форма */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Контактная информация */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-crypto-blue">Контактная информация</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-crypto-orange/10 p-3 rounded-full mr-4">
                      <MapPin className="text-crypto-orange w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Адрес</h3>
                      <p>Москва, ул. Пресненская набережная, 12</p>
                      <p className="text-sm text-gray-600 mt-1">Башня "Федерация", 46 этаж</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-crypto-purple/10 p-3 rounded-full mr-4">
                      <Phone className="text-crypto-purple w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Телефон</h3>
                      <p>+7 (495) 123-45-67</p>
                      <p className="text-sm text-gray-600 mt-1">Пн-Пт, с 9:00 до 18:00</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-crypto-blue/10 p-3 rounded-full mr-4">
                      <Mail className="text-crypto-blue w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email</h3>
                      <p>info@cryptostart.ru</p>
                      <p className="text-sm text-gray-600 mt-1">Мы отвечаем в течение 24 часов</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-green-100 p-3 rounded-full mr-4">
                      <Clock className="text-green-600 w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Часы работы</h3>
                      <p>Понедельник - Пятница: 9:00 - 18:00</p>
                      <p>Суббота - Воскресенье: Выходные</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h3 className="text-xl font-bold mb-4">Социальные сети</h3>
                  <div className="flex space-x-4">
                    <a href="https://www.instagram.com/holders.club/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-crypto-orange hover:text-white transition-colors p-3 rounded-full">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                      </svg>
                    </a>
                    <a href="https://www.linkedin.com/company/holder-io/" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-crypto-orange hover:text-white transition-colors p-3 rounded-full">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href="https://twitter.com/Holder_io" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-crypto-orange hover:text-white transition-colors p-3 rounded-full">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.026 10.026 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.16a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.937 4.937 0 004.604 3.417 9.868 9.868 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </a>
                    <a href="https://vk.com/holder_io" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-crypto-orange hover:text-white transition-colors p-3 rounded-full">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 16.424h-1.576c-.594 0-.776-.472-1.846-1.539-1.043-.949-1.458-.949-1.695-.949-.345 0-.443.098-.443.594v1.404c0 .42-.136.541-1.26.541a6.439 6.439 0 0 1-5.033-3.035c-2.052-2.895-2.594-5.068-2.594-5.513 0-.239.097-.458.592-.458h1.578c.444 0 .616.214.788.726.854 2.468 2.291 4.631 2.883 4.631.223 0 .323-.104.323-.668V8.416c-.064-1.193-.689-1.293-.689-1.719 0-.205.166-.411.455-.411h2.481c.34 0 .45.19.45.61v3.246c0 .344.152.463.246.463.222 0 .408-.119.815-.517.915-1.028 1.572-2.615 1.572-2.615.086-.189.285-.377.676-.377h1.576c.479 0 .59.248.479.588-.199.927-2.129 3.639-2.129 3.639-.165.277-.231.399 0 .711.168.236.72.725 1.089 1.168.759.899 1.339 1.652 1.501 2.169.155.517-.093.777-.585.777z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* Форма обратной связи */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-crypto-blue">Свяжитесь с нами</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Имя</label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-crypto-blue ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Ваше имя"
                      {...register("name", { required: "Имя обязательно для заполнения" })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name.message as string}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-crypto-blue ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="Ваш email адрес"
                      {...register("email", { 
                        required: "Email обязателен для заполнения",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Неверный формат email"
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message as string}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Телефон</label>
                    <input
                      id="phone"
                      type="tel"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-crypto-blue ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      placeholder="+7 (___) ___-__-__"
                      {...register("phone")}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Сообщение</label>
                    <textarea
                      id="message"
                      className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-crypto-blue ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
                      rows={5}
                      placeholder="Ваше сообщение..."
                      {...register("message", { required: "Сообщение обязательно для заполнения" })}
                    ></textarea>
                    {errors.message && (
                      <p className="mt-1 text-sm text-red-600">{errors.message.message as string}</p>
                    )}
                  </div>
                  
                  <Button type="submit" className="bg-crypto-blue hover:bg-crypto-blue/90 text-white px-8 py-3 rounded-lg w-full sm:w-auto flex items-center justify-center">
                    <Send className="mr-2 h-5 w-5" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>

        {/* Карта */}
        <section className="py-0">
          <div className="h-96 w-full">
            <iframe
              title="Наш офис"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5458620794036!2d37.5344196772283!3d55.74957497975242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54bdac6bc9bd5%3A0x5d2cc0ba3d22ef8e!2z0JHQsNGI0L3RjyDQpNC10LTQtdGA0LDRhtC40Y8!5e0!3m2!1sru!2sru!4v1686484938978!5m2!1sru!2sru"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
