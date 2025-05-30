
import React from 'react';
import StructuredData from './StructuredData';

const FAQSchema = () => {
  const faqData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Что такое криптовалюта?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Криптовалюта — это цифровая или виртуальная валюта, защищенная криптографией, что делает ее практически невозможной для подделки или двойной траты."
        }
      },
      {
        "@type": "Question", 
        "name": "Безопасно ли инвестировать в криптовалюты?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Инвестиции в криптовалюты сопряжены с высокими рисками. Важно изучить основы, понимать технологию и инвестировать только те средства, которые вы можете позволить себе потерять."
        }
      },
      {
        "@type": "Question",
        "name": "Какие курсы вы предлагаете?",
        "acceptedAnswer": {
          "@type": "Answer", 
          "text": "Мы предлагаем курсы для всех уровней: от базового бесплатного курса для новичков до продвинутых программ по блокчейну, Bitcoin и альткоинам."
        }
      },
      {
        "@type": "Question",
        "name": "Сколько времени занимает обучение?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Время обучения зависит от выбранного курса. Базовый курс можно пройти за 7 дней, продвинутые курсы занимают от 4 до 12 недель."
        }
      },
      {
        "@type": "Question",
        "name": "Получу ли я сертификат после прохождения курса?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Да, после успешного прохождения любого платного курса вы получите сертификат о завершении обучения."
        }
      }
    ]
  };

  return <StructuredData data={faqData} />;
};

export default FAQSchema;
