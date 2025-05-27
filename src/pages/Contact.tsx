
import SEOHead from "@/components/SEOHead";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CourseBreadcrumbs from "@/components/CourseBreadcrumbs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const breadcrumbs = [
    { name: "Главная", href: "/" },
    { name: "Контакты" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Сообщение отправлено!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <SEOHead 
        title="Контакты - КриптоКурсы | Свяжитесь с нами"
        description="Свяжитесь с командой КриптоКурсы. Ответим на все вопросы о курсах, обучении и криптовалютах. Поддержка 24/7 для наших студентов."
        canonical="https://cryptokursy.ru/contact"
        ogImage="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2074"
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <section className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 text-white py-16 text-center">
          <div className="container mx-auto px-4">
            <CourseBreadcrumbs breadcrumbs={breadcrumbs} />
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Свяжитесь с нами</h1>
            <p className="text-xl text-emerald-100">Ответим на все ваши вопросы о курсах и обучении</p>
          </div>
        </section>

        <main className="container mx-auto px-4 py-12">
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-emerald-600 text-center mb-8">Как с нами связаться</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-xl font-semibold text-emerald-600 mb-3">Email</h3>
                <p className="mb-2"><a href="mailto:info@cryptokursy.ru" className="text-emerald-600 hover:underline">info@cryptokursy.ru</a></p>
                <p className="text-gray-600">Ответим в течение 24 часов</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-xl font-semibold text-emerald-600 mb-3">Telegram</h3>
                <p className="mb-2"><a href="https://t.me/cryptokursy" className="text-emerald-600 hover:underline">@cryptokursy</a></p>
                <p className="text-gray-600">Быстрые ответы на вопросы</p>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-xl font-semibold text-emerald-600 mb-3">Телефон</h3>
                <p className="mb-2"><a href="tel:+79991234567" className="text-emerald-600 hover:underline">+7 (999) 123-45-67</a></p>
                <p className="text-gray-600">Работаем с 9:00 до 21:00 МСК</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-emerald-600 text-center mb-8">Напишите нам</h2>
            <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  type="text"
                  name="name"
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="email"
                  name="email"
                  placeholder="Ваш email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="tel"
                  name="phone"
                  placeholder="Ваш телефон"
                  value={formData.phone}
                  onChange={handleChange}
                />
                <Input
                  type="text"
                  name="subject"
                  placeholder="Тема сообщения"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder="Ваше сообщение"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[120px]"
                />
                <Button type="submit" className="w-full bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600">
                  Отправить сообщение
                </Button>
              </form>
              <p className="text-center text-gray-500 text-sm mt-4">
                Нажимая кнопку, вы соглашаетесь с <a href="/privacy" className="text-emerald-600 hover:underline">политикой конфиденциальности</a>
              </p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold text-emerald-600 text-center mb-8">Часто задаваемые вопросы</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-emerald-600 mb-3">Как проходит обучение?</h3>
                <p className="text-gray-600">Все курсы проходят онлайн в удобном для вас темпе. Доступ к материалам предоставляется сразу после оплаты.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-emerald-600 mb-3">Есть ли поддержка студентов?</h3>
                <p className="text-gray-600">Да, мы предоставляем круглосуточную поддержку через Telegram и email для всех наших студентов.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-emerald-600 mb-3">Можно ли вернуть деньги?</h3>
                <p className="text-gray-600">Да, у нас есть 14-дневная гарантия возврата средств, если курс вам не подошел.</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold text-emerald-600 mb-3">Выдаете ли вы сертификаты?</h3>
                <p className="text-gray-600">После успешного прохождения платных курсов выдается именной сертификат о прохождении обучения.</p>
              </div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Contact;
