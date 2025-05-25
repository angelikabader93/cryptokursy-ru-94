
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SignupForm from '@/components/SignupForm';
import SEOHead from '@/components/SEOHead';
import FAQSchema from '@/components/FAQSchema';

const faqData = [
  {
    question: "Что такое криптовалюта?",
    answer: "Криптовалюта — это цифровая или виртуальная валюта, защищенная криптографией, что делает ее практически невозможной для подделки или двойной траты."
  },
  {
    question: "Безопасно ли инвестировать в криптовалюты?",
    answer: "Инвестиции в криптовалюты сопряжены с высокими рисками. Важно изучить основы, понимать технологию и инвестировать только те средства, которые вы можете позволить себе потерять."
  },
  {
    question: "Какие курсы вы предлагаете?",
    answer: "Мы предлагаем курсы для всех уровней: от базового бесплатного курса для новичков до продвинутых программ по блокчейну, Bitcoin и альткоинам."
  },
  {
    question: "Сколько времени занимает обучение?",
    answer: "Время обучения зависит от выбранного курса. Базовый курс можно пройти за 7 дней, продвинутые курсы занимают от 4 до 12 недель."
  },
  {
    question: "Получу ли я сертификат после прохождения курса?",
    answer: "Да, после успешного прохождения любого платного курса вы получите сертификат о завершении обучения."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <SEOHead 
        title="Часто задаваемые вопросы"
        description="Ответы на популярные вопросы о курсах криптовалют, обучении блокчейну и инвестициях в цифровые активы. Получите всю необходимую информацию."
        canonical="https://cryptokursy.ru/faq"
      />
      <FAQSchema />
      <Header />
      <main className="flex-grow py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">Часто задаваемые вопросы</h1>
          <div className="max-w-3xl mx-auto">
            {faqData.map((item, index) => (
              <Collapsible key={index} className="w-full mb-4">
                <CollapsibleTrigger className="flex items-center justify-between p-4 rounded-md shadow-sm bg-gray-50 hover:bg-gray-100 transition-colors w-full text-left">
                  <span className="text-lg font-semibold">{item.question}</span>
                  <ChevronDown className="w-6 h-6 opacity-50" />
                </CollapsibleTrigger>
                <CollapsibleContent className="p-4 rounded-md shadow-sm bg-white">
                  {item.answer}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
          <div className="mt-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Не нашли ответ на свой вопрос?</h2>
            <p className="text-gray-600 mb-6">Свяжитесь с нами, и мы поможем вам!</p>
            <SignupForm formType="about" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
